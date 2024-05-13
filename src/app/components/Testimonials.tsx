import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface CardProps {
    id: number;
    img: string;
    description: string;
    name: string;
    reviews: number;
    currentIndex: number
    prevSlide: () => void;
    nextSlide: () => void;
}

const AvatarCard: React.FC<CardProps> = ({ id, currentIndex, img, name, description, reviews, prevSlide, nextSlide }) => {
    return (
        <div className={`flex flex-col gap-5 ${id === currentIndex ? 'block animate-fade-right' : 'hidden'}`}>
            <p className='font-rufina text-xl'>{description}</p>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 justify-center items-center'>
                    <img src={img} loading='lazy' alt={`avatar-${id}`} className='w-16 h-16 object-cover object-center sm:w-20 sm:h-20' />
                    <div className='flex flex-col gap-1'>
                        <h3 className='font-rufina'>{name}</h3>
                        <span className='font-lato'>{`${reviews} Reviews`}</span>
                    </div>
                </div>
                <div className='flex gap-3 justify-center items-center'>
                    <button onClick={prevSlide}>
                        <span className="material-symbols-outlined text-[#233000] w-10 h-5">arrow_back</span>
                    </button>
                    <p className='font-rufina text-xl'>
                        {`${id}/3`}
                    </p>
                    <button onClick={nextSlide}>
                        <span className="material-symbols-outlined text-[#233000] w-10 h-5">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {

    const slides = [
        { id: 1, img: "avatar3.png", description: "I made a huge order to treat my team and everyone was so happy with the food! Fairly priced and huge portion. Recommend the chicken, coleslaw, cod fish sticks and tarts - all very delicious.", name: "Lydia Peng", reviews: 30 },
        { id: 2, img: "avatar2.png", description: "Delicious and tasty food at affordable price but only cash!!!… you have available a portable ATM for your convinience. Good for take out! My favourite the roasted chicken  +rice +potatoes +greek salad! And enjoy!!! Can not leave without trying the tres leches is just heaven!", name: "gabriela medina", reviews: 30 },
        { id: 3, img: "avatar1.png", description: "Amazing catering service! I had a small event and All were amazing for a great price, even had guest asking where I got the food from it was very tasty 👍🏼", name: "Denisse Ramirez", reviews: 30 },
    ];

    const [currentIndex, setCurrentIndex] = useState(1);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const prevSlide = () => {
        const newIndex = currentIndex === 1 ? slides.length : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = currentIndex === slides.length ? 1 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return (
        <section ref={ref} className={`p-6 pb-14 bg-[#ECEBEC] sm:p-16 xl:px-56 xl:h-96 ${inView ? 'animate-fade-right' : ''}`}>
            <h2 className='font-rufina font-bold text-3xl text-center mb-10'>Our Testimonials</h2>
            <div>
                {slides.map((testimonial, index) => (
                    <AvatarCard
                        key={testimonial.id}
                        id={testimonial.id}
                        currentIndex={currentIndex}
                        img={testimonial.img}
                        description={testimonial.description}
                        name={testimonial.name}
                        reviews={testimonial.reviews}
                        prevSlide={prevSlide}
                        nextSlide={nextSlide}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
