"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const friends = [
    { name: "michou" },
    { name: "callo" },
    { name: "alice" },
    { name: "bob" },
    { name: "charlie" },
    { name: "david" },
    { name: "eva" },
    { name: "frank" },
    { name: "grace" },
    { name: "hannah" }
];


const SelectPlayer = () => {

    const [player, setPlayer] = useState("");
    const [open, setOpen] = useState(false);

    const handleSelect = (name: string) => {
        setPlayer(name);
        setOpen(false);
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">{player ? player : "Select player"}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                { friends && (
                    friends.map((f) => (
                        <DropdownMenuLabel 
                            key={f.name} 
                            className="hover:bg-gray-50" 
                            onClick={() => handleSelect(f.name)}
                        >
                            {f.name}
                        </DropdownMenuLabel>
                    ))
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default SelectPlayer;
