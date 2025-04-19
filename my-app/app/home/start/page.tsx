import { FetchFriendWithUserId } from "@/app/serverAction/fetchUsers";
import CardWithForm from "@/components/CardWithForm";
import React from "react";

const StartPage = () => {
    return (
        <div>
            <h1 className="text-4xl text-center mt-5 mb-10">IT&#39;S TIME TO PLAY !</h1>
            <div className="flex justify-center">
                <CardWithForm FetchFriendWithUserId={FetchFriendWithUserId()}/>
            </div>
        </div>
    );
};

export default StartPage;
