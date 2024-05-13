import React, { useState, useEffect } from 'react'

interface GalleryProps {
    img: string;
    name: string
}

interface GallerySkeletonProps {
  currentIndex?: number;
  id:number
  galery:GalleryProps[];
}

const GallerySkeleton: React.FC<GallerySkeletonProps> = (props) => {
  return (
    <div className={`grid w-full h-screen sm:h-[1100px] gap-2 sm:gap-4 grid-rows-3 grid-cols-3 ${props.currentIndex != props.id ? "hidden": ""} animate-fade-right`}>
      <div className='col-span-2 relative'>
        <img src={props.galery[0].img} alt="" loading='lazy' className='w-full h-full object-cover rounded-lg shadow-lg ' />
        <div className='absolute w-full h-full bg-black rounded-lg opacity-40 bottom-0 left-0 p-10'></div>
        <p className=' absolute bottom-0 left-0 h-16 w-full pl-4 sm:pl-10 font-rufina text-white text-xs sm:text-xl'>{props.galery[0].name}</p>
      </div>
      <div className='relative'>
        <img src={props.galery[1].img} alt="" loading='lazy' className='w-full h-full object-cover rounded-lg shadow-lg' />
        <div className='absolute w-full h-full bg-black rounded-lg opacity-40 bottom-0 left-0 p-10'></div>
        <p className=' absolute bottom-0 left-0 h-16 w-full pl-4 sm:pl-10 font-rufina text-white text-xs sm:text-xl'>{props.galery[1].name}</p>
      </div>
      <div className=' relative'>
        <img src={props.galery[2].img} alt="" loading='lazy' className='w-full h-full object-cover rounded-lg shadow-lg' />
        <div className='absolute w-full h-full bg-black rounded-lg opacity-40 bottom-0 left-0 p-10'></div>
        <p className=' absolute bottom-0 left-0 h-16 w-full pl-4 sm:pl-10 font-rufina text-white text-xs sm:text-xl'>{props.galery[2].name}</p>
      </div>
      <div className='col-span-2 relative'>
        <img src={props.galery[3].img} alt="" loading='lazy' className='w-full h-full object-cover rounded-lg shadow-lg' />
        <div className='absolute w-full h-full bg-black rounded-lg opacity-40 bottom-0 left-0 p-10'></div>
        <p className=' absolute bottom-0 left-0 h-16 w-full pl-4 sm:pl-10 font-rufina text-white text-xs sm:text-xl'>{props.galery[3].name}</p>
      </div>
      <div className='col-span-2 relative'>
        <img src={props.galery[4].img} alt="" loading='lazy' className='w-full h-full object-cover rounded-lg shadow-lg' />
        <div className='absolute w-full h-full bg-black rounded-lg opacity-40 bottom-0 left-0 p-10'></div>
        <p className=' absolute bottom-0 left-0 h-16 w-full pl-4 sm:pl-10 font-rufina text-white text-xs sm:text-xl'>{props.galery[4].name}</p>
      </div>
      <div className=' relative'>
        <img src={props.galery[5].img} loading='lazy' alt="" className='w-full h-full object-cover rounded-lg shadow-lg' />
        <div className='absolute w-full h-full bg-black rounded-lg opacity-40 bottom-0 left-0 p-10'></div>
        <p className=' absolute bottom-0 left-0 h-16 w-full pl-4 sm:pl-10 font-rufina text-white text-xs sm:text-xl'>{props.galery[5].name}</p>
      </div>
    </div>
  )
}

const GaleryAbout = () => {


  interface containerImgState{
    id:number;
    galery: GalleryProps[];
  }

  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const nameButton = [
    { id: 1, name: "Appetizers" },
    { id: 2, name: "Meats" },
    { id: 3, name: "Fish" },
    { id: 4, name: "Drinks" },
    { id: 5, name: "Sweets" },
  ]


  const containerImg = [
    {
      id: 5, 
      galery:[
        {img: "galery5-1.png", name:"Coconut Cake"},
        {img: "galery5-2.png", name:"Bolo de Coco"},
        {img: "galery5-3.png", name:"Pastels de Nata"},
        {img: "galery5-4.png", name:"Pudim"},
        {img: "galery5-5.png", name:"Passion Fruit Mousse"},
        {img: "galery5-6.png", name:"Churros"},
      ]
    },
    {
      id: 1, 
      galery:[
        {img: "Feature Image4.png", name:"Chicken Wings"},
        {img: "description.png", name:"Chicken Noddle Soup"},
        {img: "imgmenu1.png", name:"Bolinhos de Bacalhau"},
        {img: "Feature Image3.png", name:"Camarao á Casa"},
        {img: "Feature Image2.png", name:"Pork Rinds"},
        {img: "Feature Image.png", name:"Pastels Brasilieros"},
      ]
    },
    {
      id: 2, 
      galery:[
        {img: "galery2-1.png", name:"Half Grilled Chicken Meal"},
        {img: "galery2-2.png", name:"Half Sweet & BBQ Rib Meal"},
        {img: "galery2-3.png", name:"Rotisserie Chicken"},
        {img: "galery2-4.png", name:"Picanha na Brasa"},
        {img: "galery2-5.png", name:"Bife á Casa"},
        {img: "galery2-6.png", name:"Chicken Parm"},
      ]
    },
    {
      id: 3, 
      galery:[
        {img: "galery3-1.png", name:"Fillet of Soul Meal"},
        {img: "galery3-2.png", name:"Mix Seafood"},
        {img: "imgmenu1.png", name:"Bolinhos de Bacalhau"},
        {img: "galery3-3.png", name:"Salmon Meal"},
        {img: "galery3-4.png", name:"Bacalhau á Casa"},
        {img: "galery3-5.png", name:"Bacalhau á Natas"},
      ]
    },
    {
      id: 4, 
      galery:[
        {img: "galery4-1.png", name:"Hause Beers"},
        {img: "drink2.png", name:"Cheers"},
        {img: "galery4-2.png", name:"Wine"},
        {img: "galery4-3.png", name:"Imported Soft Drink"},
        {img: "galery4-4.png", name:"Domestic Beers"},
        {img: "galery4-5.png", name:"House Wines"},
      ]
    },
  ]

  useEffect(() => {
    setCurrentIndex(1)
  }, []);

  return (
    <section className='p-6 sm:px-16 xl:px-56'>
      <div className='flex gap-4 sm:gap-10 justify-center mb-7'>
        {nameButton.map((button, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(button.id)}
            className={`font-base font-lato ${currentIndex === button.id ? "pb-1 border-dotted border-b-2 border-black" : ""}`}
          >
            {button.name}
          </button>
        ))}
      </div>
      {
        containerImg.map((content:containerImgState, index:number)=>(
          <GallerySkeleton
            key={index}
            id={content.id}
            currentIndex={currentIndex}
            galery={content.galery}
          />
        ))
      }
    </section>
  )
}

export default GaleryAbout