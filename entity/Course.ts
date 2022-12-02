import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    image: string

    @Column()
    ranking: number
}