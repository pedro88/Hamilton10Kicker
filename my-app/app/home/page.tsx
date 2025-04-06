import ScoreTable from "@/components/ScoreTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const soloScore = [
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

const HomePage = () => {
    return (
        <div>
            <h1 className="text-4xl text-center mt-5 mb-10">TOP SCORE</h1>
            <div className="flex justify-end absolute right-5">
                <Link href={"/start"} className="">
                    <Button>PLAY</Button>
                </Link>
            </div>
                <ScoreTable score={soloScore}/>
        </div>
    );
};

export default HomePage;
