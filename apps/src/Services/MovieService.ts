import { Injectable } from "@nestjs/common";
import { MovieDao } from "../Daos/MovieDao";
import { Movie } from "../Models/Entities/Movie";
import { MovieRequest } from "../Models/MovieRequest";
import { MovieResponse } from "../Models/Response/MovieResponse";

@Injectable()
export class MovieService {
    constructor(private movieDao: MovieDao) {
    }
    public async createMovie(movieRequest: MovieRequest): Promise<MovieResponse> {
        const {title, image} = movieRequest;
        const movie: Movie = this.buildMovie(title, image);
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
}