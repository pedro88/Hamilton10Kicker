"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FriendUserList } from "@/utils/type";
import { useState, FC } from "react";

type SelectPlayerProps = {
    FetchFriendWithUserId: FriendUserList[]
    onPlayerSelect: (name: string) => void;
}

const SelectPlayer: FC<SelectPlayerProps> = ({ 
    FetchFriendWithUserId,
    onPlayerSelect}) => {

    const [player, setPlayer] = useState("");
    const [open, setOpen] = useState(false);
    const friends = FetchFriendWithUserId;

    const handleSelect = (name: string) => {
        setPlayer(name);
        onPlayerSelect(name);
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
                            key={f.username} 
                            className="hover:bg-gray-50" 
                            onClick={() => handleSelect(f.username)}
                        >
                            {f.username}
                        </DropdownMenuLabel>
                    ))
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default SelectPlayer;
