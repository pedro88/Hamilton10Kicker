import ScoreTable from "@/components/ScoreTable";
import { Button } from "@/components/ui/button";
import { fetchSoloMatches, fetchTeamMatches } from "../serverAction/fetchMatches";
import Link from "next/link";
import React from "react";

const HomePage = () => {
    return (
        <div>
            <div className="flex justify-center mb-4">
                <Link href={"/start"} className="">
                    <Button>PLAY</Button>
                </Link>
            </div>
            <h1 className="text-4xl text-center mt-5 mb-10">TOP SCORE</h1>
                <ScoreTable fetchSoloMatches={fetchSoloMatches()} fetchTeamMatches={fetchTeamMatches()} />
        </div>
    );
};

export default HomePage;
