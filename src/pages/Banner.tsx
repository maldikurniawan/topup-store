import { Carousel } from "@/components";
import { useState } from "react";

const Banner = () => {
    const [images] = useState([
        { url: "/images/banner-1.png" },
        { url: "/images/banner-2.png" },
        { url: "/images/banner-3.png" },
        { url: "/images/banner-1.png" },
        { url: "/images/banner-2.png" },
        { url: "/images/banner-3.png" },
    ]);

    return (
        <div className="bg-[#1A1A1A] text-white pt-[94px] pb-4 sm:pt-[130px] px-4 sm:px-[60px] sm:pb-8">
            <Carousel
                images={images}
                variant="simple"
                navigation={true}
                autoplay={true}
                loop={true}
                pagination={false}
            />
        </div>
    )
}

export default Banner