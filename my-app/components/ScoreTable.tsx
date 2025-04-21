"use client";
import React, { FC, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { Match } from "@/utils/type";

type ScoreTableProps = {
    fetchSoloMatches: Match[];
    fetchTeamMatches: Match[];
};

const ScoreTable: FC<ScoreTableProps> = ({
    fetchSoloMatches,
    fetchTeamMatches,
}) => {
    const [matchType, setMatchType] = useState<string>("");
    const [displayMatch, setDisplayMatch] = useState<Match[]>();

    const handleSoloGame = () => {
        setMatchType("SOLO");
        setDisplayMatch(fetchSoloMatches);
    };

    const handleTeamGame = () => {
        setMatchType("TEAM");
        setDisplayMatch(fetchTeamMatches);
    };

    return (
        <>
            <div className="flex justify-center space-x-20 z-50 fixed bottom-10 w-full">
                <Button onClick={handleSoloGame} size={"lg"}>SOLO</Button>
                <Button onClick={handleTeamGame} size={"lg"}>TEAM</Button>
            </div>
            <Table className="w-88 m-auto mb-25">
                <TableCaption>⚽ Choose your match type ⚽</TableCaption>
                <TableHeader className="bg-gray-100">
                    <TableRow>
                        <TableHead className="w-[100px]">Match</TableHead>
                        <TableHead className="text-center">Score</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {displayMatch &&
                        displayMatch.map((match) => (
                            <TableRow key={match.id}>
                                <TableCell>
                                    <span
                                        className={
                                            matchType === "SOLO"
                                                ? match.player1 === match.winner
                                                    ? "font-bold"
                                                    : ""
                                                : match.team1 === match.winner
                                                ? "font-bold"
                                                : ""
                                        }
                                    >
                                        {matchType === "SOLO"
                                            ? match.player1
                                            : match.team1}
                                    </span>
                                    <span>{" VS "}</span>
                                    <span
                                        className={
                                            matchType === "SOLO"
                                                ? match.player2 === match.winner
                                                    ? "font-bold"
                                                    : ""
                                                : match.team2 === match.winner
                                                ? "font-bold"
                                                : ""
                                        }
                                    >
                                        {matchType === "SOLO" ? match.player2 : match.team2}
                                    </span>
                                </TableCell>
                                <TableCell className="text-center">
                                    <span
                                        className={
                                            matchType === "SOLO"
                                                ? match.player2 === match.winner
                                                    ? "font-bold"
                                                    : ""
                                                : match.team2 === match.winner
                                                ? "font-bold"
                                                : ""
                                        }
                                    >
                                        {match.score1}
                                    </span>
                                    <span>{" / "}</span>
                                    <span
                                        className={
                                            matchType === "SOLO"
                                                ? match.player2 === match.winner
                                                    ? "font-bold"
                                                    : ""
                                                : match.team2 === match.winner
                                                ? "font-bold"
                                                : ""
                                        }
                                    >
                                        {match.score2}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right">
                                    {match.created_at}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </>
    );
};

export default ScoreTable;
