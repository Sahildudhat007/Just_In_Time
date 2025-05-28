import React, { useState } from 'react';

// component import
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import TrandingWatchData from '../../Components/TrandingWatchData/TrandingWatchData';
import Vintage from './Vintage';

// image import
import vintage_watches_desk from "../../assets/images/vintage_watches_desk.webp";
import vintage_watches_mobile from "../../assets/images/vintage_watches_mobile.webp";

function VintageWatches() {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className='hidden lg:block'>
                <Breadcrumb goBackLink="Home" pageTitle="Vintage Watch Collection" />
            </div>

            <section className='w-full'>
                <div className='relative w-full h-full'>
                    <img src={vintage_watches_desk} alt="" className='w-full h-full object-cover hidden md:block' />
                    <img src={vintage_watches_mobile} alt="" className='w-full h-full object-cover block md:hidden' />
                    <div className='absolute left-[10vw] bottom-[4vw] p-2.5 md:p-0'>
                        <h1 className='text-[9.3vw] md:text-[3.66vw] font-serif text-white'>Vintage Watch Collection</h1>
                        <p className='text-[3.33vw] md:text-[1.318vw] text-white uppercase opacity-70'>234 Watches | 12 Brands</p>
                    </div>
                </div>

                <div className='block lg:hidden'>
                    <Breadcrumb goBackLink="Home" pageTitle="Vintage Watch Collection" />
                </div>

                <div className='px-[10px] lg:px-[50px] xl:px-[10%] pb-9 mt-10 grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-[25px]'>
                    {TrandingWatchData.vintageWatches.map((value, ind) => (
                        <Vintage
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
                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>A leather watch is more A vintage watch is more than just a timepiece; it’s a statement of style, a mark of heritage, and a testament to craftsmanship. Whether you are an enthusiast or a first-time buyer, collecting vintage watches offers a journey through history, innovation, and artistry. These vintage watches for men and vintage watches for women often come with a story, making them unique pieces that hold sentimental and collectable value. From timeless classics to modern reissues, vintage watches are making a strong comeback, appealing to those who appreciate fine craftsmanship, timeless aesthetics, and historical significance.
                        </p>
                        {isExpanded && (
                            <>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    A renewed appreciation for intricate mechanical engineering and iconic designs has fueled the resurgence of vintage watches. Enthusiasts and collectors alike seek out vintage watch models, antique watches, and old watches for their unique appeal and investment potential. This guide explores the best vintage-style watches, their unique selling points (USPs), and why they remain a favourite among watch lovers. We'll also dive into specific models that stand out in quality, design, and performance, helping you make an informed decision when adding a piece to your collection.
                                </p>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    <strong>About Vintage Watches: Legacy, Innovation, and Focus Areas</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The world of vintage watches is steeped in history, blending traditional craftsmanship with modern innovation. These watches represent legacy brands that have pioneered horology for decades, delivering precision, style, and reliability. The focus of vintage watch collections is on:
                                </p>
                                <ul className='list-disc px-10'>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Heritage Designs: Recreating classic models with contemporary features.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Quality Craftsmanship: Superior materials and engineering for longevity.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Timeless Appeal: Styles that remain fashionable across generations.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Investment Value: Vintage watches often appreciate value, making them ideal collector's items.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Mechanical Mastery: Many vintage watches feature handcrafted intricate movements, offering a level of detail rarely found in modern mass-produced watches.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Exclusive Materials: Some models incorporate rare materials such as solid gold, platinum, or even unique enamel dials that enhance their value and appeal.</p>
                                    </li>
                                </ul>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    As technology advances, vintage watches stand out for their mechanical ingenuity and artistic designs, often outperforming modern quartz models in terms of collectability and long-term desirability. Many collectors view vintage watches as more than accessories—they are heirlooms that can be passed down through generations, preserving memories and craftsmanship from the past.
                                </p>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    <strong>Why Choose a Vintage Watch?</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Opting for a vintage watch comes with several advantages, including:
                                </p>
                                <ul className='list-disc px-10'>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Timeless Design: Classic aesthetics that never go out of style. Whether you prefer minimalistic dress watches or bold chronographs, vintage watches offer a variety of options that cater to different tastes.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>High-Quality Build: Durable materials and meticulous craftsmanship ensure longevity. Unlike many modern watches that rely on mass production, vintage watches are often handmade with a focus on precision and durability.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Investment Potential: Many vintage watches appreciate over time, making them collectable assets. Limited production runs, discontinued models, and historical significance contribute to their increasing value.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Heritage and Legacy: Owning a vintage watch is like wearing a piece of history on your wrist. It tells a story of the era it was made in, from design influences to technological advancements.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Unique Appeal: Vintage designs stand out in a sea of modern, mass-produced watches. Wearing a vintage watch showcases individuality and appreciation for classic horology.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Sustainability: Choosing a vintage watch is eco-friendly, as it promotes recycling and reduces the demand for newly manufactured products, which require energy-intensive resources.</p>
                                    </li>
                                </ul>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    Best Watches for Women: Trendy, Durable Designs for Active Lifestyles
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The vintage watches for women blend elegance with durability, catering to various lifestyles. Whether you are looking for a refined timepiece for formal occasions or a versatile watch for daily wear, there is something for everyone in the vintage collection. Some top recommendations include:
                                </p>
                                <a href="#" className='text-blue-600 underline'>
                                    <strong>Tissot Classic Dream Women White Dial Analog Stainless Steel Watch (T1292102201300)</strong>
                                </a>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The Tissot Classic Dream Women White Dial Analog Stainless Steel Watch (T1292102201300) is a sophisticated and elegant timepiece that blends modern style with timeless charm. Featuring a pristine white dial, this watch exudes simplicity and grace, making it a versatile accessory for any wardrobe. The two-tone stainless steel case and bracelet add a touch of luxury, providing a perfect balance between classic aesthetics and contemporary design.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Equipped with precise quartz movement, this watch ensures accurate timekeeping with minimal maintenance. The scratch-resistant sapphire crystal protects the dial from everyday wear and tear, enhancing durability and longevity. Additionally, its water-resistant capabilities make it a reliable choice for daily use, withstanding accidental splashes and exposure to moisture. Whether worn to the office, a formal event, or casual outings, this watch elevates any ensemble with its refined elegance and functional design.
                                </p>
                                <a href="#" className='text-blue-600 underline'>
                                    <strong>Tissot Carson Women Analog Leather Watch (T1222103603300)</strong>
                                </a>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The Tissot Carson Women Analog Leather Watch (T1222103603300) is a beautifully designed timepiece that embodies classic sophistication. The rose gold-plated stainless steel case exudes warmth and femininity, while the rich brown leather strap adds a touch of timeless elegance. This combination makes the watch a perfect accessory for those who appreciate traditional craftsmanship with a modern twist.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Designed for versatility, the Carson watch features a clean, easy-to-read dial with minimalist hour markers, ensuring a refined yet understated look. The scratch-resistant sapphire crystal enhances durability, protecting the watch face from daily scratches and impacts. Its precise quartz movement guarantees reliable and accurate timekeeping, making it an excellent companion for busy professionals and social occasions alike.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The supple leather strap not only enhances the watch's aesthetic appeal but also ensures comfort during prolonged wear. This timepiece seamlessly transitions from professional settings to casual outings, making it an ideal addition to any collection. With its combination of durability, sophistication, and everyday practicality, the Tissot Carson is a must-have for women who value style and reliability.
                                </p>
                                <a href="#" className='text-blue-600 underline'>
                                    <strong>Tissot Bellissima Women Analog Stainless Steel Watch (T1260101101300)</strong>
                                </a>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The Tissot Bellissima Women Analog Stainless Steel Watch (T1260101101300) is an exquisite timepiece that captures the essence of feminine elegance. Designed for women who appreciate sophistication and refinement, this watch boasts a polished stainless steel bracelet that provides both durability and a luxurious appearance. The subtle white dial adds a touch of minimalism, ensuring a classic look that never goes out of style.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Powered by a high-precision quartz movement, the Bellissima offers superior accuracy and reliability, making it a dependable choice for any occasion. The watch is designed with a slim profile, ensuring a comfortable fit on the wrist while maintaining a sophisticated aesthetic. The scratch-resistant sapphire crystal ensures that the watch retains its pristine look even with daily wear, protecting it from potential damage.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Perfectly suited for formal events, business meetings, or everyday wear, this timepiece enhances any ensemble with its refined charm. Its understated yet luxurious appeal makes it a timeless accessory that effortlessly complements both contemporary and classic fashion choices. Whether worn alone or with fine jewellery, the Tissot Bellissima is a statement piece embodying grace and precision.
                                </p>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    Best Watches for Men: High-Quality, Performance-Driven Options
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Vintage watches for men have long been celebrated for their robust construction and classic design. These timepieces effortlessly combine traditional craftsmanship with modern precision, making them a staple for collectors and enthusiasts alike. Whether you are searching for a watch that complements formal attire or one that enhances a casual outfit, vintage-inspired watches offer the perfect balance of sophistication, durability, and historical significance. With their rich heritage, intricate detailing, and lasting appeal, these watches remain essential accessories for men who appreciate fine horology. Below are some of the finest vintage-style watches available today, each offering unique features that make them stand out in the world of timepieces.
                                </p>
                                <a href="#" className='text-blue-600 underline'>
                                    <strong>Tissot T-Classic PRX Men's Analog Stainless Steel Watch (T1374101109100)</strong>
                                </a>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The Tissot T-Classic PRX Men's Analog Stainless Steel Watch (T1374101109100) is a masterpiece of modern craftsmanship inspired by the classic designs of the past. With its bold, sleek stainless steel case and integrated bracelet, this watch exudes a sophisticated yet sporty appeal, making it an ideal choice for both casual and formal occasions.
                                </p>
                                <ul className='list-disc px-10'>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Premium Construction: The stainless steel build ensures durability and a polished, luxurious look.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Swiss Quartz Movement: Offers unparalleled accuracy and requires minimal maintenance.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Water Resistance: Designed to withstand daily exposure to water, making it suitable for everyday use.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Versatile Design: The combination of vintage inspiration and contemporary aesthetics makes it a must-have for any watch enthusiast.</p>
                                    </li>
                                </ul>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The PRX series pays homage to Tissot's classic 1970s designs while incorporating modern advancements in watchmaking. Whether worn to the office, at a social gathering, or during leisure activities, this timepiece elevates any ensemble with its timeless charm.
                                </p>
                                <a href="#" className='text-blue-600 underline'>
                                    <strong>Seiko 5 Sports Automatic Men Green Dial Analog Stainless Steel Watch (SSK035K1)</strong>
                                </a>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The Seiko 5 Sports Automatic Men Green Dial Analog Stainless Steel Watch (SSK035K1) is an exceptional choice for those who prefer a watch with bold aesthetics and robust functionality. Seiko has long been a pioneer in automatic movements, and this model continues to uphold the brand’s reputation for reliability and precision.
                                </p>
                                <ul className='list-disc px-10'>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Automatic Movement: Powered by kinetic energy, eliminating the need for battery replacements.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Striking Green Dial: A unique and eye-catching feature that sets this watch apart.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Stainless Steel Bracelet: Ensures durability while adding a touch of refinement.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Versatile Wearability: Suitable for both formal occasions and casual outings.</p>
                                    </li>
                                </ul>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    This watch embodies Seiko's commitment to producing high-quality, stylish, and performance-driven timepieces. Whether you're an avid collector or looking for your first automatic watch, this model offers exceptional value and enduring appeal.
                                </p>
                                <a href="#" className='text-blue-600 underline'>
                                    <strong>Seiko Presage Men's Blue Analog Leather Automatic Watch (SSA421J1)</strong>
                                </a>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The Seiko Presage Men's Blue Analog Leather Automatic Watch (SSA421J1) is a testament to Seiko's dedication to traditional watchmaking. Featuring a stunning deep blue dial and a luxurious genuine leather strap, this watch seamlessly blends vintage aesthetics with modern performance.
                                </p>
                                <ul className='list-disc px-10'>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Automatic Movement: Equipped with a power reserve indicator for enhanced functionality.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Classic Blue Dial: A timeless and elegant design element that enhances its vintage appeal.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Genuine Leather Strap: Provides a comfortable and refined fit, perfect for long-term wear.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Mechanical Craftsmanship: Ideal for enthusiasts who appreciate the artistry behind mechanical watches.</p>
                                    </li>
                                </ul>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The Seiko Presage series is known for its exceptional build quality and sophisticated designs. This watch is perfect for those who admire mechanical timepieces and seek a refined yet practical option for daily wear or special occasions.
                                </p>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    Popular Vintage Watch Series
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Several renowned series have defined the vintage watch market, including:
                                </p>
                                <h2 className='my-[1em]'>
                                    <strong>Series 1: Classic Heritage</strong>
                                </h2>
                                <ul className='list-disc px-10'>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Inspired by the early 20th-century designs with elegant cases and minimalist dials.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Perfect for collectors looking for authenticity and history.</p>
                                    </li>
                                </ul>
                                <h2 className='my-[1em]'>
                                    <strong>Series 2: Retro Sport</strong>
                                </h2>
                                <ul className='list-disc px-10'>
                                    <li className='text-[#6F6F6F]'>
                                        <p>It features durable materials and robust designs that are ideal for adventure seekers.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Includes chronograph functionalities and bold dial colours.</p>
                                    </li>
                                </ul>
                                <h2 className='my-[1em]'>
                                    <strong>Series 3: Modern Vintage</strong>
                                </h2>
                                <ul className='list-disc px-10'>
                                    <li className='text-[#6F6F6F]'>
                                        <p>It perfectly blends past aesthetics with modern features like sapphire crystals and advanced movements.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Suitable for both formal and casual wear.</p>
                                    </li>
                                </ul>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    Buying Watches Online: Authenticity, Offers, and Services at Just In Time
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Purchasing vintage watches online requires careful consideration to ensure authenticity and value. At
                                    <span><a href="#" className='text-blue-600'>Just In Time</a></span>, we provide:
                                </p>
                                <ul className='list-disc px-10'>
                                    <li className='text-[#6F6F6F]'>
                                        <p>100% Authentic Watches: Guaranteed original timepieces from trusted brands.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Exclusive Discounts & Offers: Competitive pricing and special deals.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Expert Assistance: Knowledgeable customer support for your queries.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Secure Transactions: Safe and reliable payment gateways.</p>
                                    </li>
                                    <li className='text-[#6F6F6F]'>
                                        <p>Easy Returns & Warranty: Hassle-free returns and manufacturer warranties are available on all products.</p>
                                    </li>
                                </ul>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    FAQs: Addressing Common Shopper Queries
                                </h2>
                                <h2 className='my-[1em]'>
                                    <strong>Q: How do I ensure a vintage watch is authentic?</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    A: Always buy from reputable retailers like Just In Time, check for brand certifications, and verify serial numbers.
                                </p>
                                <h2 className='my-[1em]'>
                                    <strong>Q: Are vintage watches water-resistant?</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    A: Always buy from reputable retailers like Just In Time, check for brand certifications, and verify serial numbers.
                                </p>
                                <h2 className='my-[1em]'>
                                    <strong>Q: Do vintage watches require special maintenance?</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    A: Regular servicing by a professional watchmaker ensures longevity. Avoid exposure to extreme temperatures and magnets.
                                </p>
                                <h2 className='my-[1em]'>
                                    <strong>Q: Do vintage watches appreciate in value?</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    A: Many rare and well-maintained vintage watches increase in value over time, making them excellent investment pieces.
                                </p>
                                <h2 className='text-xl md:text-2xl my-[1em]'>
                                    Conclusion
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Vintage watches offer timeless appeal, exceptional craftsmanship, and historical significance. Explore our curated collection at
                                    <span><a href="#" className='text-blue-600'>Just In Time</a></span>, and find the perfect watch that tells your story.
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

export default VintageWatches