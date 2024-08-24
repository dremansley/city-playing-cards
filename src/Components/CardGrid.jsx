import {useQuery} from "@tanstack/react-query";

const CardGrid = () => {

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
        <div className="container mx-auto p-12 mt-12">
            <h2 className="py-4 pb-8 text-3xl font-bold bg-clip-text">
                Card Collection
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {isCardsDataSuccess && cardsData?.map(card => (
                    <div
                        key={card.id}
                        className="relative overflow-hidden group bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                    >
                        <img src={card.picture} alt={card.name} className="w-full rounded-md mb-4"/>
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="text-lg font-semibold text-white">View Card Details</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardGrid
