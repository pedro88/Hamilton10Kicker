"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Login = () => {
    return (
        <div className="flex-col justify-center ">
            <div className=" w-96 h-40 p-5">
                <form action="" className="flex flex-col space-y-5 m-4">
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Username"
                            className="flex-1 border-2 rounded p-1"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="password"
                            placeholder="Password"
                            className="flex-1 border-2 rounded p-1"
                        />
                    </div>
                    <Button className="w-full h-10">Sign in</Button>
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
