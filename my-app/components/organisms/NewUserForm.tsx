"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { newUserSchema, NewUser } from "@/lib/schema/newUser";
import SelectCountry from "@/components/molecules/SelectCountry";
import { allCountry } from "@/app/serverAction/fetchCountry";
import { redirect } from "next/navigation";
import { createANewUser } from "@/app/serverAction/fetchRegisterLogin";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<NewUser>({
        resolver: zodResolver(newUserSchema),
    });

    const [disableButton, setDisableButton] = useState(false);

    const handleCreateNewUser: SubmitHandler<NewUser> = async (data) => {
        setDisableButton(true);
        const response = await createANewUser(data);
        if (response.success) return redirect("/login");
    };

    return (
        <form
            className="flex flex-col space-y-6 m-4"
            onSubmit={handleSubmit(handleCreateNewUser)}
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
                <Button
                    type="submit"
                    disabled={disableButton}
                    className={`w-full ${
                        disableButton && "animate-bounce"
                    }`}
                >
                    Create
                </Button>
            </div>
        </form>
    );
};

export default RegisterForm;
