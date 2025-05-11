import {
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

    @ManyToOne(() => Users, (user) => user.player_id1)
    player1!: Users[];

    @ManyToOne(() => Users, (user) => user.player_id2)
    player2!: Users[];

    @ManyToOne(() => Users, (user) => user.winner_id)
    winner!: Users[];

    @ManyToOne(() => Users, (user) => user.looser_id)
    looser!: Users[];

    @CreateDateColumn()
    created_at!: Date;
}
