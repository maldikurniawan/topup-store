import { Link, useParams } from "react-router-dom";
import productData from "@/constants/product.json";
import { NotFound } from "@/components";

export default function DetailGame() {
    const { code } = useParams<{ code: string }>();

    const game = productData.data[0].products.find((item) => item.code === code);

    if (!game) {
        return <NotFound />;
    }

    return (
        <div className="min-h-screen bg-[#1A1A1A] text-white mx-auto p-4 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">{game.title}</h1>
            <p className="text-gray-400">{game.subtitle}</p>
            <img src={game.thumbnail} alt={game.title} className="w-[100px] h-[100px] rounded-lg mt-4" />
            <p className="mt-2 text-sm">Publisher: {game.publisher}</p>
            <p className="mt-1 text-sm">Kategori: {game.categoryName}</p>
            <Link to={"/"} className="uppercase cursor-pointer text-[#9B30FF]">Go Back</Link>
        </div>
    );
}
