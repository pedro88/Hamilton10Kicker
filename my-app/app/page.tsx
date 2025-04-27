import Link from "next/link";
import Login from "../components/organisms/Login";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <h1 className="text-4xl text-center mb-5 mt-5">
                Prepare yourself for an epic match ⚽
            </h1>
            <Login />
            <hr className="mb-15 mt-10" />
            <div className="flex justify-center">
                <h1 className="text-3xl">No account ?</h1>
                <Link href="/new-account" className="ml-5">
                    <Button>Create</Button>
                </Link>
            </div>
            <div className="mt-20 flex justify-center">
                <Link href="/home">
                    <Button>HOME</Button>
                </Link>
            </div>
        </>
    );
}
