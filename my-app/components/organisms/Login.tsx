"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { LoginType, loginSchema } from "@/lib/schema/newUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/app/serverAction/fetchAuth";
import { redirect } from "next/navigation";
import { ApiResponseFormat } from "@/lib/types/type";

const Login = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
    });

    const [disableButton, setDisableButton] = useState(false);
    const [error, setError] = useState(false);

    const handleLogin: SubmitHandler<LoginType> = async (data) => {
        setDisableButton(true);
        const response: ApiResponseFormat = await login(data);

        if (response.success == true) return redirect("/home");

        setDisableButton(false);
        setError(true);

        return;
    };

    return (
        <div className="flex-col justify-center ">
            <div className=" w-96 h-40 p-5">
                <form
                    onSubmit={handleSubmit(handleLogin)}
                    className="flex flex-col space-y-5 m-4"
                >
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Email"
                            {...register("email")}
                            className="flex-1 border-2 rounded p-1"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                            className="flex-1 border-2 rounded p-1"
                        />
                    </div>
                    {error && (
                        <p className="text-red-600">
                            Email or password is incorrect
                        </p>
                    )}
                    <Button
                        disabled={disableButton}
                        className={`w-full h-10 ${
                            disableButton && "animate-bounce"
                        }`}
                    >
                        Sign in
                    </Button>
                    <Link href="/register" className="flex justify-center">
                        <p className="underline">Create a new account</p>
                    </Link>
                    <hr className="mb-3" />
                    {/* OLD CREATE ACCOUNT BUTTON */}
                    {/* <div className="flex justify-center">
                        <h1 className="text-2xl">No account ?</h1>
                        <Link href="/new-account" className="ml-5">
                            <Button size="sm">Create</Button>
                        </Link>
                    </div> */}
                </form>
            </div>
            <br />
        </div>
    );
};

export default Login;
