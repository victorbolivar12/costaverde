import React from 'react';

interface DishesProps {
    price: string;
    title: string;
    description: string;
}

const Menu: React.FC<DishesProps> = ({ price, title, description }) => {
    return (
        <div className='flex flex-col animate-fade-right'>
            <span className="w-full border-dotted border-b-2 mb-4 border-black pb-4"></span>
            <div className='flex justify-between'>
                <h2 className='text-xl mb-3 font-rufina font-bold text-center sm:text-left'>{title}</h2>
                <p className='text-xl font-rufina font-bold flex justify-end'>{price}</p>
            </div>
            <p className='text-base font-lato text-center sm:text-left'>{description}</p>
        </div>
    );
};

const Dishes = () => {

    const ListDishes = [
        { price: '18$', title: "Half Chicken Meal", description: "Our famous grilled chicken served with your choice of sauce and 2 complementary sides" },
        { price: '22$', title: "Half Rib Meal", description: "BBQ back ribs cooked with our house dry rub and glazed with our house made sweet & smoke BBQ sauce." },
        { price: '19$', title: "Cod Fish Meal", description: "Pan-seared Cod fish crowned with crispy palla-palla fries, sautéed onions, and peppers for a delectable twist." },
        { price: '26$', title: "Picanha na Brasa", description: "Picanha steaks  of AAA sirloin Tip, served with white rice, black beans and farofa" },
    ]

    return (
        <section id="menu" className='p-6 pb-14 bg-[#ECEBEC] sm:px-16 xl:px-56'>
            <h2 className='text-3xl font-rufina font-bold mb-2 mt-10 text-center sm:text-left animate-fade-right'>Most Popular Dishes</h2>
            <p className='text-base font-lato mb-8 text-center sm:text-left animate-fade-right'>Indulge in our top picks, savoring the most beloved delights from the menu.</p>
            <div className='grid gap-5 sm:grid-cols-2 sm:gap-14'>
                {ListDishes.map((dishe: DishesProps, index: number) => (
                    <Menu
                        key={index}
                        price={dishe.price}
                        title={dishe.title}
                        description={dishe.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Dishes;
