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
        { title: "Topup", link: "Lorem" },
        { title: "Transaction", link: "Lorem" },
        { title: "Leaderboard", link: "Lorem" },
        { title: "Calculator", link: "Lorem" },
        { title: "Login", link: "Lorem" },
        { title: "Signin", link: "Lorem" },
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
                className={`px-4 md:px-[80px] h-20 flex items-center justify-between border-b border-white/10 w-full fixed z-40 transition-all duration-300 py-0 ${scrolled
                    ? "shadow bg-[#1A1A1A90] backdrop-blur-xl"
                    : "shadow-none bg-[#1A1A1A]"
                    }`}
            >
                <div className="font-bold text-xl flex md:text-3xl items-center gap-4 justify-center text-white">
                    <div
                        className="cursor-pointer"
                    >
                        RAIMEISTORE
                    </div>
                </div>

                <div className="hidden xl:flex items-center gap-x-2">
                    {menu.map((item, itemIdx) => (
                        <div key={itemIdx}>
                            <div
                                className="text-white rounded-md px-2 py-[8px] hover:bg-[#333333] hover:text-white font-medium whitespace-nowrap cursor-pointer"
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
            {navOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                />
            )}
            <div
                ref={ref}
                style={{ right: navOpen ? "0" : "-300px" }}
                className="fixed z-50 top-0 h-full min-[300px]:w-[300px] bg-[#1F1F1F] drop-shadow transition-all"
            >
                <div className="flex items-center justify-end text-white p-4">
                    <FaXmark
                        className="cursor-pointer"
                        onClick={() => setNavOpen(false)}
                    />
                </div>
                <div className="p-4 h-96 text-left space-y-2">
                    {menu.map((item, itemIdx) => (
                        <div key={itemIdx}>
                            <div
                                className="px-6 py-2 text-white hover:bg-[#33333390] font-medium whitespace-nowrap cursor-pointer rounded-lg"
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
