import {useQuery} from "@tanstack/react-query";
import BuyButton from "./BuyButton.jsx";

const CardGrid = ({openModal}) => {


    const getCards = () => {
        return fetch(`${import.meta.env.VITE_DATA_URL}/cards.json`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch cards.');
                }
                return response.json();
            });
    };

    const {data: cardsData, isSuccess: isCardsDataSuccess} = useQuery({ queryKey: ['card_list'], queryFn: getCards })

    return (

        <>
            <div className="container mx-auto p-12 mt-12 text-center">
                <h2 className="py-4 pb-8 text-3xl font-bold bg-clip-text">
                    Card Collection
                </h2>

                <div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 xl:max-w-3xl mx-auto">
                    {isCardsDataSuccess && cardsData?.map(card => (
                        <div
                            key={card.id}
                            style={{cursor: "pointer"}}
                            className="relative group p-1 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 transition transform duration-300 hover:scale-105"
                        >
                            <div className="relative overflow-hidden bg-white rounded-lg shadow-lg p-4">
                                <img
                                    src={"https://opengameart.org/sites/default/files/king_of_hearts2.png"}
                                    alt={card.name}
                                    className="w-full rounded-md mb-4"
                                />
                                <div
                                    className="absolute inset-0 flex items-center justify-center opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                                    onClick={openModal}
                                >
                                    {/*<span className="text-lg font-semibold text-white">View Card Details</span>*/}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <BuyButton/>
            </div>

        </>
    );
};

export default CardGrid
