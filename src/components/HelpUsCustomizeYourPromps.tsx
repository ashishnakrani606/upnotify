import React from 'react';

const HelpUsCustomizeYourPromps = ({}) => {
    return (
        <>
         <div>
            <p className='text-sm text-dark font-medium' >Expertise and Experience</p>
            <textarea 
                className='w-full border rounded-lg border-[#D8DDE9] p-3 mt-2 focus:outline-none textarea-shadow' name="" id="" cols={30} rows={4} 
                placeholder='I have 5 years experience working at a fortune 500 company where we helped 1000th companies scale to X. I have strong copywriting skills via ....'></textarea>
            </div>
            <div className='mt-16'>
            <p className='text-sm text-dark font-medium' >How would you like to sign off the proposal</p>
            <textarea 
                className='w-full border rounded-lg border-[#D8DDE9] p-3 mt-2 focus:outline-none textarea-shdow' name="" id="" cols={30} rows={4} 
                placeholder='I look forward to hearing a prompt response from yourself as I prepare to engage with your organisation Best Andrew'></textarea>
            </div>
            <div className='mt-16'>
            <div className='flex justify-between items-center mb-2'>
                <h4 className='text-xl text-dark font-bold' >Help Us Customize your Prompts</h4>
                <span className='h-7 w-9 rounded-md flex justify-center items-center bg-light text-primary text-sm font-medium' >1/4</span>
            </div>
            <p className='text-secondary text-sm pb-3'>Please fill in this form to the best of your detail so we can customize your AI generated proposals as much as possible. </p>
            <p className='text-secondary text-sm'>You can change these at any time by heading over to the settings tab within the app!</p>
        </div>
        </>
    );
};

export default HelpUsCustomizeYourPromps;
