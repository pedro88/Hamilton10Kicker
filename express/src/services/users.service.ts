import { AppDataSource } from "../config/database";
import { Users } from "../entities/Users.entity";
import { Repository } from "typeorm";
import { RegisterBody } from "../lib/connectionType";
import * as bcrypt from "bcrypt";

export class UsersService {
    private usersRepository: Repository<Users>;

    constructor() {
        this.usersRepository = AppDataSource.getRepository(Users);
    }

    async findAll(): Promise<Users[]> {
        return await this.usersRepository.find();
    }

    async findById(id: number): Promise<Users | null> {
        return await this.usersRepository.findOneBy({ id });
    }

    async findByEmail(email: string): Promise<Users | null> {
        return await this.usersRepository.findOneBy({ email });
    }

    async loginCredential(email: string): Promise<Users | null> {
        return await this.usersRepository.findOne({
            where: { email },
            select: [ "id", "email", "username", "password" ]
        });
    }

    async create(userData: RegisterBody): Promise<Users> {
        // hash
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);
        
        const newUser = this.usersRepository.create({
            username: userData.username,
            email: userData.email,
            password: hashedPassword,
            country: userData.country
        });
        
        return await this.usersRepository.save(newUser);
    }

    async update(id: number, data: Partial<Users>): Promise<Users | null> {
        await this.usersRepository.update(id, data);
        return await this.findById(id);
    }

    async delete(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}