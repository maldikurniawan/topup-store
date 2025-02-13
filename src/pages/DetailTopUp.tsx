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

    const allPrice = topupData.flatMap(item => item.variants);
    const specialPrice = allPrice.filter(variant => variant.sectionName === "Special Items");
    const instantPrice = allPrice.filter(variant => variant.sectionName === "Top Up Instant");

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
                <div className="border-y border-[#333333] flex gap-4 bg-animated px-4 md:px-[250px] lg:px-[300px] py-8">
                    <div className="h-24 w-24 sm:h-[160px] sm:w-[160px] xl:h-[200px] xl:w-[200px] md:absolute sm:top-[230px] md:top-[280px] xl:top-[320px] left-12.5">
                        <img src={topup.thumbnail} alt={topup.title} className="object-cover aspect-square rounded-xl" />
                    </div>
                    <div>
                        <p className="text-white text-xl font-bold uppercase whitespace-nowrap">{topup.title}</p>
                        <p className="my-1">{topup.publisher}</p>
                        <div className="flex md:flex-row flex-col gap-x-4">
                            <div className="text-white flex items-center gap-1 font-medium whitespace-nowrap">
                                <FaBoltLightning className="text-yellow-500" />
                                <span>Proses Cepat</span>
                            </div>
                            <div className="text-white flex items-center gap-1 font-medium whitespace-nowrap">
                                <IoIosChatbubbles className="text-green-500" />
                                <span>Layanan Chat 24/7</span>
                            </div>
                            <div className="text-white flex items-center gap-1 font-medium whitespace-nowrap">
                                <IoDiamond className="text-[#B9F2FF]" />
                                <span>Diamonds</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price Section */}
                <div className="mx-auto px-4 sm:px-[50px] py-8">
                    <div className="space-y-8 bg-[#404040] p-4 rounded-xl">
                        {/* Special Items */}
                        <div>
                            <h2 className="text-sm sm:text-lg font-semibold mb-2">Special Items</h2>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                {specialPrice.map((item, index) => (
                                    <div key={index} className="bg-[#333333] p-2 sm:p-4 rounded-xl flex cursor-pointer border-2 border-[#333333] hover:border-[#9B30FF] items-center justify-between">
                                        <div>
                                            <p className="text-sm">{item.name}</p>
                                            <p className="text-gray-400 text-xs">Rp.   {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price).replace("Rp", "").trim()}</p>
                                        </div>
                                        <div>
                                            <img src={item.image} alt={item.name} className="w-8 h-8 sm:w-10 sm:h-10" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Up Instant */}
                        <div>
                            <h2 className="text-sm sm:text-lg font-semibold mb-2">Special Items</h2>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                {instantPrice.map((item, index) => (
                                    <div key={index} className="bg-[#333333] p-2 sm:p-4 rounded-xl flex cursor-pointer border-2 border-[#333333] hover:border-[#9B30FF] items-center justify-between">
                                        <div>
                                            <p className="text-sm">{item.name}</p>
                                            <p className="text-gray-400 text-xs">Rp.   {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price).replace("Rp", "").trim()}</p>
                                        </div>
                                        <div>
                                            <img src={item.image} alt={item.name} className="w-8 h-8 sm:w-10 sm:h-10" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BannerFoot />
            <Footer />
        </Fragment>
    );
}
