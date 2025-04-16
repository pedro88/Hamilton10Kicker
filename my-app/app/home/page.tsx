import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <Button className='w-full h-20 text-3xl mt-40 mb-5' asChild>
                <Link href={"/home/score"}>SCORE</Link>
            </Button>
            <Button className='w-full h-20 text-3xl mb-5' asChild>
                <Link href={"/home/start"}>PLAY</Link>
            </Button>
        </>
    )
}

export default HomePage