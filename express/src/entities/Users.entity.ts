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
    wongame: number = 0;

    @Column()
    lostgame: number = 0;

    @Column()
    wonteamgame: number = 0;

    @Column()
    lostteamgame: number = 0;

    @CreateDateColumn()
    createdat!: Date;
}
