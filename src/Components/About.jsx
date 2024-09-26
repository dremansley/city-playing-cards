import BuyButton from "./BuyButton.jsx";

const About = () => {
    return (
       <>
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>

            <section className="container mx-auto relative z-10 md:pt-20 md:pb-20 px-4 md:px-8 pt-10">
                <div className="flex flex-col items-center justify-between md:flex-row">

                    <div className="w-full md:w-1/2 lg:w-5/12 text-center md:text-left">
                        <h2 className="text-3xl text-grey-800 font-bold md:text-4xl lg:text-5xl leading-tight">
                            Explore Chester's Playing Cards
                        </h2>
                        <p className="mt-4 text-lg text-grey-700 md:text-xl leading-relaxed">
                            Discover beautifully designed playing cards inspired by city attractions from around Chester
                        </p>
                        <BuyButton />
                    </div>

                    <div className="w-full mt-8 md:mt-0 md:w-1/2 lg:w-6/12">
                        <img
                            src="https://dobby-club.com/cdn/shop/products/PSPC_Mockup_1_800x.png?v=1680097575"
                            alt="Custom Playing Cards"
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                </div>
            </section>
    </>
    );
};

export default About;
