import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import productData from "@/constants/product.json";
import topupData from "@/constants/topup.json";
import { Footer, Header, NotFound } from "@/components";
import BannerFoot from "./BannerFoot";
import { FaBoltLightning } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";

export default function DetailTopUp() {
    const { code } = useParams<{ code: string }>();
    const allProducts = productData.data.flatMap(item => item.products);
    const topup = allProducts.find((item) => item.code === code);

    const allTopup = topupData.flatMap(item => item);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!topup) {
        return <NotFound />;
    }

    return (
        <Fragment>
            <Header />
            <div className="min-h-screen bg-[#1F1F1F] text-white pt-[80px] pb-4 md:pt-[104px] sm:pb-8">
                <img
                    src="/images/coming-soon.jpg"
                    alt="Coming Soon"
                    className="w-full h-[150px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[324px] object-cover"
                />
                <div className="border-y border-[#333333] bg-animated px-[300px] py-8">
                    <div className="h-14 w-14 sm:h-[200px] sm:w-[200px] absolute top-[320px] left-12">
                        <img src={topup.thumbnail} alt={topup.title} className="object-cover aspect-square rounded-xl" />
                    </div>
                    <p className="text-white text-xl font-bold uppercase">{topup.title}</p>
                    <p className="my-1">{topup.publisher}</p>
                    <div className="flex flex-row gap-x-4">
                        <div className="text-white flex items-center gap-1 font-medium whitespace-nowrap">
                            <FaBoltLightning className="text-yellow-500"/>
                            <span>Proses Cepat</span>
                        </div>
                        <div className="text-white flex items-center gap-1 font-medium whitespace-nowrap">
                            <IoIosChatbubbles className="text-green-500"/>
                            <span>Layanan Chat 24/7</span>
                        </div>
                        <div className="text-white flex items-center gap-1 font-medium whitespace-nowrap">
                            <IoDiamond className="text-[#B9F2FF]"/>
                            <span>Diamonds</span>
                        </div>
                    </div>
                </div>
                <div>
                    {/* ALL TOPUP HERE */}
                </div>
            </div>
            <BannerFoot />
            <Footer />
        </Fragment>
    );
}
