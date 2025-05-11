import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users.entity";

@Entity()
export class Friend {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Users, (user) => user.friends)
    user_id!: number;

    @ManyToOne(() => Users, (user) => user.friendsOf)
    friend_id!: number;

    @Column()
    status!: string;

    @CreateDateColumn()
    created_at!: Date;
}
