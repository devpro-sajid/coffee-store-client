import React from 'react';
import { FaRegEdit, FaRegEye, FaRemoveFormat, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee,handleDeleteCoffee }) => {
    const { name, _id, quantity, supplier, taste, category, photo } = coffee;
    
    return (
        <div className='bg-[#F5F4F1] p-6 lg:flex justify-between lg:space-x-6 items-center rounded-md'>
            <div className='lg:flex lg:space-x-4 items-center text-center'>
                <div className='lg:block flex justify-center'><img src={photo} alt="" /></div>
                <div>
                    <h2 className='text-lg'><span className='font-bold'>Name: </span>{name}</h2>
                    <p className='text-lg my-3'><span className='font-bold'>Chef: </span>{supplier}</p>
                    <p className='text-lg'><span className='font-bold'>Taste: </span>{taste}</p>
                </div>
            </div>
            <div className='lg:pr-6 flex justify-center lg:block space-x-4 lg:space-x-0 lg:pt-0 pt-5'>
                <Link className="bg-[#D2B48C] p-3 rounded-md lg:block inline-block">
                    <FaRegEye className='text-white'></FaRegEye>
                </Link>
                <Link to={`/updateCoffee/${_id}`} className="bg-black p-3 rounded-md lg:block inline-block lg:my-3 my-0">
                    <FaRegEdit className='text-white'></FaRegEdit>
                </Link>
                <Link onClick={()=>handleDeleteCoffee(_id)} className="bg-red-500 p-3 rounded-md lg:block inline-block">
                    <FaTrashAlt className='text-white'></FaTrashAlt>
                </Link>

            </div>
        </div>
    );
};

export default CoffeeCard;