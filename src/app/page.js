// src/app/page.js
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MeetInternationalStudents from './components/MeetInternationalStudents'
import CoolFeatures from './components/CoolFeatures'
import TeachStudentsWorldwide from './components/TeachStudentsWorldwide'
import SeparationSection from './components/SeparationSection'
import JoinWorldLearning from './components/JoinWorldLearning'
import RequestDemo from './components/RequestDemo'
import AnAllInOneApp from './components/AnAllInOneApp'
import CitationCarousel from './components/CitationCarousel'
import WhatEveryoneSays from './components/WhatEveryoneSays'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      {/* SEO Metadata - works with Next.js 13+ */}
      <Head>
        <title>Buzvell Test</title>
        <meta name="description" content="A performant, SEO-friendly single-page app using React and Next.js App Router." />
      </Head>

      <Navbar />
      <TeachStudentsWorldwide/>
      <AnAllInOneApp/>
      <CitationCarousel/>
      <MeetInternationalStudents/>
      <SeparationSection/>
      <WhatEveryoneSays/>
      <CoolFeatures/>
      <JoinWorldLearning/>
      <RequestDemo/>
      <Footer />
    </>
  )
}
