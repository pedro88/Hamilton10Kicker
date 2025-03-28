"use client";
import React from "react";

const Login = () => {
    return (
        <div className="flex-col justify-center ">
            <div className=" w-96 h-40 p-5">
                <form action="" className=" space-y-4">
                    <label>Username</label>
                    <input type="text" className="ml-5 border-2 rounded-sm" />
                    <label>Password</label>
                    <input type="text" className="ml-6 border-2 rounded-sm" />
                    <div className="flex justify-end mr-12">
                        <button className="border-1 rounded-2xl w-20 h-9 bg-sky-600 text-white hover:bg-sky-400">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
            <br />
        </div>
    );
};

export default Login;
