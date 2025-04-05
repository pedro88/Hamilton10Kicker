import ScoreTable from "@/components/ScoreTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomePage = () => {
    return (
        <div>
            <h1 className="text-4xl text-center mt-5 mb-10">TOP SCORE</h1>
            <div className="flex flex-row place-content-between ml-4 mr-4 mb-5">
                <Button>SOLO</Button>
                <Button>TEAM</Button>
                <Link href={"/start"} className="">
                    <Button>PLAY</Button>
                </Link>
            </div>
                <ScoreTable/>
        </div>
    );
};

export default HomePage;
