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
} from "@/components/ui/table";
import { Match } from "@/lib/types/type";

type RecentGameProps = {
    FetchRecentUserMatch: Match[];
};

const RecentGame: FC<RecentGameProps> = ({ FetchRecentUserMatch }) => {
    const RecentMatch = FetchRecentUserMatch;

    return (
        <>
            <Table className="w-88 m-auto mb-25">
                <TableCaption>⚽ Your recent Matches ⚽</TableCaption>
                <TableHeader className="bg-gray-100">
                    <TableRow>
                        <TableHead className="w-[100px]">Match</TableHead>
                        <TableHead className="text-center">Score</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {RecentMatch &&
                        RecentMatch.map((match) => (
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
                                            match.player2 === match.winner
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

export default RecentGame;
