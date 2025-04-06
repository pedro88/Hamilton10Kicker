"use client";
import React, { FC } from "react";
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
    player1: string;
    player2: string;
    score1: number;
    score2: number;
    winner: string;
    created_at: string;
};

type ScoreTableProps = {
    soloScore: TypedScore[];
};

const ScoreTable: FC<ScoreTableProps> = ({ soloScore }) => {
    return (
        <>
            <div className="space-x-20 ml-4 mb-5">
                <Button>SOLO</Button>
                <Button>TEAM</Button>
            </div>
            <Table className="w-88 m-auto">
                <TableCaption>All Solo Game Score</TableCaption>
                <TableHeader className="bg-gray-100">
                    <TableRow>
                        <TableHead className="w-[100px]">Match</TableHead>
                        <TableHead className="text-center">Score</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {soloScore.map((match) => (
                        <TableRow key={match.id}>
                            <TableCell>
                                <span
                                    className={
                                        match.player1 === match.winner
                                            ? "font-bold"
                                            : ""
                                    }
                                >
                                    {match.player1}
                                </span>
                                <span>{" VS "}</span>
                                <span
                                    className={
                                        match.player2 === match.winner
                                            ? "font-bold"
                                            : ""
                                    }
                                >
                                    {match.player2}
                                </span>
                            </TableCell>
                            <TableCell className="text-center">
                                <span
                                    className={
                                        match.player1 === match.winner
                                            ? "font-bold"
                                            : ""
                                    }
                                >
                                    {match.score1}
                                </span>
                                <span>{" / "}</span>
                                <span
                                    className={
                                        match.player2 === match.winner
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
