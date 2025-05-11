import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users.entity";

@Entity()
export class SoloGame {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Users, (user) => user.friends)
    player_id1!: number;

    @ManyToOne(() => Users, (user) => user.friendsOf)
    player_id2!: number;

    @ManyToOne(() => Users, (user) => user.friends)
    winner_id!: number;

    @ManyToOne(() => Users, (user) => user.friendsOf)
    looser_id!: number;

    @CreateDateColumn()
    created_at!: Date;
}
