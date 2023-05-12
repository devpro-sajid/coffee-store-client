import React from 'react';

const Header = () => {
    return (
        <div className='header-bg flex justify-center items-center md:space-x-3 space-x-0 py-3'>
            <div>
            <img className='w-8/12 sm:w-10/12 w-100' src="https://i.ibb.co/yPGM5yJ/logo1-1.png" alt="" />
            </div>
            <h4 className='md:text-5xl sm:tex-3xl text-2xl font-rancho text-white'>Espresso Emporium</h4>
        </div>
    );
};

export default Header;