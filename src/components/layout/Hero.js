import Image from "next/image";
import Right from "../icons/Right";
export default function Hero(){
    return(
        <section className="hero mt-3">
            {/* add padding from header */}
            <div className="py-9">
                <h1 className="text-4xl font-semibold my-5 leading-10">
                    <span className="text-primary">SIMS4 Delivery</span> - <br />Order the best food <br />for your sim!
                </h1>
                {/* margin top */}
                <p className="my-6 text-gray-500 font-thin text-1xl">
                    What are you waiting for? Order your sim's favorite food to make her/him 
                    day! From fruit, vegatebls to gourment dishes, order right now to get the goodies!
                </p>
                {/* make space btw elements */}
                <div className="flex gap-4 text-sm items-center">
                    <button className="bg-primary items-center uppercase flex gap-1 text-white rounded-full px-5 py-3">
                        Click to Order
                        <Right />
                    </button>
                    <button className="flex gap-1 py-2 text-gray-500 font-semibold">
                        Learn More
                        <Right />
                    </button>
                </div>
            </div>
            {/* only HTML element here */}
            
            {/* set width height and position for all image in div*/}
            <div className="relative"> 
                <Image src={'/images/TurkeyDinner.png'} layout={'fill'} objectFit={'contain'}
                alt={'turkeydinner'} />
            </div>

        </section>

    );
}