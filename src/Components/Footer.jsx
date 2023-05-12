import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='footer-top py-14'>
                <div className='container mx-auto  md:px-12 px-5'>
                    <img src="https://i.ibb.co/yPGM5yJ/logo1-1.png" alt="" />
                </div>

                <div className="container md:flex md:space-x-20 mx-auto  md:px-12 px-5">
                    <div className='md:w-1/2'>
                        <h4 className='my-3 text-4xl font-rancho font-semibold text-[#331A15]'>Espresso Emporium</h4>
                        <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex space-x-3 text-[#331A15] pt-3 mb-8'>
                            <FaFacebook className='text-2xl'></FaFacebook>
                            <FaTwitter className='text-2xl'></FaTwitter>
                            <FaInstagram className='text-2xl'></FaInstagram>
                            <FaLinkedin className='text-2xl'></FaLinkedin>
                        </div>

                        <h4 className='my-3 text-4xl font-rancho font-semibold text-[#331A15]'>Get in Touch</h4>
                        <div className='flex items-center space-x-3'>
                            <FaPhoneAlt className='text-lg text-[#331A15]'></FaPhoneAlt>
                            <p>+88 01533 333 333</p>
                        </div>
                        <div className='flex items-center space-x-3 my-3'>
                            <FaEnvelope className='text-lg text-[#331A15]'></FaEnvelope>
                            <p>info@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <FaLocationArrow className='text-lg text-[#331A15]'></FaLocationArrow>
                            <p>+88 01533 333 333</p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h4 className='mb-3 md:mt-3 mt-8 text-4xl font-rancho font-semibold text-[#331A15]'>Contact With Us</h4>
                        <form>
                            <input className='px-3 py-2 bg-white text-[#331A15]  w-full my-3' type="text" name="" id="" placeholder='Name' />
                            <br />
                            <input className='px-3 py-2 bg-white text-[#331A15]  w-full' type="email" name="" id="" placeholder='Email' />
                            <br />
                            <textarea className='px-3 py-2 bg-white text-[#331A15]  w-full my-3' id="txtid" name="txtname" rows="4" placeholder='Message' />
                            <br />
                            <button className='rounded-full bg-[rgba(0,0,0,0) text-[#331A15] border-2 border-[#331A15] px-5 py-2 font-rancho text-xl font-semibold' type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='footer-bottom text-center px-5 py-5'>
                <p className='text-white'>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </>
    );
};

export default Footer;