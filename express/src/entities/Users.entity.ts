import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Friend } from "./Friend.entity";
import { SoloGame } from "./SoloGame.entity";
import { Team } from "./Team.entity";

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

    @OneToMany(() => Friend, (friend) => friend.user)
    friends!: Friend[];

    @OneToMany(() => Friend, (friend) => friend.friend)
    friendsOf!: Friend[];

    @OneToMany(() => SoloGame, (game) => game.player1)
    player_id1!: SoloGame[];

    @OneToMany(() => SoloGame, (game) => game.player2)
    player_id2!: SoloGame[];

    @OneToMany(() => SoloGame, (game) => game.winner)
    winner_id!: SoloGame[];

    @OneToMany(() => SoloGame, (game) => game.looser)
    looser_id!: SoloGame[];

    @OneToMany(() => Team, (team) => team.player1)
    team_player_id1!: Team[];

    @OneToMany(() => Team, (team) => team.player2)
    team_player_id2!: Team[];
}
