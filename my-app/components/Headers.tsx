import React from "react";
import Image from "next/image";
import LogoH10 from "../public/img/logoKHWhite.svg";
import Link from "next/link";

const Headers = () => {
    return (
        <header className="flex justify-center">
            <Link href="/home">
                <Image src={LogoH10} alt="Logo" width={150} />
            </Link>
        </header>
    );
};

export default Headers;
