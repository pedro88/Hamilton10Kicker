import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";

const score = [
    {
        id: 2,
        player1: "Michel",
        player2: "Pedro",
        score1: 11,
        score2: 9,
        winner: "Michel",
        created_at: "5/3/24",
    },
    {
        id: 3,
        player1: "Lucas",
        player2: "Anna",
        score1: 10,
        score2: 8,
        winner: "Lucas",
        created_at: "7/3/24",
    },
    {
        id: 4,
        player1: "Thomas",
        player2: "Sophie",
        score1: 7,
        score2: 10,
        winner: "Sophie",
        created_at: "8/3/24",
    },
    {
        id: 5,
        player1: "Marco",
        player2: "Laura",
        score1: 9,
        score2: 10,
        winner: "Laura",
        created_at: "10/3/24",
    },
    {
        id: 6,
        player1: "Michel",
        player2: "Lucas",
        score1: 11,
        score2: 9,
        winner: "Michel",
        created_at: "12/3/24",
    },
    {
        id: 7,
        player1: "Pedro",
        player2: "Anna",
        score1: 8,
        score2: 10,
        winner: "Anna",
        created_at: "14/3/24",
    },
    {
        id: 8,
        player1: "Thomas",
        player2: "Marco",
        score1: 10,
        score2: 6,
        winner: "Thomas",
        created_at: "16/3/24",
    },
    {
        id: 17,
        player1: "Thomas",
        player2: "Michel",
        score1: 10,
        score2: 11,
        winner: "Michel",
        created_at: "12/4/24",
    },
    {
        id: 18,
        player1: "Laura",
        player2: "Anna",
        score1: 10,
        score2: 3,
        winner: "Laura",
        created_at: "15/4/24",
    },
    {
        id: 19,
        player1: "Marco",
        player2: "Sophie",
        score1: 10,
        score2: 9,
        winner: "Marco",
        created_at: "20/4/24",
    },
    {
        id: 20,
        player1: "Pedro",
        player2: "Thomas",
        score1: 8,
        score2: 10,
        winner: "Thomas",
        created_at: "25/4/24",
    },
    {
        id: 21,
        player1: "Lucas",
        player2: "Laura",
        score1: 11,
        score2: 10,
        winner: "Lucas",
        created_at: "1/5/24",
    },
    {
        id: 22,
        player1: "Michel",
        player2: "Sophie",
        score1: 10,
        score2: 7,
        winner: "Michel",
        created_at: "5/5/24",
    },
];

// TODO Try to delete the Winner column and show the winner with bold weight in player colum.

const ScoreTable = () => {
    return (
        <>
            <Table className="w-88 m-auto">
                <TableCaption>All Solo Game Score</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Match</TableHead>
                        <TableHead className="text-center">Score</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {score.map((match) => (
                        <TableRow key={match.id}>
                            <TableCell className="">
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
