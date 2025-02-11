import productData from "@/constants/product.json";
import { useState } from "react";

const Product = () => {
    const [visibleCount, setVisibleCount] = useState(12);
    const products = productData.data[0].products;
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 12);
    };

    return (
        <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col justify-center py-[80px] px-[60px]">
            <div className="text-center text-xl mb-4">Product</div>
            <div className="grid grid-cols-6 gap-4">
                {products.slice(0, visibleCount).map((product) => (
                    <div key={product.code}>
                        <img src={product.thumbnail} alt={product.title} className="object-cover aspect-[4/6] rounded-xl" />
                    </div>
                ))}
            </div>
            {visibleCount < products.length && (
                <button onClick={loadMore} className="cursor-pointer border border-[#333333] w-fit mx-auto p-1 px-6 rounded-xl mt-4 hover:bg-[#333333]">
                    Load More
                </button>
            )}
        </div>
    );
};

export default Product;
