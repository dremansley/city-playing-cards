const Contact = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center md:py-24" id="contact">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full md:max-w-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>

                <form action="#" method="POST">

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Enter your message"
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md shadow-md hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition duration-300 ease-in-out"
                        >
                            Send Message
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Contact;
