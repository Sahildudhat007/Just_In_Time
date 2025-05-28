import React, { useState } from 'react'

// component import
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import TrandingWatchData from '../../Components/TrandingWatchData/TrandingWatchData';
import Swiss from './Swiss';

// react icon
import { FiFilter } from "react-icons/fi";

function SwissWatches() {

    const brands = ["All", "Movado", "Roamer", "Rado", "Tissot"];

    const [selectedBrand, setSelectedBrand] = useState("All");

    const filteredWatches = selectedBrand === "All"
        ? TrandingWatchData.switchMadeWatches
        : TrandingWatchData.switchMadeWatches.filter(watch => watch.brand === selectedBrand);

    return (
        <>
            <div className='hidden lg:block'>
                <Breadcrumb goBackLink="Home" pageTitle="Swiss Watches" />
            </div>

            <section className='w-full'>
                <div className='px-20 mt-10'>
                    <h2 className='text-[1.66vw] font-serif'>Swiss Watches</h2>
                </div>
                <div className='container mx-auto py-6 px-2.5 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <div className='flex flex-wrap gap-3'>
                        {brands.map((brand, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedBrand(brand)}
                                className={`border border-black rounded-full py-3 px-6 text-sm md:text-[1.171vw] cursor-pointer
                                ${selectedBrand === brand ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                {brand}
                            </button>
                        ))}
                    </div>
                    <div>
                        <a href="#" className='text-white bg-black rounded-full py-4 px-7 text-sm md:text-[1.1vw] hover:bg-gray-800 transition hidden md:flex items-center'>
                            <FiFilter className='mr-2' />
                            FILTER & SORT
                        </a>
                    </div>
                </div>

                <div className='px-[10px] lg:px-[50px] xl:px-[10%] pb-9 grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-[25px]'>
                    {filteredWatches.length > 0 ? (
                        filteredWatches.map((value, ind) => (
                            <Swiss
                                key={ind}
                                id={value.id}
                                img={value.img}
                                hover_img={value.hover_img}
                                brand={value.brand}
                                text={value.text}
                                price={value.price}
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-lg text-gray-500">No watches found for this brand.</p>
                    )}

                </div>
            </section>
        </>
    )
}

export default SwissWatches