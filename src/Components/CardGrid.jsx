import {useQuery} from "@tanstack/react-query";

const CardGrid = () => {

    const getCards = () => {
        fetch(`${import.meta.env.VITE_DATA_URL}/cards.json`, {})
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch cards.');
                }
                return response.json();
            })
    }

    const {data: cardsData, isSuccess: isCardsDataSuccess} = useQuery({ queryKey: ['card_list'], queryFn: getCards })
    console.log(cardsData);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {isCardsDataSuccess && cardsData?.map(card => (
                    <div key={card.id} className="bg-white rounded-lg shadow-lg p-4">
                        <img src={card.picture} alt={card.name} className="w-full rounded-md mb-4"/>
                        <p className="text-center font-semibold">{card.name}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CardGrid
