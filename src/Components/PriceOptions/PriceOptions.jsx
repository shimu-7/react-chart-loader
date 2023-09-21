import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": "basic",
            "name": "Basic Membership",
            "price": 30,
            "features": [
                "Access to gym facilities",
                "Cardio and weight training",
                "Locker room access"
            ]
        },
        {
            "id": "premium",
            "name": "Premium Membership",
            "price": 50,
            "features": [
                "All Basic Membership features",
                "Group fitness classes",
                "Sauna and spa access",
                "Personal trainer consultation (1 session)"
            ]
        },
        {
            "id": "ultimate",
            "name": "Ultimate Membership",
            "price": 80,
            "features": [
                "All Premium Membership features",
                "Unlimited personal training sessions",
                "Nutritional counseling",
                "Access to VIP lounge"
            ]
        }
    ]

    return (
        <div>
            <h1 className="text-3xl font-medium text-center mt-5">Best Prices</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    priceOptions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;