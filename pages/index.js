import Head from 'next/head'
import { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'


const HomeContainer = styled.div`
  position:absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export default function Home() {
  const router = useRouter()

  useEffect(()=>{
    //do something on page load
  },[])

  return (
    <>
      <HomeContainer className="m-2 flex flex-col">
        <div className="flex">
          <span className="flex text-xl m-2 p-2"> Sunflower </span>
        </div>
      </HomeContainer>
    </>
  )
}
