import Image from "next/image";
import React from "react";
import quentinjpg from "@/public/img/quentin.jpg";

const ProfileOverview = () => {
    return (
        <>
            <div className="relative w-20 h-20 overflow-hidden rounded-full">
                <Image
                    src={quentinjpg}
                    alt="Photo de profil"
                    fill
                    className="object-cover"
                />
            </div>
        </>
    );
};

export default ProfileOverview;
