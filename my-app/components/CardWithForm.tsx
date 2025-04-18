"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState, FC } from "react";
import SelectPlayer from "./SelectPlayer";

type User = {
    name: string
}

type CardWithFormProps = {
    fetchUsers: User[]
}

const CardWithForm: FC<CardWithFormProps> = ({ fetchUsers }) => {
    const [gameMode, setGameMode] = useState("");

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Select your GameMode</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <form>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="gamemode">Game Mode</Label>
                        <Select onValueChange={(value) => setGameMode(value)}>
                            <SelectTrigger id="gamemode">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="1v1">1v1</SelectItem>
                                <SelectItem value="2v2">2v2</SelectItem>
                            </SelectContent>
                        </Select>
                        {gameMode === "2v2" ? (
                                <SelectPlayer fetchUsers={fetchUsers}/>
                        ) : (
                            ""
                        )}
                    </div>
                    {gameMode && (
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="challenger" className="mt-2">
                                    Your challenger
                                </Label>
                                <SelectPlayer fetchUsers={fetchUsers}/>
                                {gameMode === "2v2" ? (
                                    <SelectPlayer fetchUsers={fetchUsers}/>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    )}
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Clear</Button>
                <Button onClick={() => console.log(gameMode)}>GO ⚽</Button>
            </CardFooter>
        </Card>
    );
}

export default CardWithForm;
