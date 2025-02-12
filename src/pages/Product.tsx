import productData from "@/constants/product.json";
import { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

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

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: any) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth / 2;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="bg-[#1F1F1F] text-white flex flex-col justify-center pb-10 sm:pb-[80px] px-4 sm:px-[60px]">
            {/* Category Buttons */}
            <div className="relative w-full mb-4 px-2 lg:px-0">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 z-10 bg-[#9B30FF] p-1 rounded-md shadow-lg border border-[#9B30FF] top-1/2 transform -translate-y-1/2 hidden max-[900px]:flex"
                >
                    <BiChevronLeft className="text-white" size={40} />
                </button>

                {/* Scrollable Buttons Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-2 overflow-x-auto scroll-hidden whitespace-nowrap scrollbar-hide px-12 lg:px-0"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setVisibleCount(12); // ✅ Reset visible count when switching categories
                            }}
                            className={`px-4 py-2 rounded-md border border-[#333333] ${selectedCategory === category ? 'bg-[#9B30FF]' : 'bg-[#333333]'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 z-10 bg-[#9B30FF] p-1 rounded-md shadow-lg border border-[#9B30FF] top-1/2 transform -translate-y-1/2 hidden max-[900px]:flex"
                >
                    <BiChevronRight className="text-white" size={40} />
                </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
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
