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
        id: 9,
        player1: "Sophie",
        player2: "Laura",
        score1: 10,
        score2: 7,
        winner: "Sophie",
        created_at: "18/3/24",
    },
    {
        id: 10,
        player1: "Michel",
        player2: "Anna",
        score1: 10,
        score2: 9,
        winner: "Michel",
        created_at: "20/3/24",
    },
    {
        id: 11,
        player1: "Lucas",
        player2: "Pedro",
        score1: 6,
        score2: 10,
        winner: "Pedro",
        created_at: "22/3/24",
    },
    {
        id: 12,
        player1: "Marco",
        player2: "Thomas",
        score1: 11,
        score2: 10,
        winner: "Marco",
        created_at: "25/3/24",
    },
    {
        id: 13,
        player1: "Laura",
        player2: "Sophie",
        score1: 10,
        score2: 5,
        winner: "Laura",
        created_at: "28/3/24",
    },
    {
        id: 14,
        player1: "Anna",
        player2: "Michel",
        score1: 9,
        score2: 10,
        winner: "Michel",
        created_at: "1/4/24",
    },
    {
        id: 15,
        player1: "Pedro",
        player2: "Marco",
        score1: 10,
        score2: 8,
        winner: "Pedro",
        created_at: "5/4/24",
    },
    {
        id: 16,
        player1: "Sophie",
        player2: "Lucas",
        score1: 7,
        score2: 10,
        winner: "Lucas",
        created_at: "9/4/24",
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

const ScoreTable = () => {
    return (
        <>
            <Table>
                <TableCaption>All Solo Game Score</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Player</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead>Winner</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {score.map((match) => (
                        <TableRow key={match.id}>
                            <TableCell className="w-36">{`${match.player1} VS ${match.player2}`}</TableCell>
                            <TableCell className="w-20">{`${match.score1} / ${match.score2}`}</TableCell>
                            <TableCell className="font-semibold">{match.winner}</TableCell>
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
