import React from 'react';
import stepFourImg from '@/assets/images/step-four.png';
import Image from 'next/image'

const ListOfJobs = ({}) => {
    return (
        <>
            <div className='w-full text-center'>
              <Image src={stepFourImg} alt="" className='m-auto' />
            </div>
            <div className='mt-8'>
              <div className='flex justify-between items-center mb-2'>
                <h4 className='text-xl text-dark font-bold' >Get a list of jobs</h4>
                <span className='h-7 w-9 rounded-md flex justify-center items-center bg-light text-primary text-sm font-medium' >4/4</span>
              </div>
              <p className='text-secondary text-sm pb-3'>With your scrape added, now the fun begins!</p>
              <p className='text-secondary text-sm'>Either check the jobs dashboard or just sit back and wait for you to be notified in your chosen platforms!</p>
            </div>
        </>
    );
};

export default ListOfJobs;
