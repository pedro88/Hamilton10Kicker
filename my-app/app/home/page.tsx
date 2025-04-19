import ProfileOverview from "@/components/ProfileOverview";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FetchUserProfile } from "../serverAction/fetchUsers";

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <ProfileOverview FetchUserProfile={FetchUserProfile()} />
            </div>
            <div className="flex justify-center space-x-20">
                <Button className="h-15 text-2xl mb-5" asChild>
                    <Link href={"/home/score"}>SCORE</Link>
                </Button>
                <Button className="h-15 text-2xl mb-5" asChild>
                    <Link href={"/home/start"}>PLAY</Link>
                </Button>
            </div>
        </>
    );
};

export default HomePage;
