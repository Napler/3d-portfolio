import React from 'react';
import { counterItems } from '../constants/index.jsx';
import CountUp from 'react-countup';
const AnimatedCounter = () => {
    return (
        <div id="counter" className="padding-xl-lg xl:mt-0 mt-32">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {counterItems.map((item) => (
                    <div key={item.label} className="bg-zinc-900 rounded-lg p-10 flex flex-col items-center justify-center mb-4">
                        <div className="counter-number text-white text-5xl font-bold mb-2">

                            <CountUp suffix={item.suffix} end={item.value}/>
                        </div>
                        <div className="text-white text-lg font-semibold">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounter;