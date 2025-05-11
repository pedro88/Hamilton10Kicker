import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Team } from "./Team.entity";

@Entity()
export class TeamGame {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Team, (team) => team.team_id1)
    team_1!: Team[];

    @ManyToOne(() => Team, (team) => team.team_id2)
    team_2!: Team[];

    @Column()
    won_game: number = 0;

    @Column()
    lost_game: number = 0;

    @CreateDateColumn()
    created_at!: Date;
}
