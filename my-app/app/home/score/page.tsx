import ScoreTable from "@/components/organisms/ScoreTable";
import {
    fetchSoloMatches,
    fetchTeamMatches,
} from "../../serverAction/fetchMatches";
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
