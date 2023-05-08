import React from 'react';

const AddCoffee = () => {

    const handleAddCoffee=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.coffeename.value;
        const available=form.available.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        
    }
    return (
        <div className='container mx-auto bg-gray-300 md:p-16 p-6  items-center flex flex-col my-10 rounded-md'>
            <h2 className='text-3xl text-purple-400 font-bold mb-4'>Add a Coffee</h2>
            <form onSubmit={handleAddCoffee} className='w-full'>
                {/* row */}
                <div className='md:flex md:space-x-5'>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <span>Coffee</span>
                            <input type="text" name='coffeName' placeholder="Hot Coffee" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Available</span>
                            <input type="text" name='available' placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* new row */}
                <div className='md:flex md:space-x-5'>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Supplier</span>
                        </label>
                        <label className="input-group">
                            <span>Sup</span>
                            <input type="text" name='supplier' placeholder="Coffee Suplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Taste</span>
                        </label>
                        <label className="input-group">
                            <span>Taste</span>
                            <input type="text" name='taste' placeholder="Coffee Taste" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* new row */}
                <div className='md:flex md:space-x-5'>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Category</span>
                        </label>
                        <label className="input-group">
                            <span>Cat.</span>
                            <input type="text" placeholder="Coffee Category" name='category' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Det.</span>
                            <input type="text" placeholder="Coffee Details" name='details' className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* new row */}
                <div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo</span>
                        </label>
                        <label className="input-group">
                            <span>Photo</span>
                            <input type="text" name='photo' placeholder="Enter Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input className='w-full bg-purple-500 py-3 mt-5 rounded-md text-white' type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;