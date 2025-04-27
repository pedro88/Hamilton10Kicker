import Image from "next/image";
import React, { FC } from "react";
import quentinjpg from "@/public/img/quentin.jpg";
import { User } from "@/utils/type";
import { Progress } from "../ui/progress";

type ProfileOverviewProps = {
    FetchUserProfile: User;
};

const ProfileOverview: FC<ProfileOverviewProps> = ({ FetchUserProfile }) => {
    const user = FetchUserProfile;
    return (
        <div className="flex flex-row items-center mb-10">
            <div className="relative w-30 h-30 overflow-hidden rounded-full mr-15">
                <Image
                    src={quentinjpg}
                    alt="Photo de profil"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="text-xl font-semibold">
                <p>{user.username}</p>
                <p>
                    Solo : {user.won_game}/
                    <span className="text-red-400">{user.lost_game}</span>
                </p>
                <p>
                    Team : {user.won_team_game}/
                    <span className="text-red-400">{user.lost_team_game}</span>
                </p>
                <p>Level : {user.level}</p>
                <Progress value={user.xp} />
            </div>
        </div>
    );
};

export default ProfileOverview;
