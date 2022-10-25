import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForCoustomer = () => {

    const handleSubscribe = event => {

        // const email = event.target.email.value
        toast.success('Thanks for your subscription.')
        event.target.reset()
    }

    return (
        <div className='py-20 lg:py-40 w-full bg-no-repeat border lg:bg-cover' style={{ backgroundImage: `url('https://i.ibb.co/R9MTXr3/c-cover.png')` }} data-aos="zoom-in">

            <div className='text-center relative'>
                <h2 className='font-serif text-md lg:text-3xl pb-3 text-slate-300 ' data-aos="zoom-in" data-aos-delay="200">Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Fashion Flavour.</h2>

                <div className='grid lg:flex justify-center lg:pr-12 lg:mt-20 opacity-75'>
                    <input className='rounded-l-full border-2 lg:pr-40 pl-5 py-2 card-shadow' type="email" name="email" id="" placeholder='ENTER YOUR EMAIL' required  data-aos="fade-right" data-aos-delay="150"/>

                    <button onClick={handleSubscribe} className=' lg:absolute lg:ml-80 rounded-full font-semibold text-zinc-800 bg-yellow-600 px-3 py-2 border-2 card-shadow' data-aos="fade-left" data-aos-delay="150">SUBSCRIBE</button>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default ForCoustomer;