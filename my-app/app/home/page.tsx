import ProfileOverview from "@/components/ProfileOverview";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FetchRecentUserMatch, FetchUserProfile } from "../serverAction/fetchUsers";
import RecentGame from "@/components/RecentGame";

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <ProfileOverview FetchUserProfile={FetchUserProfile()} />
            </div>
            <article>
                <RecentGame FetchRecentUserMatch={FetchRecentUserMatch()}/>
            </article>
            <div className="flex justify-center space-x-45 w-sm fixed bottom-5 ">
                <Button className="h-15 mb-5" size={"lg"} asChild>
                    <Link href={"/home/score"}>SCORE</Link>
                </Button>
                <Button className="h-15 mb-5" size={"lg"} asChild>
                    <Link href={"/home/start"}>PLAY</Link>
                </Button>
            </div>
        </>
    );
};

export default HomePage;
