import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Servicios from '../components/servicios'
import Fotos from '../components/fotos'
import Social from '../components/social';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="w-full bg-black">
      <Head>
        <title>HanZcooter</title>
        <link rel="icon" href="/HZ.ico" />
      </Head>
      
      <Header/>

      <Servicios/>

      <Fotos/>
      
      <div className="container mx-auto">
        
        <Social/>
      </div>
        
      <Footer/>
      
    </div>
  )
};
