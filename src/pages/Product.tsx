import productData from "@/constants/product.json";

const Product = () => {
    const products = productData.data[0].products;

    return (
        <div className="min-h-screen flex flex-col justify-center p-20">
            <div className="text-center text-xl mb-4">Product List</div>
            <div className="grid grid-cols-6 gap-4">
                {products.map((product) => (
                    <div key={product.code}>
                        <img src={product.thumbnail} alt={product.title} className="object-cover aspect-[4/6] rounded-xl"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
