import Link from "next/link";
import Login from "../components/Login";

export default function Home() {

    return (
        <>
            <Login/>

            <h1 className="text-3xl">No account ?</h1>
            <Link href="/new-account">
                <button className="border-1 rounded-2xl w-22 h-9 bg-sky-600 text-white hover:bg-sky-400">
                    Create
                </button>
            </Link>
        </>
    );
}
