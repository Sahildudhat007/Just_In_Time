import React, { useState } from 'react'

// component import
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import TrandingWatchData from '../../Components/TrandingWatchData/TrandingWatchData';
import Automatic from './Automatic';

// react icon
import { FiFilter } from "react-icons/fi";

// image import
import automatic_desk from "../../assets/images/automatic_desk.webp";
import automatic_mobile from "../../assets/images/automatic_mobile.webp";

function AutomaticWatches() {

    const brands = ["All", "Citizen", "Seiko", "Tissot", "Stainless Steel",];

    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState("All");

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const filteredWatches = selectedBrand === "All"
        ? TrandingWatchData.automationWatches
        : TrandingWatchData.automationWatches.filter(watch => watch.brand === selectedBrand);

    return (
        <>
            <div className='hidden lg:block'>
                <Breadcrumb goBackLink="Home" pageTitle="Automatic Watches Collection" />
            </div>

            <section className='w-full'>
                <div className='relative w-full h-full'>
                    <img src={automatic_desk} alt="" className='w-full h-full object-cover hidden md:block' />
                    <img src={automatic_mobile} alt="" className='w-full h-full object-cover block md:hidden' />
                    <div className='absolute left-[10vw] bottom-[4vw] p-2.5 md:p-0'>
                        <h1 className='text-[9.3vw] md:text-[3.66vw] font-serif text-white'>Automatic Watches Collection</h1>
                        <p className='text-[3.33vw] md:text-[1.318vw] text-white uppercase opacity-70'>631 Watches | 22 Brands</p>
                    </div>
                </div>

                <div className='block lg:hidden'>
                    <Breadcrumb goBackLink="Home" pageTitle="Automatic Watches Collection" />
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
                            <Automatic
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

                <div className='py-[1%] px-[5%] md:px-[10%]'>
                    <div>
                        <h2 className='text-xl md:text-2xl my-[1em]'>
                            Discover the Elegance of Automatic Watches
                        </h2>
                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>An automatic watch for men is more than just a timepiece; it symbolises sophistication and engineering excellence. Unlike quartz models, these watches harness the motion of your wrist to power themselves, eliminating the need for batteries. It functions using the kinetic energy of the wearer's movement rather than hand strength. This energy is eventually used to keep the watch running after being stored in the mainspring. From premium selections to budget automatic watches, there’s something for every preference.</p>
                        {isExpanded && (
                            <>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>Automatic watches are a testament to timeless craftsmanship and innovative technology. These self-winding watches blend precision and style, making them a preferred choice for watch enthusiasts. Explore our collection of automatic watches to experience the perfect fusion of tradition and modernity. For those looking for a refined piece, consider the best men's automatic watches, which reflect elegance and functionality. </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Would you like to have an
                                    <span> <a href="#" className='text-blue-600'>automatic watch under 15000</a></span>? Explore our curated collection of automatic watches for men under 15000 that balance style and affordability.
                                </p>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    Leather Watch Styles
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Leather watches come in a variety of designs, colors, and materials, giving you plenty of choices to match your personal style. At Just In Time, our collection includes leather watches for men and leather watches for women designed to suit different preferences.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    For men, mens black leather watches and mens brown leather watches are among the most popular options. A mens brown leather watch paired with a sleek suit can give off a distinguished, polished look. Similarly, the black leather watch strap offers a minimalist yet sophisticated appearance that goes well with nearly anything in your wardrobe.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    For women, leather strap watches womens come in a variety of designs, from simple and sleek to more intricate styles. The ladies black leather watch is perfect for those who prefer a bold, elegant accessory. Meanwhile, leather watches for girls offer delicate designs, making them perfect for everyday wear or special occasions.
                                </p>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    Occasions to Wear Leather Watches
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Leather watches are versatile and perfect for any occasion, from business meetings to casual outings. Men's leather wrist watches offer a refined, understated look for professional settings, while leather belt watches for men provide a rugged yet sophisticated option for both formal and casual wear.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    For women, leather watches add elegance without being overly flashy. Whether you choose a sleek women's black leather watch or a classic brown leather strap watch, these timepieces are ideal for daily use or special events.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Leather watches also make great accessories for life’s big moments, like job interviews or weddings. Our best leather watches for ladies are stylish and functional, suitable for all occasions. Similarly, men’s strap watches make a lasting impression wherever you go.
                                </p>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    What Makes Just In Time the Best Place for Leather Watches?
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    At Just In Time, we pride ourselves on offering an extensive collection of high-quality leather watches that cater to all tastes and budgets. Whether you're looking for a black leather watch strap or a mens leather strap watch, our curated selection ensures that you'll find a watch that matches your personal style.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    We understand that durability and comfort are top priorities when choosing a watch. That's why our leather watches feature top-grade materials that stand the test of time. From mens brown leather watches to ladies black leather watches, each piece in our collection is crafted with care, ensuring you receive a high-quality product. We offer leather watches that not only look good but also feel comfortable on your wrist, making them perfect for daily wear.
                                </p>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    FAQ
                                </h2>
                                <h2 className='my-[1em]'>
                                    <strong>What is the best color for a leather watch?</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The best color depends on your style and wardrobe. A brown leather watch pairs well with casual outfits, while a black leather watch is ideal for formal occasions. Both are versatile choices that can be dressed up or down
                                </p>
                                <h2 className='my-[1em]'>
                                    <strong>What occasions are suitable for wearing leather watches?</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Leather watches are versatile and can be worn on a range of occasions, from formal events like business meetings to casual outings.
                                </p>
                                <h2 className='my-[1em]'>
                                    <strong>Do you offer both men's and women's leather watches?</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Yes, we offer a variety of leather watches for men and women, including mens leather strap watches, leather strap watches womens, and leather belt watches for mens.
                                </p>
                                <h2 className='my-[1em]'>
                                    <strong>Are leather watches durable?</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Yes, leather watches are known for their durability, especially when cared for properly. Our collection features high-quality leather that can last for years.
                                </p>
                                <h2 className='my-[1em]'>
                                    <strong>Can leather watches be worn for formal occasions?</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Yes, leather watches, especially those with a black leather watch strap or brown leather strap watch, are perfect for formal settings. They add a refined touch to business attire or formalwear.
                                </p>
                            </>
                        )}
                        <p
                            onClick={toggleReadMore}
                            className='text-[2.8vw] md:text-[1.8vw] lg:text-[1.025vw] uppercase cursor-pointer underline text-[#070101]'>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AutomaticWatches