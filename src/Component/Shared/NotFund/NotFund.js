import React from 'react';
import { Link } from 'react-router-dom';

const NotFund = () => {
    return (
        <div className='w-full pb-28'>
            <div className='grid justify-center my-40'>
                <div className='card-shadow grid justify-center text-center px-20 py-20'>
                    <h2 className='text-6xl font-semibold text-red-600'>404</h2>
                    <p className='text-xl'>Your Page is not fund !!!</p>
                </div>
                <div className='mt-10 flex justify-center'>
                    <Link to='/' className='card-shadow py-2 px-3 font-semibold hover:text-zinc-800'> GO TO HOME</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFund;