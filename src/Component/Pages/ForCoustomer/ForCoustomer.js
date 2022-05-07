import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForCoustomer = () => {

    const handleSubscribe = event => {

        // const email = event.target.email.value
            toast.success('Thanks for your subscription.')
    }

    return (
        <div className=' my-20 py-40 bg-no-repeat border bg-cover' style={{ backgroundImage: `url('https://i.ibb.co/R9MTXr3/c-cover.png')` }}>

            <div className='text-center relative'>
                <h2 className='font-serif text-3xl pb-3 text-slate-300 '>Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Fashion Flavour.</h2>

                <div className='flex justify-center pr-12 mt-20 opacity-75'>
                    <input className='rounded-l-full border-2 pr-40 pl-5 py-2 card-shadow' type="email" name="email" id="" placeholder='ENTER YOUR EMAIL' required />

                    <button onClick={handleSubscribe} className='absolute ml-80 rounded-full font-semibold text-zinc-800 bg-yellow-600 px-3 py-2 border-2 card-shadow'>SUBSCRIBE</button>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default ForCoustomer;