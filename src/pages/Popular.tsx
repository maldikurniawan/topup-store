import productData from "@/constants/product.json";
import { useState } from "react";

const Popular = () => {
    const [visibleCount, setVisibleCount] = useState(12);

    // Filter only popular products
    const popularProducts = productData.data[0].products.filter(product => product.isPopular);

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 12);
    };

    return (
        <div className="min-h-screen bg-[#1F1F1F] text-white flex flex-col justify-center py-[80px] px-4 sm:px-[60px]">
            <div className="text-start text-xl uppercase">🔥 Popular Now!</div>
            <div className="text-start text-sm mb-4 ml-7">Here are some of the most popular products right now.</div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {popularProducts.slice(0, visibleCount).map((product) => (
                    <div className="flex bg-animated border-2 border-[#1A1A1A] p-2 rounded-xl h-auto sm:h-[86px] cursor-pointer hover:border-2 hover:border-[#333333]">
                        <div key={product.code} className="flex h-[70px] w-[70px] flex-col items-center justify-center">
                            <img src={product.thumbnail} alt={product.title} className="object-cover aspect-square rounded-xl" />
                        </div>
                        <div className="ml-2 sm:ml-4 my-auto">
                            <div className="text-xs sm:text-base font-bold line-clamp-1">
                                {product.title}
                            </div>
                            <div className="text-xs sm:text-base line-clamp-1">
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
