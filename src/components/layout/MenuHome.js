import SectionHeader from "./SectionHeader";
import Image from "next/image";
import MenuItem from "../menu/MenuItem";

export default function MenuHome(){
    return (
        <section className="">
            {/* <div className="absolute left-0 right-0 w-full top-13 overflow-x-hidden -z-10"> */}
            <div className="absolute left-0 right-0 w-full justify-start -z-10 top-[580px]">
                <div className="h-80 w-80 absolute -left-40">
                    <Image src={'/images/Superfood_Salad.png'} layout={'fill'} objectFit={'contain'}alt={'Superfood_Salad'} ></Image>
                </div>
                <div className="h-80 w-80 absolute -right-40">
                    <Image src={'/images/ButternutSquashSoup.png'} layout={'fill'} objectFit={'contain'}alt={'Superfood_Salad'} ></Image>
                </div>
            </div>
            <div className="text-center mt-[20px] mb-4">
                <SectionHeader 
                    subHeader={'Check Out'} 
                    mainHeader={'Menu'} 
                />
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 mt-[80px]">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />

            </div>
        </section>
    );
}