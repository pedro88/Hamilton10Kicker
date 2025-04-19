import ProfileOverview from "@/components/ProfileOverview";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FetchUserProfile } from "../serverAction/fetchUsers";

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <ProfileOverview FetchUserProfile={FetchUserProfile()}/>
            </div>
            <Button className="w-full h-20 text-3xl mt-20 mb-5" asChild>
                <Link href={"/home/score"}>SCORE</Link>
            </Button>
            <Button className="w-full h-20 text-3xl mb-5" asChild>
                <Link href={"/home/start"}>PLAY</Link>
            </Button>
        </>
    );
};

export default HomePage;
