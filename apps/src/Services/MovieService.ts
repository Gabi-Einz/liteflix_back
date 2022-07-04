import { BadRequestException, Injectable } from "@nestjs/common";
import { MovieDao } from "../Daos/MovieDao";
import { Movie } from "../Models/Entities/Movie";
import { MovieRequest } from "../Models/MovieRequest";
import { MovieResponse } from "../Models/Response/MovieResponse";
import * as  fs from 'fs';
import { resolve } from "path";
@Injectable()
export class MovieService {
    constructor(private movieDao: MovieDao) {
    }
    public async createMovie(movieRequest: MovieRequest): Promise<MovieResponse> {
        const {title, image} = movieRequest;
        const imageName: string = await this.saveImageOnDisk(image); 
        const movie: Movie = this.buildMovie(title, imageName);
        const movieEntity: Movie = await this.movieDao.createMovie(movie);
        return this.buildMovieResponse(movieEntity?.id, movieEntity?.title, movieEntity?.image);
    }

    private buildMovie(title: string, image: string): Movie {
        let movie: Movie = new Movie();
        movie.title = title;
        movie.image = image;
        return movie;
    }

    private buildMovieResponse(id: number, title: string, image: string): MovieResponse {
        let movieResponse: MovieResponse = new MovieResponse(id,title,image);
        return movieResponse;
    }

    private async saveImageOnDisk(image: string): Promise<string> {
        let base64Data = image.substring(image.indexOf(",") + 1);
        const timestamp = new Date().getTime();
        const imageName: string = `/${timestamp}.jpg`;
        const relativePath: string = `apps/resources${imageName}`;
        const absolutePath: string = resolve(relativePath);
        fs.writeFile(absolutePath, base64Data, 'base64', function(err: any) {
            if(err)
                throw new BadRequestException(`Error al guardar imagen. ${err}`);
            console.log("Imagen guardada correctamente!");
        });
        return imageName;
    }

    public async getMovies(): Promise<MovieResponse[]> {
        const movies: Movie[] = await this.movieDao.getMovies();
        let moviesResponse: MovieResponse[] = [];
        for await (let movie of movies) {
            let movieResponse: MovieResponse = this.buildMovieResponse(movie?.id, movie?.title, movie?.image)
            moviesResponse.push(movieResponse);
        }
        return moviesResponse;
    }
}