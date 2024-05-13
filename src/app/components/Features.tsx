import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface CardProps {
    img: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ img, title, description }) => {
    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.5, 
    });

    return (
        <div className={`flex flex-col justify-center items-center animate-fade-right ${inView ? 'animate-fade-right' : ''}`} ref={ref}>
            <div className='w-1/3 sm:w-28 rounded-full bg-[#ECEBEC] p-7'>
                <img loading='lazy' src={img} alt={title} className='w-56 sm:w-full object-cover object-center' />
            </div>
            <h2 className="text-xl mt-4 font-rufina font-bold xl:text-base">{title}</h2>
            <p className="mt-2 text-base font-lato text-center xl:text-xs">{description}</p>
        </div>
    );
};

const Features = () => {
    const features = [
        { img: "Icon_fish.png", title: "Expert Handling", description: "We handle fish with precision, showcasing its natural beauty and taste of the sea" },
        { img: "Icon_carrot.png", title: "Freshness and Seasonality", description: "We celebrate the natural flavors and textures of seasonal vegetables" },
        { img: "feature3.png", title: "Diverse Offerings", description: "Ethical Sourcing: We carefully select suppliers who prioritize ethical farming practices." },
    ];

    return (
        <div className='p-6 py-10 flex flex-col gap-14 justify-center items-center sm:flex-row sm:px-16 xl:px-56'>
            {features.map((feature: CardProps, index: number) => (
                <Card
                    key={index}
                    img={feature.img}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>
    );
};

export default Features;
