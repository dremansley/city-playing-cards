const About = () => {
    return (
        <section className="container mx-auto mt-12 md:mt-16 px-4 md:px-8">
            <div className="flex flex-col items-center justify-between md:flex-row">

                <div className="w-full md:w-1/2 lg:w-5/12 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl leading-tight">
                        Explore Chester's Playing Cards
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 md:text-xl leading-relaxed">
                        Discover beautifully designed playing cards inspired by city attractions from around Chester. Each card
                        is a work of art, capturing the essence of iconic landmarks and hidden gems.
                    </p>
                    <div className="mt-6 mb-8 md:mb-0">
                        <button
                            className="px-6 py-3 text-white transition duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 hover:shadow-lg font-semibold shadow-md mx-auto md:mx-0 block">
                            Buy Card Pack
                        </button>
                    </div>
                </div>

                <div className="w-full mt-8 md:mt-0 md:w-1/2 lg:w-6/12">
                    <img
                        src="https://images-cdn.ubuy.co.in/633ab5a45871b42f0f7176ab-ubuy-online-shopping.jpg"
                        alt="Custom Playing Cards"
                        className="object-cover w-full h-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        </section>
    )
}

export default About;
