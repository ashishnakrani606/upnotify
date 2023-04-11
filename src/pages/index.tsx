import React, { Fragment, useState, useEffect } from 'react';
import { Inter, Inter_Tight } from 'next/font/google'
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

  const setInstance = (SW: any) => updateState({
    ...state,
    SW,
  });

  const { SW, demo } = state;

  return (
    <main className='h-screen flex justify-center items-center'>
      <div className='bg-white flex flex-col w-full max-w-[526px] mx-auto h-[75vh] max-h-[75vh] rounded-lg shadow-xl shadow-gray-300 overflow-x-hidden p-6 '>
        <StepWizard
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
        { (demo && SW) && <InstanceDemo SW={SW} /> }
      </div>
    </main>
  )
}

const InstanceDemo = ({ SW }: any) => (
  <Fragment>
      <div className='flex items-center justify-between mt-auto'>
        <button className='focus:outline-none w-[49%] border border-[#D0D5DD] rounded-lg btn-shadow py-[10px] px-[15px] cursor-pointer text-dark text-lg font-medium' onClick={SW.nextStep}>Skip</button>
        <button className='focus:outline-none w-[49%] rounded-lg blue-gradient py-[10px] px-[15px] cursor-pointer text-lg font-bold text-white' onClick={SW.nextStep}>Next</button>
      </div>
  </Fragment>
);