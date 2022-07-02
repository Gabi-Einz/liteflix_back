import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { HttpCodeEnum } from "../Enums/HttpCodeEnum";
import { MovieRequest } from "../Models/MovieRequest";
import { MovieResponse } from "../Models/Response/MovieResponse";
import { MovieService } from "../Services/MovieService";


@Controller('movie')
export class MovieController {
    constructor(private movieService: MovieService) {
    }

    @Post()
    @HttpCode(HttpCodeEnum.CREATED)
    public async createMovie(@Body() movieRequest: MovieRequest): Promise<MovieResponse> {
        return await this.movieService.createMovie(movieRequest);      
    }
}