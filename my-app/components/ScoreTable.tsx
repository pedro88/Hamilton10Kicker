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

type TypedScore = {
    id: number;
    player1?: string;
    player2?: string;
    team1?: string;
    team2?: string;
    score1: number;
    score2: number;
    winner: string;
    created_at: string;
};

type ScoreTableProps = {
    fetchSoloMatches: TypedScore[];
    fetchTeamMatches: TypedScore[];
};

const ScoreTable: FC<ScoreTableProps> = ({
    fetchSoloMatches,
    fetchTeamMatches,
}) => {
    const [matchType, setMatchType] = useState<string>("");
    const [displayMatch, setDisplayMatch] = useState<TypedScore[]>();

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
            <div className="flex place-content-between mr-4 ml-4 mb-5">
                <Button onClick={handleSoloGame}>SOLO</Button>
                <Button onClick={handleTeamGame}>TEAM</Button>
            </div>
            <Table className="w-88 m-auto">
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
