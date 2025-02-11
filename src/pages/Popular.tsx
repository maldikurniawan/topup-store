import productData from "@/constants/product.json";
import { useState } from "react";

const Popular = () => {
    const [visibleCount, setVisibleCount] = useState(12);

    // Filter only popular products
    const popularProducts = productData.data[0].products.filter(product => product.isPopular);

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 12);
    };

    console.log(popularProducts)

    return (
        <div className="min-h-screen bg-[#1F1F1F] text-white flex flex-col justify-center py-[80px] px-[60px]">
            <div className="text-center text-xl mb-4">Popular</div>
            <div className="grid grid-cols-3 gap-4">
                {popularProducts.slice(0, visibleCount).map((product) => (
                    <div className="flex bg-white/10 p-2 rounded-xl h-[86px] cursor-pointer hover:border-2 hover:border-[#654321]">
                        <div key={product.code} className="flex h-[70px] w-[70px] flex-col items-center justify-center">
                            <img src={product.thumbnail} alt={product.title} className="object-cover aspect-square rounded-xl" />
                        </div>
                        <div className="ml-2">
                            <div className="font-bold">
                                {product.title}
                            </div>
                            <div>
                                {product.publisher}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleCount < popularProducts.length && (
                <button
                    onClick={loadMore}
                    className="cursor-pointer border border-[#333333] w-fit mx-auto p-1 px-6 rounded-xl mt-4 hover:bg-[#333333]"
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default Popular;
