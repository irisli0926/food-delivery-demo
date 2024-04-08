export default function MenuItem() {
    return (
        // add hover effect when hover, bg color white
        <div className="p-4 rounded-lg bg-gray-200 object-center transition-all text-center group hover:bg-white hover:shadow-md hover:shadow-primary"> 
           <div className="max-h-15">
            {/* center the image using block */}
            <img src="/images/Cupcake-Strawberry_Fizzy.png" className="h-auto w-auto block mx-auto" alt="Cupcake-Strawberry_Fizzy"></img>
           </div>
            {/* <Image src={'/images/Cupcake-Strawberry_Fizzy.png'} alt="Cupcake-Strawberry_Fizzy"></Image> */}
            <h4 className=" font-semibold text-xl my-2">Fizzy Strawberry Cupcake</h4>
            <p className="text-primary text-sm font-light">
                Heavenly strawberry cupcake. Pink like dream, sweet like candy.
            </p>
            <button className="bg-primary mt-4 text-white rounded-full px-8 py-2">
                15$ Add to Cart
            </button>         
        
        </div>

    );
}