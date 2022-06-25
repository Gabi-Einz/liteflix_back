import { Injectable } from "@nestjs/common";

@Injectable()
export class MovieDao {
    constructor() {
    }
    public async createMovie(title: string, image: string): Promise<string> {
        return `Title: ${title} Image: ${image}`;
    }
}