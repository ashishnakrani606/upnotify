import React from 'react';
import stepTwoImg from '@/assets/images/step-two.png';
import Image from 'next/image'

const CreateNewScrape = ({}) => {
    return (
        <>
         <div>
            <div>
              <Image src={stepTwoImg} alt="" />
            </div>
            <div className='mt-8'>
              <div className='flex justify-between items-center mb-2'>
                <h4 className='text-xl text-dark font-bold' >Create a new scrape</h4>
                <span className='h-7 w-9 rounded-md flex justify-center items-center bg-light text-primary text-sm font-medium' >2/4</span>
              </div>
              <p className='text-secondary text-sm'>Lorem ipsum dolor sit amet consectetur. Ut sit vel fames egestas integer. Purus ipsum amet scelerisque commodo dui ut. </p>
            </div>
        </div>
        </>
    );
};

export default CreateNewScrape;
