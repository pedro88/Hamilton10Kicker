export type RegisterBody = {
    username: string;
    email: string;
    password: string;
    country: string;
}

export type EmailExist = {
    email: string;
}

export type LoginBody = {
    id: number;
    firstname: string;
    email: string;
    password?: string;
}
