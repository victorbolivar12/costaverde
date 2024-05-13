import React from 'react'
import { useEffect, useState } from "react";

const CommingSong = () => {
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("05/06/2024 23:59:59");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setPartyTime(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <header className="w-full flex justify-between">
                <img
                    src='logo.png'
                    alt="logo costa verde"
                    width={120}
                />
                <div className="w-24 flex justify-center items-center gap-2 xl:w-80 xl:gap-10">
                    <a
                        target="_blank"
                        href="https://www.google.com/maps/place/Costa+Verde+B.B.Q.+%26+Portuguese+Grill+House/@43.7271959,-79.4824978,17z/data=!3m1!4b1!4m6!3m5!1s0x882b319d2e3290eb:0x3ae0a36daf5ca1ba!8m2!3d43.7271959!4d-79.4824978!16s%2Fg%2F1hc1t8d5h?authuser=0&hl=es-419&entry=ttu"
                        className="flex gap-10 justify-center items-center"
                    >

                        <button className="border-2 w-28 font-rufina h-12 text-white xl:w-32 ">
                            Contact us
                        </button>
                    </a>
                </div>
            </header>

            <section className="w-100 h-full flex flex-col justify-center items-center">
                <p className="text-4xl text-white xl:text-8xl md:text-7xl font-rufina">COMING SOON</p>
                <span className="w-full border-dotted border-b-2 border-white pb-4 mb-5 sm:w-3/4 xl:w-3/4"></span>
                <div className="grid grid-cols-4 gap-5 xl:gap-20">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-white text-4xl xl:text-7xl">{days}</p>
                        <p className="text-white text-sm xl:text-base font-rufina">Days</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-white text-4xl xl:text-7xl">{hours}</p>
                        <p className="text-white text-sm xl:text-base font-rufina">Hours</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-white text-4xl xl:text-7xl">{minutes}</p>
                        <p className="text-white text-sm xl:text-base font-rufina">Minutes</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-white text-4xl xl:text-7xl">{seconds}</p>
                        <p className="text-white text-sm xl:text-base font-rufina">Seconds</p>
                    </div>
                </div>
            </section>

            <section className="w-100 h-full flex flex-col justify-center items-center">
                <p className="text-white text-base mb-2 font-rufina">Hours</p>
                <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-3 xl:flex-row xl:gap-3 ">
                    <p className="text-white text-xs mb-2">Tuesday - Friday:  11:00am - 8:00pm </p>
                    <p className="text-white text-xs mb-2">Sunday: 11:00am - 7:00pm</p>
                </div>
                <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Costa+Verde+B.B.Q.+%26+Portuguese+Grill+House/@43.7271959,-79.4824978,17z/data=!3m1!4b1!4m6!3m5!1s0x882b319d2e3290eb:0x3ae0a36daf5ca1ba!8m2!3d43.7271959!4d-79.4824978!16s%2Fg%2F1hc1t8d5h?authuser=0&hl=es-419&entry=ttu"
                    className="flex flex-col justify-center items-center"
                >
                    <p className="text-white text-xs mb-2 ">Address: 2764 Keele St, Toronto, ON M6M 2G2</p>
                    <p className="text-white text-xs mb-2 ">Tlf: (416) 653-5629</p>
                </a>
                <div className="flex gap-3 justify-center items-center">
                    <a href="https://www.facebook.com/CostaVerdeBBQ/?locale=es_LA" target="_blank">
                        <img
                            src='Icon_facebook.png'
                            alt="Icon facebook"
                            width={20}
                        />
                    </a>
                    <a href="https://www.instagram.com/costaverdebbq/?hl=es" target="_blank">
                        <img
                            src="Icon_instagram.png"
                            alt="Icon instagran"
                            width={20}
                        />
                    </a>
                    <a href="https://www.skipthedishes.com/costa-verde-bbq-chicken-inc?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=gpav2" target="_blank">
                        <img
                            src='uberEats.png'
                            alt="Icon uberEats"
                            width={28}
                        />
                    </a>
                    <a href="https://www.doordash.com/en-CA/store/costa-verde-bbq-chicken-toronto-915367/" target="_blank">
                        <img
                            src='delivery.png'
                            alt="Icon delivery"
                            width={28}
                        />
                    </a>
                    <a href="https://www.ubereats.com/ca/store/costa-verde-bbq-chicken/xJNQrdpKRNa1bZ8vfbCfxQ" target="_blank">
                        <img
                            src='3.png'
                            alt="Icon delivery"
                            width={28}
                        />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default CommingSong