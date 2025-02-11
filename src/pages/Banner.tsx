import { Carousel } from "@/components";
import { useState } from "react";

const Banner = () => {
    const [images] = useState([
        { url: "/images/monster-1.png" },
        { url: "/images/monster-2.png" },
        { url: "/images/monster-3.png" },
        { url: "/images/monster-4.png" },
    ]);

    return (
        <div className="min-h-screen bg-[#1A1A1A] text-white pt-[130px] px-[60px] pb-8">
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