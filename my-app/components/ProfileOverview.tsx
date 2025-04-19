import Image from "next/image";
import React, { FC } from "react";
import quentinjpg from "@/public/img/quentin.jpg";
import { User } from "@/utils/type";

type ProfileOverviewProps = {
    FetchUserProfile: User;
};

const ProfileOverview: FC<ProfileOverviewProps> = ({ FetchUserProfile }) => {
    const user = FetchUserProfile;
    return (
        <div className="flex flex-row items-center">
            <div className="relative w-20 h-20 overflow-hidden rounded-full mr-15">
                <Image
                    src={quentinjpg}
                    alt="Photo de profil"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="font-bold">
                <p>{user.username}</p>
                <p>Level : {user.level}</p>
                <p>
                    Solo W/L : {user.won_game}/{user.lost_game}
                </p>
                <p>
                    Team W/L : {user.won_team_game}/{user.lost_team_game}
                </p>
            </div>
        </div>
    );
};

export default ProfileOverview;
