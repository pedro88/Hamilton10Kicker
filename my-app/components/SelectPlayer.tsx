"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, FC } from "react";

type User = {
    name: string
}

type SelectPlayerProps = {
    fetchUsers: User[]
}

const SelectPlayer: FC<SelectPlayerProps> = ({ fetchUsers }) => {

    const [player, setPlayer] = useState("");
    const [open, setOpen] = useState(false);
    const users = fetchUsers;

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
                { users && (
                    users.map((f) => (
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
