import { CardWithForm } from "@/components/CardWithForm";
import { Card } from "@/components/ui/card";
import React from "react";

const HomePage = () => {
    return (
        <div>
            <h1 className="text-4xl text-center mt-5 mb-10">IT'S TIME TO PLAY !</h1>
            <article className="flex justify-center">
                <CardWithForm />
            </article>
        </div>
    );
};

export default HomePage;
