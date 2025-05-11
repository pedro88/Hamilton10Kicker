import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    password!: string;

    @Column()
    email!: string;

    @Column()
    country!: string;

    @Column()
    level: number = 0;

    @Column()
    xp: number = 0;

    @Column()
    won_game: number = 0;

    @Column()
    lost_game: number = 0;

    @Column()
    won_team_game: number = 0;

    @Column()
    lost_team_game: number = 0;

    @CreateDateColumn()
    created_at!: Date;
}
