const TopSection = () => {
    const backgroundImage = {
        backgroundAttachment: "fixed",
        backgroundImage: "url('https://nypost.com/wp-content/uploads/sites/2/2022/08/chester-uk-named-worlds-prettiest-city-03.jpg?quality=75&strip=all')",
    };

    return (
        <>
        <div
            className="relative py-24 overflow-hidden bg-fixed bg-cover bg-center"
            style={backgroundImage}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">Welcome to Chester Cards</h1>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl">
                    Experience Chester through playing cards
                </p>
                <button className="px-8 py-3 mt-8 text-lg font-semibold text-white transition duration-300 ease-in-out bg-blue-600 rounded-full hover:bg-blue-700 shadow-lg">
                    View Cards
                </button>
            </div>
        </div>
            </>
    );
};

export default TopSection;
