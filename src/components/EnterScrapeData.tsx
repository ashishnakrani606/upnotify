import React from 'react';
import stepThreeImg from '@/assets/images/step-three.png';
import Image from 'next/image'

const EnterScrapeData = ({}) => {

    return (
        <>
        <div className='w-full text-center'>
              <Image src={stepThreeImg} alt="" className='m-auto' />
            </div>
            <div className='mt-8'>
              <div className='flex justify-between items-center mb-2'>
                <h4 className='text-xl text-dark font-bold' >Enter scrape data </h4>
                <span className='h-7 w-9 rounded-md flex justify-center items-center bg-light text-primary text-sm font-medium' >3/4</span>
              </div>
              <p className='text-secondary text-sm pb-3'>On this modal section, enter the details of your scrape</p>
              <p className='text-secondary text-sm pb-3'>Here you can choose where you will like to be notified, the interval of your scrape and the Upwork RSS feed for your jobs</p>
              <p className='text-secondary text-sm'>Don't worry, on the form we'll have a video showing you exactly how to get this information</p>
            </div>
        </>
    );
};

export default EnterScrapeData;
