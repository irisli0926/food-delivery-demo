import Image
 from "next/image";
export default function Hero(){
    return(
        <section className="grid grid-cols-2">
            <div>
                <h1 className="text-4xl font-semibold mt-5">
                    This is SIMS4 Delivery! Order the best food for your sim!
                </h1>
                {/* margin top */}
                <p className="mt-4 text-gray-400">
                    What are you waiting for? Order your sim's favorite food to make her/him 
                    day! From fruit, vegatebls to gourment dishes, order right now to get the goodies!
                </p>
                <div>
                    <button className="bg-primary text-white rounded-full">
                        Click to Order!
                    </button>
                    <button>Learn More</button>
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