import React from 'react'


interface ContentState {
    price: string;
    title: string;
    description: string;
}

interface CardState {
    id: number;
    title?: string;
    description?: string;
    img: string;
    dishes?: ContentState[];
}

const Menu: React.FC<CardState> = (props) => {

    return (
        <div className='flex flex-col animate-fade-right'>
            <h2 className='text-2xl mb-3 font-rufina font-bold text-center sm:text-4xl sm:mb-6 xl:text-2xl'>{props.title}</h2>
            <p className='font-lato text-base text-center sm:mb-10'>{props.description}</p>
            <div className={`flex flex-col md:flex-row md:gap-10 ${props.id === 2 ? "md:flex-row-reverse" : ""}`}>
                <img loading='lazy' src={props.img} alt={props.img} className='w-full object-cover object-center rounded-xl shadow-xl h-40 my-7 sm:h-[550px]' />
                <div>
                    <div className='flex flex-col gap-4'>
                        {props.dishes?.map((dishe: ContentState, index: number) => (
                            <div className='flex flex-col animate-fade-right' key={index}>
                                <span className="w-full border-dotted border-b-2 mb-4 border-black pb-4"></span>
                                <div className='flex justify-between'>
                                    <h2 className='text-xl mb-3 font-rufina font-bold text-center sm:text-left'>{dishe.title}</h2>
                                    <p className='text-xl font-rufina font-bold flex justify-end'>{dishe.price}</p>
                                </div>
                                <p className='text-base font-lato text-center sm:text-left'>{dishe.description}</p>
                            </div>
                        ))}
                    </div>
                    {props.id != 3 && (
                        <div className={`flex w-full justify-center mt-7 ${props.id === 2 ? "sm:justify-start" : "sm:justify-end"}`}>
                            <button className='border-2 w-28 h-12 font-rufina xl:w-32'>
                                See more
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

const MainMenu = () => {


    const ListDishes = [
        { price: '$7.00', title: "Soup of the Day", description: "Freshly made Soup of the Day, brimming with wholesome ingredients and comforting flavors." },
        { price: '$3.50', title: "Bolinhos de Bacalhau", description: " Three Crispy Codfish Fritters. A delicious Portuguese delicacy." },
        { price: '$17', title: "Camarao á Casa", description: "Garlic and Red Pepper Shrimp  in a flavorful wine reduction." },
    ]

    const ListDishes2 = [
        { price: '$15.50', title: "Half Chicken Meal", description: "Tender and juicy Half Grilled Chicken, served with two sides of your choice." },
        { price: '$28', title: "Espetada da Picanha", description: "One pound of cubed AAA Sirloin Tip Picanha Skewers, served with fresh garlic bread." },
        { price: '$17.50', title: "Grilled Bifanas", description: "Three tender pork cutlets marinated in traditional wine marinade, served with sautéed onions and peppers." },
    ]

    const ListDishes3 = [
        { price: '$7.50', title: "Tres Leches Cake", description: "A decadent delight, soaked in three milks, filled with caramel, and topped with coconut." },
        { price: '$5.00', title: "Rice Pudding", description: "A comforting blend of creamy rice, cinnamon, and vanilla for a satisfying dessert experience." },
        { price: '$2.50', title: "Custard Tarts Natas", description: "Classic Rice Pudding, Creamy and comforting, a timeless favorite." },
    ]

    const sections: CardState[] = [
        {
            id: 1,
            title: "Appetizer",
            description: "Begin your culinary journey with our enticing appetizers, crafted to tantalize your taste buds and set the stage for an unforgettable dining experience.",
            img: "imgmenu1.png",
            dishes: ListDishes
        },
        {
            id: 2,
            title: "Mains",
            description: "Dive into our main courses, where every dish is a masterpiece of flavor and tradition. From succulent meats to vibrant vegetarian options, there's something for every palate to savor.",
            img: "imgmenu2.png",
            dishes: ListDishes2
        },
        {
            id: 3,
            title: "Desserts",
            description: "Indulge your sweet tooth with our irresistible desserts. From classic favorites to innovative treats, each bite is a delightful conclusion to your dining experience.",
            img: "imgmenu3.png",
            dishes: ListDishes3
        }
    ]

    return (
        <section className='relative'>
            <div className='flex flex-col gap-7 mt-10'>
                {sections.map((section: CardState, index: number) => (
                    <Menu
                        key={index}
                        id={section.id}
                        title={section.title}
                        img={section.img}
                        description={section.description}
                        dishes={section.dishes}
                    />
                ))}
            </div>
        </section>
    )
}

export default MainMenu