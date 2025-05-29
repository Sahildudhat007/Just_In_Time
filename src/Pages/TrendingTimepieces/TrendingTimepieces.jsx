import React from 'react';

// components import
import Trending from './Trending';
import MenWomenData from '../../Components/MenWomenData/MenWomenData';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';

// react icon
import { FiFilter } from "react-icons/fi";

function TrendingTimepieces() {
    return (
        <>
            <div className='hidden lg:block'>
                <Breadcrumb goBackLink="Home" pageTitle="Trending Timepieces" />
            </div>

            <section className='w-full'>
                <div className='container mx-auto py-6 px-[10px] lg:px-[50px] xl:px-[10%] flex flex-col md:flex-row justify-between items-center gap-4'>
                    <div>
                        <h1 className='text-[1.66vw] font-serif'>Trending Timepieces</h1>
                    </div>
                    <div>
                        <a href="#" className='text-white bg-black rounded-full py-4 px-7 text-sm md:text-[1.1vw] hover:bg-gray-800 transition hidden md:flex items-center'>
                            <FiFilter className='mr-2' />
                            FILTER & SORT
                        </a>
                    </div>
                </div>

                <div className='px-[10px] lg:px-[50px] xl:px-[10%] pb-9 grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-[25px]'>
                    {MenWomenData.trendingTimepieces.map((value, ind) => (
                        <Trending
                            key={ind}
                            id={value.id}
                            img={value.img}
                            hover_img={value.hover_img}
                            brand={value.brand}
                            text={value.text}
                            price={value.price}
                        />
                    ))}

                </div>
            </section>
        </>
    )
}

export default TrendingTimepieces