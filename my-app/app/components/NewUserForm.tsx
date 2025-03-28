import React from "react";

const NewUserForm = () => {
    return (
        <form className="flex flex-col space-y-2 m-4">
            <div className="flex items-center">
                <label className="w-24">Username</label>
                <input type="text" className="flex-1 border-2 rounded p-1" />
            </div>

            <div className="flex items-center">
                <label className="w-24">Email</label>
                <input type="email" className="flex-1 border-2 rounded p-1" />
            </div>

            <div className="flex items-center">
                <label className="w-24">Password</label>
                <input
                    type="password"
                    className="flex-1 border-2 rounded p-1"
                />
            </div>

            <div className="flex items-center">
                <label className="w-24">Country</label>
                <input type="text" className="flex-1 border-2 rounded p-1" />
            </div>
            
            <div className="flex justify-end mr-1 mt-2">
                <button className="border-2 rounded-md bg-h10red w-20">Create</button>
            </div>
        </form>
    );
};

export default NewUserForm;
