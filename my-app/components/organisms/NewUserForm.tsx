"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { newUserSchema, NewUser } from "@/lib/schema/newUser";
import SelectCountry from "@/components/molecules/SelectCountry"
import { allCountry } from "@/app/serverAction/fetchCountry";

const NewUserForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<NewUser>({
        resolver: zodResolver(newUserSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            country: "",
        },
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
                    className={errors.username
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
                    className={errors.email
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
                    className={errors.password
                            ? "flex-1 border-2 rounded p-1  border-red-500"
                            : "flex-1 border-2 rounded p-1 "
                    }
                    placeholder="Min 8 character"
                    {...register("password")}
                />
            </div>

            <div className="flex items-center">
                <label className="w-24">Country</label>
                {/* <input
                    type="text"
                    className={errors.country
                            ? "flex-1 border-2 rounded p-1  border-red-500"
                            : "flex-1 border-2 rounded p-1 "
                    }
                    {...register("country")}
                /> */}
                <SelectCountry data={allCountry()}/>
            </div>

            <div className="flex justify-end mr-1 mt-2">
                <Button type="submit">Create</Button>
            </div>
        </form>
    );
};

export default NewUserForm;
