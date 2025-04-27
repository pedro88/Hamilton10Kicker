"use client"
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button";
import type { NewUserForm } from "@/utils/type";

const NewUserForm = () => {
    const { register, handleSubmit } = useForm<NewUserForm>();
    const onSubmit: SubmitHandler<NewUserForm> = (data) => console.log(data);

    return (
        <form
            className="flex flex-col space-y-6 m-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex items-center">
                <label className="w-24">Username</label>
                <input
                    type="text"
                    className="flex-1 border-2 rounded p-1"
                    {...register("username")}
                />
            </div>

            <div className="flex items-center">
                <label className="w-24">Email</label>
                <input
                    type="email"
                    className="flex-1 border-2 rounded p-1"
                    {...register("email")}
                />
            </div>

            <div className="flex items-center">
                <label className="w-24">Password</label>
                <input
                    type="password"
                    className="flex-1 border-2 rounded p-1"
                    {...register("password")}
                />
            </div>

            <div className="flex items-center">
                <label className="w-24">Country</label>
                <input
                    type="text"
                    className="flex-1 border-2 rounded p-1"
                    {...register("country")}
                />
            </div>

            <div className="flex justify-end mr-1 mt-2">
                <Button type="submit">Create</Button>
            </div>
        </form>
    );
};

export default NewUserForm;
