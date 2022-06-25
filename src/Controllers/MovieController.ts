import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { HttpCodeEnum } from "src/Enums/HttpCodeEnum";
import { MovieRequest } from "src/Models/MovieRequest";
import { MovieService } from "src/Services/MovieService";

@Controller('movie')
export class MovieController {
    constructor(private movieService: MovieService) {
    }

    @Post()
    @HttpCode(HttpCodeEnum.CREATED)
    public async createMovie(@Body() movieRequest: MovieRequest) {
        return await this.movieService.createMovie(movieRequest);
        
    }
}