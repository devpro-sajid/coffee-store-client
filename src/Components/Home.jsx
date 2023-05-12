import React, { useEffect, useState } from 'react';
import { FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const [coffees,setCoffees]=useState([]);
    const [loadcoffee,setLoadcoffee]=useState(true);
    useEffect(()=>{
        fetch('https://coffee-store-server-sooty.vercel.app/coffees')
        .then(res=>res.json())
        .then(data=>setCoffees(data))
    },[loadcoffee])
    const handleDeleteCoffee=(id)=>{
        fetch(`https://coffee-store-server-sooty.vercel.app/coffee/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                setLoadcoffee(!loadcoffee)
               if(data.deletedCount>0){
                alert('deleted successfully');
                
               }})
    }
   
    return (
        <>
            <div className='hero-bg'>
                <div className='flex items-center py-48 container mx-auto md:px-10 px-5'>
                    <div className='md:w-1/2'></div>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-white font-rancho'>Would you like a Cup of Delicious Coffee?</h2>
                        <p className='text-white leading-7 py-5'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='bg-[#E3B577] text-black px-5 py-2 text-2xl font-rancho'>Learn More</button>
                    </div>
                </div>

            </div>
            {/* {special} */}
            <div className='bg-[#ECEAE3]'>
                <div className='container mx-auto md:px-10 px-5 grid md:grid-cols-2 lg:grid-cols-4 py-12 gap-8'>

                    <div>
                        <img src="https://i.ibb.co/dp6BYgG/1-1.png" alt="" />
                        <h4 className='text-3xl font-rancho my-3'>Awesome Aroma</h4>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/xgxkDrC/2-1.png" alt="" />
                        <h4 className='text-3xl font-rancho my-3'>High Quality</h4>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/kS4Cpf9/3-1.png" alt="" />
                        <h4 className='text-3xl font-rancho my-3'>Pure Grades</h4>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/bgNmMfy/4-1.png" alt="" />
                        <h4 className='text-3xl font-rancho my-3'>Proper Roasting</h4>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
            {/* {coffee} */}
            <div className='bg-white py-20 '>
                <p className='text-lg text-center'>--- Sip & Savor ---</p>
                <h2 className='text-4xl font-rancho text-[#331A15] font-semibold text-center my-4'>Our Popular Products</h2>
                <p className='text-center'> <Link to="/addCoffee" className='inline-block'><button className=' flex items-center space-x-3 bg-[#E3B577] text-black px-5 py-2 text-xl font-rancho'>Add Coffee  <FaCoffee></FaCoffee></button></Link></p>

                <div className='grid md:grid-cols-2 gap-6 container mx-auto md:px-10 px-5 py-12'>

                    {coffees?.map(coffee=><CoffeeCard handleDeleteCoffee={handleDeleteCoffee} key={coffee._id} coffee={coffee}></CoffeeCard>)}

                </div>
            </div>
            {/* instafollow */}
            <div className='container md:px-10 px-5 py-14 mx-auto'>
                <p className='text-lg text-center'>Follow Us Now</p>
                <h2 className='text-4xl font-rancho text-[#331A15] font-semibold text-center my-4'>Follow on Instagram</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 pt-8'>

                <div>
                    <img src="https://i.ibb.co/S5xfk97/Rectangle-9.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/p2MB34y/Rectangle-10.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/3cjDy9F/Rectangle-11.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/f2R3Bxd/Rectangle-12.png" alt="" />
                </div>

                <div>
                    <img src="https://i.ibb.co/wwtRFpy/Rectangle-13.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/f9mKyvH/Rectangle-14.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/jWWM0jN/Rectangle-15.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/sCN0BL8/Rectangle-16.png" alt="" />
                </div>

                </div>
            </div>

        </>
    );
};

export default Home;