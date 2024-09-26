const TopSection = () => {
    const backgroundImage = {
        // backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition:"right",
        backgroundRepeat: "no-repeat",
         backgroundImage: 'url("https://wrpartners.co.uk/wp-content/uploads/2024/05/shutterstock_1151587373-1440x550.jpg")',
        height:"50vh"
    };

    return (
        <div
            className="relative py-48 overflow-hidden bg-fixed bg-cover bg-center"
            style={backgroundImage}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>

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
