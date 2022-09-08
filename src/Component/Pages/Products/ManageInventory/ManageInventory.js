// import axios from 'axios';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import ProductsInInventory from './ProductsInInventory/ProductsInInventory';

const ManageInventory = () => {

    const navigate = useNavigate()
    const [product, setProduct] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(4)


    useEffect(() => {
        const url = `https://fashion-flavour-server.onrender.com/dress?page=${page}&size=${size}`

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [page, size])


    useEffect(() => {
        fetch(`https://fashion-flavour-server.onrender.com/productCount`)
            .then(res => res.json())
            .then(data => {
                const count = data.count
                const pages = Math.ceil(count / 4)
                setPageCount(pages)
            })
    }, [])

    const productDeleteHandle = async (id) => {

        if (window.confirm('Are you sure you want to delete?')) {
            await axios.delete(`https://fashion-flavour-server.onrender.com/dress/${id}`, product)
            const exist = product.filter((product) => product._id !== id);
            setProduct(exist);
        } else {
            console.log('cancel');
        }

    }

    return (<div className=' flex lg:mx-auto'>

        <div className=' grid my-10 lg:mx-auto  px-5 pt-5 '>

            <div>
                <p className='text-center mx-auto text-4xl font-serif font-semibold mb-5 border-b-2 border-zinc-700 w-6/12'>ALL PRODUCTS</p>
            </div>

            <div className='flex justify-between mb-4'>

                <div className=''>
                    <button onClick={() => navigate(-1)} className='card-shadow py-2 px-4 font-semibold'>BACK</button>
                </div>


                <div className='flex gap-x-3'>
                    <div className=' pb-4'>
                        <Link to='/myproducts' className='card-shadow hover:shadow-lg px-3 py-2 flex font-semibold hover:text-black'>MY PRODUCTS <MdArrowForwardIos className='mt-1 ml-2' /></Link>
                    </div>
                    <div>
                        <Link to='/addproduct' className='card-shadow px-3 py-2 flex font-semibold hover:text-black'>ADD NEW ITEM <MdArrowForwardIos className='mt-1 ml-2' /></Link>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    product.map(inventoryProduct => <ProductsInInventory
                        key={inventoryProduct._id}
                        inventoryProduct={inventoryProduct}
                        productDeleteHandle={productDeleteHandle}>
                    </ProductsInInventory>
                    )
                }


            </div>
        </div>

        <div className='grid items-end pb-9 pl-4'>
            <div>
                <select onChange={event => setSize(event.target.value)} className='card-shadow ml-1 py-1 px-2 font-semibold'>
                    <option value="4" selected className='font-semibold '>4</option>
                    <option value="8" className='font-semibold '>8</option>
                    <option value="12" className=' font-semibold '>12</option>
                </select>
                {
                    [...Array(pageCount).keys()].map(number =>
                        <button onClick={() => setPage(number)} className={page === number ? 'text-zinc-800 m-2 px-4 form-shadow font-semibold flex' : 'm-2 px-4 card-shadow font-semibold flex'}>{number + 1}</button>)
                }
            </div>
        </div>
    </div>

    );
};

export default ManageInventory;