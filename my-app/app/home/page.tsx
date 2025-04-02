
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomePage = () => {
    return (
        <div>
            <h1 className="text-4xl text-center mt-5 mb-10">TOP SCORE</h1>
            <div className="flex justify-center">
                <Link href={"/start"}><Button>PLAY</Button></Link>
            </div>
        </div>
    );
};

export default HomePage;
