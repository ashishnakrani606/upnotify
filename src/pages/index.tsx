import React, { Fragment, useState, useEffect } from 'react';
import { Inter_Tight } from 'next/font/google'
import Head from 'next/head'
import StepWizard from "react-step-wizard";
import transitions from '@/styles/transitions.module.scss';
import HelpUsCustomizeYourPromps from '@/components/HelpUsCustomizeYourPromps';
import CreateNewScrape from '@/components/CreateNewScrape';
import EnterScrapeData from '@/components/EnterScrapeData';
import ListOfJobs from '@/components/ListOfJobs';

const interTight = Inter_Tight({
  subsets: ['latin'] 
})

export default function Home() {
  const [state, updateState] = useState<any>({
    form: {},
    transitions: {
        enterRight: `${transitions.animated} ${transitions.enterRight}`,
        enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
        exitRight: `${transitions.animated} ${transitions.exitRight}`,
        exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
        intro: `${transitions.animated} ${transitions.intro}`,
    },
    demo: true, // uncomment to see more
  });

  const [randKey, setRandKey] = useState((Math.random() + 1).toString(36).substring(7));
     // Do something on step change
     const onStepChange = (stats: any) => {
      // console.log(stats);
      setRandKey((Math.random() + 1).toString(36).substring(7));
  };

  const setInstance = (SW: any) => updateState({
    ...state,
    SW,
  });

  const { SW, demo } = state;

  // This function renders navigation buttons for stepper.
  const InstanceDemo = ({ SW }: any) => {
    return (
    <Fragment>
        <div className='mt-auto grid grid-cols-3 gap-3'>
          <button 
            className={`focus:outline-none border border-[#D0D5DD] rounded-lg btn-shadow py-[10px] px-[15px] cursor-pointer text-dark text-lg font-medium bg-gray-200 ${SW.state.activeStep == 0 ? 'pointer-events-none opacity-50' : ''}`} 
            disabled={SW.state.activeStep == 0} 
            onClick={SW.previousStep}>
            Back
          </button>
          <button 
            className='focus:outline-none border border-[#D0D5DD] rounded-lg btn-shadow py-[10px] px-[15px] cursor-pointer text-dark text-lg font-medium' 
            onClick={SW.nextStep}>
              Skip
          </button>
          <button 
            className={`focus:outline-none rounded-lg blue-gradient py-[10px] px-[15px] cursor-pointer text-lg font-bold text-white`} 
            onClick={SW.nextStep}>
            {SW.state.activeStep == (SW.props.children.length - 1) ? "Finish" : "Next"}
          </button>
        </div>
    </Fragment>
  )};

  return (
    <main className='h-screen flex justify-center items-center'>
      <Head>
        <title>User On-boarding</title>
      </Head>
      <div className='bg-white flex flex-col w-full max-w-[526px] mx-auto h-[75vh] max-h-[75vh] rounded-lg shadow-xl shadow-gray-300 overflow-x-hidden p-6 '>
        <StepWizard
          onStepChange={onStepChange}
          isHashEnabled={false}
          transitions={state.transitions} // comment out for default transitions
          instance={setInstance}
        >
          <div className={`${interTight.className}`}>
            <HelpUsCustomizeYourPromps/>
          </div>
          <div>
            <CreateNewScrape/>
          </div>
          <div>
            <EnterScrapeData/>
          </div>
          <div>
            <ListOfJobs/>
          </div>
        </StepWizard>
        { (demo && SW) && <InstanceDemo key={randKey} SW={SW} /> }
      </div>
    </main>
  )
}
