import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users.entity";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToOne(() => Users, (user) => user.friends)
    player_id1!: number;

    @ManyToOne(() => Users, (user) => user.friendsOf)
    player_id2!: number;

    @Column()
    won_game: number = 0;

    @Column()
    lost_game: number = 0;

    @CreateDateColumn()
    created_at!: Date;
}
