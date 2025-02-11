import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { width } = useWindowSize();
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const menu = [
        { title: "Beranda", link: "Hero" },
        { title: "About", link: "About" },
        { title: "Service", link: "Service" },
        { title: "Pricing", link: "Pricing" },
        { title: "FAQ", link: "FAQ" },
        { title: "Contact", link: "Contact" },
    ];

    useOnClickOutside(ref as any, () => setNavOpen(false));

    useEffect(() => {
        if (width > 1024) {
            setNavOpen(false);
        }
    }, [width]);

    useEffect(() => {
        const handleScroll = () => {
            // Toggle `scrolled` state based on scroll position
            setScrolled(window.scrollY >= 300);
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`px-4 md:px-[80px] h-20 flex items-center justify-between w-full fixed z-40 transition-all duration-300 py-0 ${scrolled
                    ? "shadow bg-[#1A1A1A90] backdrop-blur-xl"
                    : "shadow-none bg-[#1A1A1A]"
                    }`}
            >
                <div className="font-bold text-xl flex md:text-3xl items-center gap-4 justify-center text-white">
                    <div
                        className="cursor-pointer"
                    >
                        TOPUP STORE
                    </div>
                </div>

                <div className="hidden xl:flex items-center gap-x-2">
                    {menu.map((item, itemIdx) => (
                        <div key={itemIdx}>
                            <div
                                className="text-white rounded-md px-2 py-[8px] hover:bg-green-100 hover:text-white font-medium whitespace-nowrap cursor-pointer"
                            >
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => setNavOpen(true)}
                    className="block xl:hidden text-white p-5 cursor-pointer"
                >
                    <FaBars size={22} />
                </button>
            </header>

            {/* Mobile Navigation */}
            <div
                ref={ref}
                style={{ right: navOpen ? "0" : "-300px" }}
                className="fixed z-50 top-0 h-full min-[300px]:w-[300px] bg-gray-600/50 backdrop-blur drop-shadow transition-all"
            >
                <div className="flex items-center justify-end text-white p-4">
                    <FaXmark
                        className="cursor-pointer"
                        onClick={() => setNavOpen(false)}
                    />
                </div>
                <div className="p-4 h-96 text-left space-y-8">
                    {menu.map((item, itemIdx) => (
                        <div key={itemIdx}>
                            <div
                                className="px-6 py-2 text-white hover:bg-[#1A1A1A]/20 font-medium whitespace-nowrap cursor-pointer rounded-lg"
                                onClick={() => setNavOpen(false)} // Close menu after click
                            >
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
