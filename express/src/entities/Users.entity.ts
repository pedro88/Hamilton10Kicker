import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Friend } from "./Friend.entity";
import { SoloGame } from "./SoloGame.entity";

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

    @OneToMany(() => Friend, (friend) => friend.user_id)
    friends!: Friend[];

    @OneToMany(() => Friend, (friend) => friend.friend_id)
    friendsOf!: Friend[];

    @OneToMany(() => SoloGame, (game) => game.player_id1)
    player_id1!: SoloGame[];

    @OneToMany(() => SoloGame, (game) => game.player_id2)
    player_id2!: SoloGame[];

    @OneToMany(() => SoloGame, (game) => game.winner_id)
    winner_id!: SoloGame[];

    @OneToMany(() => SoloGame, (game) => game.looser_id)
    looser_id!: SoloGame[];
}
