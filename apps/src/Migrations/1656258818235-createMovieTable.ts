import { MigrationInterface, QueryRunner } from "typeorm"

export class createMovieTable1656258818235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE movie 
        (id INT AUTO_INCREMENT NOT NULL,
        title VARCHAR(255) NOT NULL COMMENT 'Nombre de la pelicula',
        image VARCHAR(255) NOT NULL COMMENT 'url de la imagen de la pelicula',
        created_at TIMESTAMP NOT NULL DEFAULT NOW() COMMENT 'Fecha de creación de la entidad',
        updated_at TIMESTAMP NULL COMMENT 'Fecha de actualización de la entidad',
        deleted_at TIMESTAMP NULL COMMENT 'Fecha de baja lógica de la entidad',
        enabled TINYINT(1) NOT NULL DEFAULT 1 COMMENT 'Atributo booleano que indicará si la entidad está o no habilitada',
        PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE 'utf8mb4_unicode_ci' ENGINE = InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE movie;`);
    }

}
