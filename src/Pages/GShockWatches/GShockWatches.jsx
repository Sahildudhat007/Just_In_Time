import React, { useState } from 'react';

// component import
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import MenWomenData from '../../Components/MenWomenData/MenWomenData';
import GShock from './GShock';

// image import
import gshock_desk from "../../assets/images/gshock_desk.webp";
import gshock_mobile from "../../assets/images/gshock_mobile.webp";

function GShockWatches() {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className='hidden lg:block'>
                <Breadcrumb goBackLink="Home" pageTitle="Casio G-Shock" />
            </div>

            <section className='w-full'>
                <div className='relative w-full h-full'>
                    <img src={gshock_desk} alt="" className='w-full h-full object-cover hidden md:block' />
                    <img src={gshock_mobile} alt="" className='w-full h-full object-cover block md:hidden' />
                    <div className='absolute left-[10vw] bottom-[4vw] p-2.5 md:p-0'>
                        <h1 className='text-[9.3vw] md:text-[3.66vw] font-serif text-white'>Casio G-Shock</h1>
                        <p className='text-[3.33vw] md:text-[1.318vw] text-white uppercase opacity-70'>253 Watches | 1 Brands</p>
                    </div>
                </div>

                <div className='block lg:hidden'>
                    <Breadcrumb goBackLink="Home" pageTitle="Casio G-Shock" />
                </div>

                <div className='px-[10px] lg:px-[50px] xl:px-[10%] pt-10 pb-9 grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-[25px]'>
                    {MenWomenData.gShockWatches.map((value, ind) => (
                        <GShock
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

                <div className='py-[1%] px-[5%] md:px-[10%]'>
                    <div>
                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>Casio G-Shock is renowned for its rugged durability, cutting-edge technology, and bold designs. Engineered to endure the toughest conditions, G-Shock watches feature shock-resistant structures, water resistance up to 200 meters, and advanced functionalities like solar-powered charging, Bluetooth connectivity, and GPS navigation.</p>
                        {isExpanded && (
                            <>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>G-Shock has continuously evolved since its debut in 1983, offering a perfect blend of toughness and modern innovation. Whether for athletes, military personnel, outdoor enthusiasts, or urban trendsetters, G-Shock timepieces provide unmatched reliability and performance. With their distinctive style and superior craftsmanship, these watches are more than just accessories—they are built to keep up with every challenge life throws your way.</p>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    About Casio G-Shock: A Legacy of Excellence
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Casio G-Shock has been a symbol of durability, innovation, and precision since its inception in 1983. Designed to withstand extreme conditions, G-Shock watches are engineered with advanced shock-resistant technology, making them virtually indestructible. Over the decades, Casio has continuously pushed the boundaries of watchmaking by integrating cutting-edge features such as solar-powered charging, Bluetooth connectivity, and atomic timekeeping.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    G-Shock has not only revolutionised the watch industry but has also become a cultural icon, embraced by athletes, military professionals, and urban fashion enthusiasts alike. Whether for outdoor adventures, sports, or everyday wear, G-Shock timepieces offer unmatched resilience and functionality, making them a trusted companion for those who demand reliability in any environment.
                                </p>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    Why Choose G-Shock?
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The Casio G-Shock collection is synonymous with toughness, reliability, and innovation. Designed to withstand the harshest conditions, G-Shock watches are perfect for adventure enthusiasts, athletes, and anyone seeking a resilient timepiece. With features like shock resistance, water resistance, and advanced sensors, G-Shock offers unmatched durability and functionality.
                                </p>
                                <ul className='list-disc pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Unmatched Durability - Designed with a shock-resistant structure, G-Shock watches can withstand extreme impacts, drops, and rough conditions, making them ideal for adventure seekers and professionals.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Water and Mud Resistance - With up to 200 meters of water resistance and specialised models featuring mud and dust resistance, G-Shock watches are built for outdoor activities, including swimming, trekking, and military use.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Advanced Technology - Many G-Shock models include features like solar-powered charging, Bluetooth connectivity, atomic timekeeping, and GPS navigation, ensuring precision and convenience in any situation.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Versatile Designs - From rugged tactical models to sleek urban styles, G-Shock offers various designs suitable for sports, casual wear, and professional settings.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Multi-Functionality - Equipped with features like altimeters, barometers, step tracking, stopwatch functions, and world time, G-Shock watches provide essential tools for both everyday use and extreme conditions.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Long-Lasting Performance - With high-quality materials, innovative technology, and low-maintenance power options like Tough Solar, G-Shock watches are designed to last for years without compromising performance.
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    Best G-Shock Watches for Women
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    When it comes to durability, innovation, and style, G-Shock watches stand out as the top choice for women who lead active lifestyles. Designed with G-Shock's signature toughness, these timepieces combine rugged resilience with modern aesthetics, making them perfect for adventure seekers, fitness enthusiasts, and everyday wear. Whether you're looking for a G-Shock digital watch or a sporty yet elegant G-Shock watch for women, there's a perfect model to match your style and needs.
                                </p>
                                <ul className='list-disc pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock GMA-S2100 Series - A sleek and compact version of the classic G-Shock watch, this series maintains the same durability and resilience as the standard Casio G-Shock watches. With shock resistance, 200m water resistance, and an ultra-modern design, this model is ideal for those who love minimalist yet rugged G-Shock watches for women.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock G-Squad GMD-B800 Series - A G-Shock sports watch designed for fitness lovers, this model features step tracking, Bluetooth connectivity, and a calorie display. The G-Shock Casio resin case ensures durability, while its trendy colour options make it a stylish companion for workouts and daily wear. Whether you're tracking steps or syncing data via the G-Shock watch app, this model keeps up with your fitness goals.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock GMA-S120 Series - This trendy G-Shock watch for women blends a sporty look with high performance. With an analog-digital display, shock resistance, and a built-in stopwatch, it is perfect for both casual wear and athletic activities. The G-Shock watch price varies depending on the model, but the GMA-S120 series offers a great balance of affordability and durability.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock Baby-G BGA-275 Series - A compact and stylish alternative to the standard Casio G-Shock, Baby-G models provide the same level of toughness with a more feminine touch. These G-Shock Casio watches come with 100m water resistance, shockproof technology, and world-time features, making them an excellent choice for travellers and professionals alike.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock GMA-S140 Series - Inspired by the best-selling G-Shock watches for men, this model is lightweight yet packed with features. The bold design, shockproof construction, and essential tools like a stopwatch and dual time zones make it one of the best Casio G-Shock watches for women looking for a reliable timepiece. If you're searching for an affordable yet stylish G-Shock watch price, this model is a great option.
                                        </p>
                                    </li>
                                </ul>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    With the latest G-Shock watches original available in India, you can find a timepiece that matches your lifestyle, whether you're looking for a G-Shock Casio digital watch, a rugged G-Shock sports watch, or a fashionable Casio G-Shock watch that complements your everyday outfits. The G-Shock watch price original range varies, ensuring that there's a model for every budget and preference.
                                </p>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    Best G-Shock Watches for Men
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    For men who demand both durability and style, G-Shock watches for men are the ultimate choice. Known for their shock-resistant build, rugged designs, and advanced features, these Casio G-Shock watches cater to adventurers, athletes, and professionals alike. Whether you need a G-Shock digital watch for outdoor adventures or a stylish G-Shock Casio timepiece for daily wear, the right model awaits you.
                                </p>
                                <h2 className=''>
                                    <strong>Top G-Shock Watches for Men</strong>
                                </h2>
                                <ul className='list-disc pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock GA-2100 Series - Also called the "CasiOak," this series of G-Shock watches for men features a slim design with the same toughness that defines the G-Shock watches initially. Its carbon core guard structure and 200m water resistance make it a versatile timepiece for casual and rugged use.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock Rangeman GW-9400 - Designed for extreme conditions, this G-Shock sports watch includes a triple sensor (altimeter, barometer, compass), making it a top pick for outdoor adventurers. With G-Shock Casio watches, reliability and precision are never compromised.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock G-Steel Series - Offering a perfect blend of toughness and sophistication, this G-Shock watch features stainless steel construction, shock resistance, and solar-powered functionality. This series is worth exploring if you're looking for a premium Casio G-Shock watch.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock Mudmaster GG-B100 - Engineered for harsh environments, this G-Shock Casio digital watch is equipped with Bluetooth connectivity, a carbon fibre-reinforced case, and a mud-resistant design, making it the best G-Shock Casio watch for rugged adventures.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock Gravitymaster GR-B200 - A top-tier aviation watch, this G-Shock digital watch comes with a quad sensor, GPS capabilities, and flight log memory. Whether you're a pilot or a traveller, this Casio G-Shock model offers superior performance.
                                        </p>
                                    </li>
                                </ul>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    With a wide range of G-Shock watches for men, you can find a model that suits your needs, whether you're searching for a G-Shock watch price that fits your budget or a high-end G-Shock Casio timepiece with cutting-edge technology. Explore the latest G-Shock watches' original collection and experience unmatched durability and performance.
                                </p>
                                <h2 className=''>
                                    <strong>Popular G-Shock Series</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Whether you're scaling mountains, diving underwater, or navigating urban environments, a G-Shock watch ensures precision and performance. The collection includes a variety of models with diverse designs, from bold and rugged styles to sleek, minimalist looks. Crafted with high-quality materials, G-Shock watches are built to last while maintaining their iconic appeal.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    G-Shock watches are known for their innovation, durability, and stylish designs. Whether you're looking for a rugged G-Shock sports watch or a sleek G-Shock watch for women, the brand offers multiple series to cater to every need. Some of the most popular G-Shock Casio watches in India include:
                                </p>
                                <ul className='list-disc pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock GA Series - A classic collection featuring a mix of analogue and digital G-Shock watches, known for their bold designs and high durability. These Casio G-Shock watches are perfect for those who love a rugged yet fashionable timepiece.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock G-Squad Series - Designed for fitness enthusiasts, this G-Shock digital watch series includes step tracking, Bluetooth connectivity, and health monitoring features. Ideal for women who want a functional and stylish G-Shock watch for workouts.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock Baby-G Series - A compact and stylish alternative to traditional G-Shock watches for women, offering a lightweight design with the same rugged durability. These G-Shock Casio watches are popular among young professionals and travellers.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock G-Steel Series - A premium collection of original G-Shock watches, combining stainless steel elements with signature shock resistance. A great option for those seeking a high-end Casio G-Shock watch that balances toughness and elegance.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            G-Shock Mudmaster - Built for extreme adventures, these G-Shock Casio digital watches offer mud-resistant and multi-sensor technology, making them perfect for outdoor enthusiasts. The G-Shock watch price varies, but they remain a top choice for professionals and adventurers.
                                        </p>
                                    </li>
                                </ul>
                                <h2 className=''>
                                    <strong>Buying G-Shock Watches Online</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Purchasing G-Shock watches online is convenient, but ensuring authenticity, the best prices, and excellent after-sales service is crucial. When shopping for a G-Shock watch for women or men, here are some essential factors to consider:
                                </p>
                                <ul className='list-disc pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Buy from Authorised Sellers: Always purchase G-Shock Casio watches from trusted retailers like Just In Time to ensure you get genuine, brand-certified products with warranty support.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Check for Originality: To verify authenticity, look for details like the official G-Shock Casio logo, product serial numbers, and original packaging. Avoid deals that seem too good to be true.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Compare G-Shock Watch Prices: The G-Shock watch price varies based on the model and features. Compare different options to find the best deals on G-Shock watches for women or men without compromising on quality.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Explore Exclusive Online Discounts: Online platforms like Just In Time often offer limited-time discounts, bundle offers, and festive sales, helping you get the best G-Shock watches at original prices without overspending.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Read Customer Reviews: Before purchasing a G-Shock digital watch or G-Shock sports watch, check customer feedback and ratings to understand its durability, performance, and comfort.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Check Return and Exchange Policies: Reliable retailers offer easy returns and exchanges, ensuring a hassle-free shopping experience for your Casio G-Shock watch.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Look for After-Sales Services: Buying from Just In Time guarantees access to warranty claims, repairs, and servicing for all original G-Shock watches, providing peace of mind for long-term use.
                                        </p>
                                    </li>
                                </ul>
                                <h2 className=''>
                                    <strong>Browse the collection today and find your ideal G-Shock timepiece!</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Discover the perfect G-Shock watch for men and women that blends durability, style, and advanced features. Whether you're an athlete, traveller, or fashion-forward individual, Casio G-Shock watches offer unmatched reliability and performance.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Pair a G-Shock watch with outdoor gear for your next adventure, or wear it with casual attire for a sporty edge. With its innovative features and bold aesthetics, the G-Shock collection is more than just a watch—it's a lifestyle choice.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Shop now at Just In Time for 100% authentic G-Shock Casio watches, exclusive deals, and top-notch customer service. Find the latest G-Shock watches original at the best prices and elevate your style with a timepiece built for adventure.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Browse the collection today and make a bold statement with G-Shock!
                                </p>
                                <h2 className='my-[1em]'>
                                    <strong>FAQs</strong>
                                </h2>
                                <ol className='my-4 pl-10 list-decimal'>
                                    <li>
                                        <p className='my-4 text-sm md:text-[16px] text-[#6F6F6F]'>
                                            <strong>Are all G-Shock watches waterproof?</strong>
                                            <p>Yes, all G-Shock watches come with at least 100m water resistance, while most models offer 200m, making them perfect for sports and adventure.</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='my-4 text-sm md:text-[16px] text-[#6F6F6F]'>
                                            <strong>What is the price range of G-Shock watches in India?</strong>
                                            <p>The G-Shock watch price varies depending on the model and features, ranging from budget-friendly options to high-end G-Shock Casio digital watches with premium materials and technology.</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='my-4 text-sm md:text-[16px] text-[#6F6F6F]'>
                                            <strong>How do I ensure my G-Shock watch is original?</strong>
                                            <p>Always buy from authorised sellers like Just In Time to get genuine G-Shock watches originally with warranty and official documentation.</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='my-4 text-sm md:text-[16px] text-[#6F6F6F]'>
                                            <strong>Which G-Shock watch is best for fitness enthusiasts?</strong>
                                            <p>The G-Shock G-Squad Series is designed for active users, offering step tracking, Bluetooth connectivity, and fitness monitoring tools in a durable G-Shock Casio watch design.</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='my-4 text-sm md:text-[16px] text-[#6F6F6F]'>
                                            <strong>Do G-Shock watches require battery replacements?</strong>
                                            <p>While standard G-Shock Casio digital watches may need a battery change after a few years, solar-powered models in the Casio G-Shock lineup use sunlight for extended battery life.</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='my-4 text-sm md:text-[16px] text-[#6F6F6F]'>
                                            <strong>What makes G-Shock watches so durable?</strong>
                                            <p>G-Shock watches feature a shock-resistant structure, tough materials, and water resistance, making them highly resilient.</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='my-4 text-sm md:text-[16px] text-[#6F6F6F]'>
                                            <strong>Are G-Shock watches suitable for extreme sports?</strong>
                                            <p>Yes, G-Shock watches are designed for activities like hiking, diving, and other extreme sports.</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='my-4 text-sm md:text-[16px] text-[#6F6F6F]'>
                                            <strong>What advanced features are available in G-Shock watches?</strong>
                                            <p>Many models include features like solar power, GPS, altimeters, barometers, and Bluetooth connectivity.</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='my-4 text-sm md:text-[16px] text-[#6F6F6F]'>
                                            <strong>Can I wear a G-Shock watch for everyday use?</strong>
                                            <p>Absolutely! G-Shock watches are versatile enough for both daily wear and extreme adventures.</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='my-4 text-sm md:text-[16px] text-[#6F6F6F]'>
                                            <strong>Do G-Shock watches come with a warranty?</strong>
                                            <p>Yes, Casio provides a warranty covering manufacturing defects for G-Shock watches.</p>
                                        </p>
                                    </li>
                                </ol>
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

export default GShockWatches