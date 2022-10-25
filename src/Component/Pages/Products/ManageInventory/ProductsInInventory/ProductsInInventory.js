
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsInInventory = (props) => {

    const { inventoryProduct, productDeleteHandle } = props

    const { _id, name, price, img, quantity, supplier, description } = inventoryProduct

    const navigate = useNavigate()
    const navigateToUpdate = id => {
        navigate(`/update/${_id}`)
    }

    return (
        <div className=''>


            <div className="flex justify-center ">
                <div className="flex flex-col md:flex-row  rounded-lg bg-white shadow-lg hover-zoom overflow-hidden">
                    <img className=" w-full h-48 lg:h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg hover:rounded-lg" src={img} alt=""   data-aos="zoom-in"/>

                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-3xl font-medium mb-2 font-serif"  data-aos="fade-left">{name}</h5>

                        <div className='mb-16'>
                            <p className="text-gray-600 text-lg font-bold pb-4"  data-aos="fade-left">Supplier: {supplier}</p>
                            <p className="text-gray-700 text-base mb-4"  data-aos="fade-left"> {description?.slice(0, 130)}.... </p>

                            <div className='flex justify-between font-semibold'>
                                <p className="text-gray-600"  data-aos="fade-left">Price : ${price}</p>
                                <p className="text-gray-600"  data-aos="fade-left">Quantity : {quantity}</p>
                            </div>
                        </div>


                        <div className='flex justify-between h-full items-end'>
                            <div className='pb-2'>
                                <button onClick={() => navigateToUpdate(_id)} className='card-shadow text-center hover:shadow-lg hover:text-black font-semibold px-3 py-2'  data-aos="fade-left">UPDATE</button>
                            </div>
                            <div className=''>
                                <button onClick={() => productDeleteHandle(_id)} className='card-shadow text-center hover:shadow-lg hover:text-black font-semibold px-3 py-2'  data-aos="fade-right">DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductsInInventory;