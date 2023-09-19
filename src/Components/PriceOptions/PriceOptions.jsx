// import Feature from "../Feature/Feature";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {



    const data = [
        {
            "id": "1",
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym facilities",
                "Cardio equipment",
                "Strength training equipment",
                "Locker room access"
            ]
        },
        {
            "id": "2",
            "name": "Silver Membership",
            "price": 49.99,
            "features": [
                "Access to gym facilities",
                "Cardio equipment",
                "Strength training equipment",
                "Locker room access",
                "Group fitness classes (limited)"
            ]
        },
        {
            "id": "3",
            "name": "Gold Membership",
            "price": 79.99,
            "features": [
                "Access to gym facilities",
                "Cardio equipment",
                "Strength training equipment",
                "Locker room access",
                "Group fitness classes",
                "Sauna and steam room access",
                "Personal trainer consultation (monthly)"
            ]
        },
        {
            "id": "4",
            "name": "Platinum Membership",
            "price": 119.99,
            "features": [
                "Access to gym facilities",
                "Cardio equipment",
                "Strength training equipment",
                "Locker room access",
                "Group fitness classes",
                "Sauna and steam room access",
                "Personal trainer consultation ",
                "Nutritional counseling (monthly)"
            ]
        }
    ]



    return (
        <div className=" w-[90%] mx-auto">


            <h1 className=" text-center mt-4 text-3xl font-bold ">Feautures Cards </h1>

            <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-8  ">
                {
                    data.map(card => <PriceOption key={card.id} card={card}></PriceOption>)
                }

            </div>




        </div>
    );
};

export default PriceOptions;