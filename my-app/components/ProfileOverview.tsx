import Image from "next/image";
import React, { FC } from "react";
import quentinjpg from "@/public/img/quentin.jpg";
import { User } from "@/utils/type";

type ProfileOverviewProps = {
    fetchUserProfile: User;
};

const ProfileOverview: FC<ProfileOverviewProps> = ({ fetchUserProfile }) => {
    const user = fetchUserProfile;
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 overflow-hidden rounded-full">
                <Image
                    src={quentinjpg}
                    alt="Photo de profil"
                    fill
                    className="object-cover"
                />
            </div>
            <div>
                <p>{user.name}</p>
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
