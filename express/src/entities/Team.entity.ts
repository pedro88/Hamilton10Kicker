import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users.entity";
import { TeamGame } from "./TeamGame.entity";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToOne(() => Users, (user) => user.team_player_id1)
    player_id1!: number;

    @ManyToOne(() => Users, (user) => user.team_player_id2)
    player_id2!: number;

    @Column()
    won_game: number = 0;

    @Column()
    lost_game: number = 0;

    @CreateDateColumn()
    created_at!: Date;

    @OneToMany(() => TeamGame, (teamgame) => teamgame.team_id1)
    team_id1!: number;

    @OneToMany(() => TeamGame, (teamgame) => teamgame.team_id2)
    team_id2!: number;
}
