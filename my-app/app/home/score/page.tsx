import ScoreTable from "@/components/ScoreTable";
import { Button } from "@/components/ui/button";
import {
    fetchSoloMatches,
    fetchTeamMatches,
} from "../../serverAction/fetchMatches";
import Link from "next/link";
import React from "react";

const ScorePage = () => {
    return (
        <div>
            <h1 className="text-4xl text-center mb-10">TOP SCORE</h1>
            <ScoreTable
                fetchSoloMatches={fetchSoloMatches()}
                fetchTeamMatches={fetchTeamMatches()}
            />
        </div>
    );
};

export default ScorePage;
