import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import logo from '../../../Images/logo.png'
import { FiHome } from 'react-icons/fi';
import { MdOutlineInventory2 } from 'react-icons/md';
import { CgShoppingBag } from 'react-icons/cg';
import { CgAddR } from "react-icons/cg";
import { BiNotepad } from "react-icons/bi";
import { FaBullseye } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";




const Header = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const handleSignOut = () => {
        signOut(auth)
        localStorage.removeItem('accessJwtToken')
        navigate('/')
    }


    return (

        <div className={`${open && ''} `}>

            <div className={`${open ? 'w-72' : 'w-16'} duration-300 h-full  bg-zinc-800 `}>
                <section className='fixed top-0 bottom-0 left-0 z-[999] pt-16 px-2 '>

                    <span className={`absolute cursor-pointer rounded-full text-3xl bg-zinc-800 text-yellow-600 top-36 left-0 w-7 transition-transform duration-300 ${open ? "rotate-180 translate-x-[17.3rem]" : "translate-x-12"}`} alt="" onClick={() => setOpen(!open)}> <MdOutlineDoubleArrow /> </span>

                    <div className='flex gap-x-4 items-center'>
                        <img src="https://i.ibb.co/mFyBtvG/logo.png" alt="" className={` cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`} />

                        <h1 className={`font-serif text-yellow-600 origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>Fashion Flavour</h1>
                    </div>


                    <nav className='pt-16'>

                        <Link to='/' className={`text-yellow-600 text-lg mb-4 flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                            <span className='flex items-center'> <FiHome className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>HOME</span> </span>
                        </Link>

                        {/* <Link to='/inventory' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
        <span className='flex items-center'> <MdOutlineInventory2 className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>INVENTORY</span> </span>
    </Link> */}

                        <Link to='/manageinventory' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                            <span className='flex items-center'> <MdOutlineManageAccounts className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>MANAGE INVENTORY</span> </span>
                        </Link>

                        {user ? <>
                            <Link to='/myproducts' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                                <span className='flex items-center'> <CgShoppingBag className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>MY PRODUCTS</span> </span>
                            </Link>

                            <Link to='/addproduct' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                                <span className='flex items-center'> <CgAddR className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>ADD PRODUCT</span> </span>
                            </Link>

                        </>
                            :
                            <></>
                        }
                        <Link to='/blog' className={`text-yellow-600 text-lg mt-4 flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                            <span className='flex items-center'>  <BiNotepad className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>BLOG</span> </span>
                        </Link>

                        <Link to='/about' className={`text-yellow-600 text-lg mb-4 flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                            <span className='flex items-center'> <FaBullseye className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>ABOUT</span> </span>
                        </Link>

                        {!user ?
                            <Link to='/login' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                                <span className='flex items-center'> <HiOutlineLogout className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>LOGIN</span> </span>
                            </Link>
                            :
                            <Link to='/' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                                <span onClick={handleSignOut} className='flex items-center'> <HiOutlineLogin className='text-2xl' />   <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>LOG OUT</span> </span>
                            </Link>
                        }

                    </nav>

                </section>
            </div>

        </div>


    );
};

export default Header;