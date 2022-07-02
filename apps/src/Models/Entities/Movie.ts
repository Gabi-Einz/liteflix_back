import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("movie", { schema: "liteflix_db" })
export class Movie {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "title",
    comment: "Nombre de la pelicula",
    length: 255,
  })
  title: string;

  @Column("varchar", {
    name: "image",
    comment: "url de la imagen de la pelicula",
    length: 255,
  })
  image: string;

  @Column("timestamp", {
    name: "created_at",
    comment: "Fecha de creación de la entidad",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    nullable: true,
    comment: "Fecha de actualización de la entidad",
  })
  updatedAt: Date | null;

  @Column("timestamp", {
    name: "deleted_at",
    nullable: true,
    comment: "Fecha de baja lógica de la entidad",
  })
  deletedAt: Date | null;

  @Column("tinyint", {
    name: "enabled",
    comment:
      "Atributo booleano que indicará si la entidad está o no habilitada",
    width: 1,
    default: () => "'1'",
  })
  enabled: boolean;
}
