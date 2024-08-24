const About = () => {
    return (
        <section className="container mx-auto mt-16 px-4 md:px-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="w-full md:w-1/2 lg:w-5/12">
                    <h2 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
                        Explore Chester's Playing Cards
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 md:text-xl">
                        Discover beautifully designed playing cards inspired by city attractions from around Chester.
                        Each card is a work of art, capturing the essence of iconic landmarks and hidden gems.
                    </p>
                    <button
                        className="px-6 py-3 mt-6 text-white transition duration-300 ease-in-out bg-blue-600 rounded-md hover:bg-blue-700 font-semibold">
                        Buy Card Pack
                    </button>
                </div>
                <div className="w-full mt-8 md:w-1/2 md:mt-12 lg:w-6/12">
                    <img src="https://images-cdn.ubuy.co.in/633ab5a45871b42f0f7176ab-ubuy-online-shopping.jpg"
                         alt="Custom Playing Cards"
                         className="object-cover w-full h-full rounded-lg "/>
                </div>
            </div>
        </section>
    )
}
export default About;
