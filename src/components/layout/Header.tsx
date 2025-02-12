import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { width } = useWindowSize();
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const menu = [
        { title: "Topup", link: "Lorem" },
        { title: "Transaction", link: "Lorem" },
        { title: "Leaderboard", link: "Lorem" },
        { title: "Calculator", link: "Lorem" },
    ];

    useOnClickOutside(ref as any, () => setNavOpen(false));

    useEffect(() => {
        if (width > 1024) {
            setNavOpen(false);
        }
    }, [width]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY >= 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`px-4 md:px-[60px] h-[106px] justify-between flex border-b border-[#333333] items-center w-full fixed z-40 transition-all duration-300 py-0 ${scrolled
                    ? "shadow bg-[#1A1A1A90] backdrop-blur-xl"
                    : "shadow-none bg-[#1A1A1A]"
                    }`}
            >
                <div className="flex flex-col w-full">
                    <div className="flex items-center gap-4 text-white my-3.5">
                        <div className="cursor-pointer text-xl md:text-3xl font-bold text-[#9B30FF]">RAIMEISTORE</div>
                        <div className="relative flex-1 rounded-xl">
                            <form className="w-full">
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <FaSearch />
                                    </div>
                                    <input type="text" id="email-address-icon" className="bg-[#333333] text-white text-sm rounded-lg focus:ring-[#9B30FF] focus:border-[#9B30FF] block w-full ps-10 p-1.5" placeholder="Cari Game atau Voucher" />
                                </div>
                            </form>

                        </div>
                    </div>

                    <div className="hidden xl:flex items-center gap-x-2 border-t border-[#333333]">
                        {menu.map((item, itemIdx) => (
                            <div key={itemIdx}>
                                <div className="text-white rounded-md py-[8px] hover:underline font-medium whitespace-nowrap cursor-pointer">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={() => setNavOpen(true)}
                    className="block xl:hidden text-white p-5 cursor-pointer"
                >
                    <FaBars size={22} />
                </button>
            </header>

            {/* Mobile Navigation */}
            {navOpen && <div className="fixed inset-0 bg-black/50 z-40" />}
            <div
                ref={ref}
                style={{ right: navOpen ? "0" : "-300px" }}
                className="fixed z-50 top-0 h-full min-[300px]:w-[300px] bg-[#1F1F1F] drop-shadow transition-all"
            >
                <div className="flex items-center justify-end text-white p-4">
                    <FaXmark className="cursor-pointer" onClick={() => setNavOpen(false)} />
                </div>
                <div className="p-4 h-96 text-left space-y-2">
                    {menu.map((item, itemIdx) => (
                        <div key={itemIdx}>
                            <div className="px-6 py-2 text-white hover:bg-[#33333390] font-medium whitespace-nowrap cursor-pointer rounded-lg" onClick={() => setNavOpen(false)}>
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;
