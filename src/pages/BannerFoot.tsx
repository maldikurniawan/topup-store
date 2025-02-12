const BannerFoot = () => {
    return (
        <div className="bg-[#1F1F1F] relative">
            <img
                src="/images/banner-foot.png"
                alt="Banner Foot"
                className="object-cover w-full h-[70px] sm:h-[300px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-xl sm:text-3xl font-bold tracking-widest">RAIMESTORE</h1>
            </div>
        </div>
    )
}

export default BannerFoot;
