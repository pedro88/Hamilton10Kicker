"use server";
import { LoginCredential, RegisterCredential } from "@/lib/types/authTypes";
import { cookies } from "next/headers";

const Api: string = process.env.API_URL || "NO API";

export const createANewUser = async (body: RegisterCredential) => {
    try {
        const response = await fetch(`${Api}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (response.status === 409)
            return { success: false, message: "This email is already used..." };

        if (response.status === 201) {
            const data = await response.json();
            return data;
        }

        return { success: false, message: "We have a problem..." };
    } catch (error) {
        return { success: false, message: "Somethin wrong...", error: error };
    }
};

export const login = async (body: LoginCredential) => {
    try {
        const response = await fetch(`${Api}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (response.status === 400)
            return {
                success: false,
                message: "Email or password is incorrect",
            };

        const data = await response.json();

        const cookieStore = await cookies();

        cookieStore.set({
            name: "Authorization",
            value: data.token,
            httpOnly: true,
            path: "/",
        });

        if (response.status === 202)
            return {
                success: true,
                message: "You are logged !",
                content: data,
            };

        return;
    } catch (error) {
        return { success: false, message: `Somthing wrong... ${error}` };
    }
};
