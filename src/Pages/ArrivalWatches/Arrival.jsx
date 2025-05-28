import React from 'react';

import { Link } from 'react-router-dom';

function Arrival({ id, img, hover_img, brand, text, price }) {
    return (
        <>
            <section>
                <Link to={`/productDetails/${id}`} className='group'>
                    <div className='relative overflow-hidden rounded-lg'>
                        <img src={img} alt="" className="w-full transition-opacity duration-300 group-hover:opacity-0" />
                        <img src={hover_img} alt="" className="w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <div className='p-4 pt-[18px] group'>
                        <div>
                            <h2 className='text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold font-serif'>{brand}</h2>
                        </div>
                        <h3 className='text-[#070101] mt-[11px] text-sm lg:text-[1.951vw] xl:text-[1.171vw] text-left font-semibold line-clamp-1'>{text}</h3>
                        <p className='mt-[5px] md:mt-3 text-left text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold'>₹ {price}</p>
                    </div>
                </Link>
            </section>
        </>
    )
}

export default Arrival