import React from 'react';
import useProducts from '../../../Hooks/useProducts/useProducts';
import Product from './Product/Product';
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const Inventory = () => {

    const [product] = useProducts()

    return (
        <div className='md:card-shadow lg:card-shadow my-4 lg:my-10 lg:mx-auto px-2 md:px-5 lg:px-5  lg:w-11/12'>

            <div className='my-4 md:py-14 lg:py-14'>
                <p className='text-center mx-auto lg:text-4xl font-serif font-semibold border-b-2 border-zinc-700 w-6/12 '>INVENTORY ITEMS</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                {
                    product.slice(0, 6).map(product =>
                        <Product
                            key={product._id}
                            product={product}>
                        </Product>)
                }
            </div>

           <div className='flex justify-end mt-5 pb-4'>
           <Link to='/manageinventory' className='card-shadow hover:shadow-lg px-3 py-2 flex font-semibold hover:text-black'>MANAGE INVENTORY <MdArrowForwardIos className='mt-1 ml-2'/></Link>
           </div>

        </div>
    );
};

export default Inventory;