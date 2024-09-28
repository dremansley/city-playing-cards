import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import BuyButton from "./BuyButton.jsx";

const cardVariants = {
    hidden: { opacity: 0, y: -100, rotate: -15 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            delay: i * 0.08,
            type: "spring",
            stiffness: 120,
            damping: 20,
        },
    }),
}


const CardGrid = ({ openModal }) => {
    const getCards = () => {
        return fetch(`${import.meta.env.VITE_DATA_URL}/cards.json`, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch cards.");
            }
            return response.json();
        });
    };

    const { data: cardsData, isSuccess: isCardsDataSuccess } = useQuery({
        queryKey: ["card_list"],
        queryFn: getCards,
    });

    return (
        <>
            <div className="container mx-auto p-12 mt-12 text-center" id="cards">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Card Collection</h2>
                    <div className="flex justify-center mt-4">
                        <span className="block w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded"></span>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 xl:max-w-3xl mx-auto">
                    {isCardsDataSuccess &&
                        cardsData?.map((card, index) => (
                            <motion.div
                                key={card.id}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                                className="relative group p-1 rounded-lg transition duration-300 transform hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600"
                                style={{ cursor: "pointer" }}
                            >
                                <div
                                    className={`relative overflow-hidden bg-white rounded-lg shadow-xl p-2 transform transition duration-500 ${
                                        index % 2 === 0 ? "rotate-2 skew-y-1" : "-rotate-2 skew-y-1"
                                    } hover:rotate-0 hover:skew-y-0`}
                                >
                                    <img
                                        src={"https://opengameart.org/sites/default/files/king_of_hearts2.png"}
                                        alt={card.name}
                                        className="w-full rounded-md mb-0"
                                    />
                                    <div
                                        className="absolute inset-0 flex items-center justify-center opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                                        onClick={openModal}
                                    >
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </div>

                <BuyButton />
            </div>
        </>
    );
};

export default CardGrid;
