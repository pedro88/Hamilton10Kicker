import ScoreTable from "@/components/ScoreTable";
import { Button } from "@/components/ui/button";
import { fetchSoloMatches } from "../serverAction/fetchMatches";
import Link from "next/link";
import React from "react";

const HomePage = () => {
    return (
        <div>
            <h1 className="text-4xl text-center mt-5 mb-10">TOP SCORE</h1>
            <div className="flex justify-center mb-4">
                <Link href={"/start"} className="absolute top-66">
                    <Button>PLAY</Button>
                </Link>
            </div>
                <ScoreTable fetchSoloMatches={fetchSoloMatches()}/>
        </div>
    );
};

export default HomePage;
