import React from 'react'
import Image from "next/image";
import LogoH10 from "../../public/logoKHWhite.svg";

const Headers = () => {
  return (
    <header className='flex justify-center'>
        <Image src={LogoH10} alt='Logo'width={150}/>
    </header>
  )
}

export default Headers