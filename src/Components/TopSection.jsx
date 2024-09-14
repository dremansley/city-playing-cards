const TopSection = () => {
    const backgroundImage = {
        backgroundAttachment: "fixed",
        backgroundImage:
            "url('https://nypost.com/wp-content/uploads/sites/2/2022/08/chester-uk-named-worlds-prettiest-city-03.jpg?quality=100')",
    };

    return (
        <div
            className="relative py-48 overflow-hidden bg-fixed bg-cover bg-center"
            style={backgroundImage}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
                    Welcome to Chester Cards
                </h1>
                <p className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
                    Experience Chester through beautifully designed playing cards that capture the city’s landmarks.
                </p>
            </div>
        </div>
    );
};

export default TopSection;
