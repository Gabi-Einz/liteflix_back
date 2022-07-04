import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Movie } from "../Models/Entities/Movie";

@Injectable()
export class MovieDao {
    constructor(       
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    ) {
    }
    public async createMovie(movie: Movie): Promise<Movie> {
        try {
            return await this.movieRepository.save(movie);
        } catch (error) {
            throw new BadRequestException(`Error al crear pelicula en base de datos. ${error}`);
        }
       
    }

    public async getMovies(): Promise<Movie[]> {
        try {
            return await this.movieRepository.find();
        } catch (error) {
            throw new BadRequestException(`Error al obtener peliculas de base de datos. ${error}`);
        }     
    }

    
}