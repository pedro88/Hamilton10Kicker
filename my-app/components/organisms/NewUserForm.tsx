"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { newUserSchema, NewUser } from "@/lib/schema/newUser";
import SelectCountry from "@/components/molecules/SelectCountry";
import { allCountry } from "@/app/serverAction/fetchCountry";

const NewUserForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<NewUser>({
        resolver: zodResolver(newUserSchema)
    });

    const createANewUser: SubmitHandler<NewUser> = (data) => {
        console.log(data);
    };

    return (
        <form
            className="flex flex-col space-y-6 m-4"
            onSubmit={handleSubmit(createANewUser)}
        >
            <div className="flex items-center">
                <label className="w-24">Username</label>
                <input
                    type="text"
                    className={
                        errors.username
                            ? "flex-1 border-2 rounded p-1  border-red-500"
                            : "flex-1 border-2 rounded p-1 "
                    }
                    {...register("username")}
                />
            </div>

            <div className="flex items-center">
                <label className="w-24">Email</label>
                <input
                    type="email"
                    className={
                        errors.email
                            ? "flex-1 border-2 rounded p-1  border-red-500"
                            : "flex-1 border-2 rounded p-1 "
                    }
                    {...register("email")}
                />
            </div>

            <div className="flex items-center">
                <label className="w-24">Password</label>
                <input
                    type="password"
                    className={
                        errors.password
                            ? "flex-1 border-2 rounded p-1  border-red-500"
                            : "flex-1 border-2 rounded p-1 "
                    }
                    placeholder="Min 8 character"
                    {...register("password")}
                />
            </div>

            <div className="flex items-center">
                <label className="w-24">Country</label>
                <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                        <SelectCountry
                            data={allCountry()}
                            onSelectCountry={(value) => field.onChange(value)}
                            value={field.value}
                            reject={errors.country}
                        />
                    )}
                />
            </div>

            <div>
                <Button type="submit" className="w-full">Create</Button>
            </div>
        </form>
    );
};

export default NewUserForm;
