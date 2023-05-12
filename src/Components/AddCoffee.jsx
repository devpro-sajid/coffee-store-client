import React from 'react';
import { Link } from 'react-router-dom';
import {FaLongArrowAltLeft } from 'react-icons/fa';

const AddCoffee = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffee={name,quantity,supplier,taste,category,details,photo};
        console.log(coffee);
        fetch('https://coffee-store-server-sooty.vercel.app/coffees', {
                method:'POST',
                headers:{
                  'content-type':"application/json"
                },
                body:JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
                alert('Item Added')
            })
    }
    return (
        <div className="coffee-bg pt-10 pb-20 px-6 sm:px-0">
            <div className='container mx-auto pb-8 font-rancho font-semibold text-xl'>
                <span className='inline-block'><Link className='flex items-center' to="/"><FaLongArrowAltLeft className='mr-2'></FaLongArrowAltLeft> Back to home</Link></span>  
            </div>
 <div className="bg-[#F4F3F0] lg:p-20 md:p-14 sm:p-10 p-6 container mx-auto">
        <h2 className="md:text-3xl text-2xl font-extrabold font-rancho text-center">Add a Coffee</h2>
        <p className='py-3 mb-4 lg:mx-12 md:mx-8 mx-6 text-center text-lg'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        <form onSubmit={handleAddCoffee}>
            {/* form name and quantity row */}
            <div className="md:flex md:mb-8 mb-2">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex md:mb-8 mb-2">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex md:mb-8 mb-2">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Add Coffee" className="btn btn-block" />

        </form>
    </div>
        </div>
       
    );
};

export default AddCoffee;