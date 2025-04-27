"use client";
import React from "react";
import { Button } from "../ui/button";

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
                    <div className="flex justify-end">
                        <Button>Sign in</Button>
                    </div>
                </form>
            </div>
            <br />
        </div>
    );
};

export default Login;
