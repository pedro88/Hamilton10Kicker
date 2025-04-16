import ProfileOverview from '@/components/ProfileOverview'
import { Button } from '@/components/ui/button'
import ProfilePictureEditor from '@/components/ui/ProfilePictureEditor'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <ProfileOverview />
            <Button className='w-full h-20 text-3xl mt-20 mb-5' asChild>
                <Link href={"/home/score"}>SCORE</Link>
            </Button>
            <Button className='w-full h-20 text-3xl mb-5' asChild>
                <Link href={"/home/start"}>PLAY</Link>
            </Button>
            <ProfilePictureEditor/>
        </>

    )
}

export default HomePage