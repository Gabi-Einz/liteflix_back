import { Injectable } from "@nestjs/common";
import { title } from "process";
import { MovieDao } from "src/Daos/MovieDao";
import { MovieRequest } from "src/Models/MovieRequest";

@Injectable()
export class MovieService {
    constructor(private movieDao: MovieDao) {
    }
    public async createMovie(movieRequest: MovieRequest): Promise<string> {
        const {title, image} = movieRequest;
        return await this.movieDao.createMovie(title, image);
    }
}