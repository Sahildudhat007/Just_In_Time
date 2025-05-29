import React, { useState } from 'react'

// component import
import MenWomenData from '../../Components/MenWomenData/MenWomenData';

// react icon
import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";
import { Link } from 'react-router-dom';

const searchData = [
    {
        id: 1,
        name: "Tissot",
    },
    {
        id: 2,
        name: "Chronograph",
    },
    {
        id: 3,
        name: "G Shock",
    },
    {
        id: 4,
        name: "Fossil",
    },
    {
        id: 5,
        name: "Under 30K",
    },
    {
        id: 6,
        name: "Automatic watches",
    },
]

function SearchBar() {

    const [query, setQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const handleSearch = (e) => {
        const input = e.target.value.toLowerCase();
        setQuery(input);

        const allData = [
            ...MenWomenData.menData,
            ...MenWomenData.womenData,
            ...MenWomenData.offerData,
            ...MenWomenData.smartData,
            ...MenWomenData.arrivalData,
            ...MenWomenData.switchMadeWatches,
            ...MenWomenData.leatherWatches,
            ...MenWomenData.vintageWatches,
            ...MenWomenData.automationWatches,
            ...MenWomenData.gShockWatches,
            ...MenWomenData.trendingTimepieces,
        ];

        if (input === "") {
            setFilteredResults(allData);
        } else {
            const filtered = allData.filter((item) =>
                item.brand.toLowerCase().includes(input) ||
                item.text.toLowerCase().includes(input)
            );
            setFilteredResults(filtered);
        }
    };

    const clearSearch = () => {
        setQuery('');
        setFilteredResults([]);
    };

    return (
        <>
            <section>
                <div className='bg-black px-4'>
                    <div className='w-full h-[100%] md:h-[10.451vw] flex justify-center items-center'>
                        <div className='md:px-24 w-full md:max-w-[80vw] lg:max-w-[65vw] h-[25vw] flex flex-col justify-center mx-auto'>
                            <div className='flex items-center'>
                                <form action="/search" className='w-full flex items-center bg-[#272727] rounded-lg'>
                                    <button type='button' className='w-[2rem] h-[2rem] ml-2 flex items-center justify-center'>
                                        <HiOutlineSearch className="text-xl text-white" />
                                    </button>
                                    <input
                                        type="text"
                                        className="flex outline-none lg:text-[1.171vw] text-white px-3.5 py-3.5 w-full"
                                        placeholder='Search Product, Brands'
                                        value={query}
                                        onChange={handleSearch}
                                    />
                                </form>
                                {query && (
                                    <button
                                        onClick={clearSearch}
                                        className='w-[2rem] h-[2rem] ml-2 flex items-center justify-center cursor-pointer'>
                                        <HiOutlineX className="text-xl text-white" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[80%] pl-0 pb-[10%] md:pb-[3%] mx-auto'>
                        <div className='grid grid-cols-3 md:flex items-center justify-center gap-y-[20%] gap-[2%]'>
                            {searchData.map((item) => (
                                <div key={item.id} className='border border-white rounded-[30px] w-fit min-w-[100%] md:min-w-[101px] h-[7.477vw] md:h-[3.587vw] flex items-center justify-center p-[5px] md:p-[2%]'>
                                    <a href="#" className='flex items-center justify-center gap-[3%]'>
                                        <h3 className='text-[2.570vw] md:text-[1.171vw] text-nowrap text-white my-3.5'>{item.name}</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.698" height="9.157" viewBox="0 0 15.698 9.157" className='md:w-[18px] md:h-[18px]'>
                                            <path id="Path_5926" data-name="Path 5926" d="M14.989,12l1.8,1.751-3.83,3.72L9.82,14.419,4,20.078l1.111,1.08L9.82,16.579l3.14,3.052,4.937-4.8,1.8,1.751V12Z" transform="translate(-4 -12)" fill="#fff"></path>
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Search Results */}
                {query && (
                    <div className='px-5 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                        {filteredResults.map((item) => (
                            <div className='group' key={item.id}>
                                <Link to={`/productDetails/${item.id}`}>
                                    <div className='relative overflow-hidden rounded-lg'>
                                        <Link to={`/productDetails/${item.id}`}>
                                            <img src={item.img} alt="" className="w-full transition-opacity duration-300 group-hover:opacity-0" />
                                            <img src={item.hover_img} alt="" className="w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        </Link>
                                    </div>
                                    <div className='p-4 pt-[18px] group'>
                                        <Link to={`/productDetails/${item.id}`}>
                                            <div className=''>
                                                <h2 className='text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold font-serif'>{item.brand}</h2>
                                            </div>
                                            <h3 className='text-[#070101] mt-[11px] text-sm lg:text-[1.951vw] xl:text-[1.171vw] text-left font-semibold line-clamp-1'>{item.text}</h3>
                                            <p className='mt-[5px] md:mt-3 text-left text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold'>₹ {item.price}</p>
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        {query && filteredResults.length === 0 && (
                            <p className="text-center w-full col-span-full mt-6">No products found.</p>
                        )}
                    </div>
                )}
            </section>
        </>
    )
}

export default SearchBar