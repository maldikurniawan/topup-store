import productData from "@/constants/product.json";
import { useState } from "react";

const categories = [
    "Top Up Games",
    "Joki MLBB",
    "Joki HOK",
    "Pulsa & Data",
    "Voucher",
    "Tagihan"
];

const Product = () => {
    const [visibleCount, setVisibleCount] = useState(12);
    const [selectedCategory, setSelectedCategory] = useState("Top Up Games");

    // Get all products
    const allProducts = productData.data.flatMap(item => item.products);
    const filteredProducts = allProducts.filter(product => product.categoryName === selectedCategory);

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 12);
    };

    return (
        <div className="bg-[#1F1F1F] text-white flex flex-col justify-center pb-10 sm:pb-[80px] px-4 sm:px-[60px]">
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2 mb-4 justify-start">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setSelectedCategory(category);
                            setVisibleCount(12); // ✅ Reset visible count when switching categories
                        }}
                        className={`px-4 py-2 rounded-md border border-[#333333] hover:bg-[#333333] ${selectedCategory === category ? 'bg-[#333333]' : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {filteredProducts.slice(0, visibleCount).map((product) => (
                    <div key={product.code}>
                        <img src={product.thumbnail} alt={product.title} className="object-cover aspect-[4/6] rounded-xl" />
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredProducts.length && (
                <button onClick={loadMore} className="cursor-pointer border border-[#333333] w-fit mx-auto p-1 px-6 rounded-md mt-4 hover:bg-[#333333]">
                    Load More
                </button>
            )}
        </div>
    );
};

export default Product;
