import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useEffect, useRef, useState } from "react";
import { FaBalanceScaleLeft, FaBars, FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import { IoBagHandleOutline, IoPersonAddOutline } from "react-icons/io5";
import { MdOutlineLeaderboard } from "react-icons/md";
import { TbTransactionDollar } from "react-icons/tb";

const Header = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { width } = useWindowSize();
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const menu = [
        { title: "Topup", link: "Lorem", icon: <IoBagHandleOutline /> },
        { title: "Transaction", link: "Lorem", icon: <TbTransactionDollar /> },
        { title: "Leaderboard", link: "Lorem", icon: <MdOutlineLeaderboard /> },
        { title: "Calculator", link: "Lorem", icon: <FaBalanceScaleLeft /> },
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
                className={`px-4 md:px-[60px] h-20 md:h-[106px] justify-between flex border-b border-[#333333] items-center w-full fixed z-40 transition-all duration-300 py-0 ${scrolled
                    ? "shadow bg-[#1A1A1A90] backdrop-blur-xl"
                    : "shadow-none bg-[#1A1A1A]"
                    }`}
            >
                <div className="flex flex-col w-full">
                    <div className="flex items-center gap-4 text-white my-3.5">
                        <div className="cursor-pointer text-xl md:text-3xl font-bold text-[#9B30FF]">RAIMEISTORE</div>
                        <div className="relative flex-1 rounded-xl hidden md:block">
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
                    <div className="hidden md:flex items-center justify-between border-t border-[#333333] w-full px-4">
                        {/* Left Side - Menu */}
                        <div className="flex items-center gap-x-4">
                            {menu.map((item, itemIdx) => (
                                <div key={itemIdx} className="text-white hover:text-[#9B30FF] flex items-center gap-1 py-[8px] font-medium whitespace-nowrap text-sm lg:text-base cursor-pointer border-b-2 border-transparent hover:border-[#9B30FF] transition-all duration-200">
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>
                        {/* Right Side - Authentication */}
                        <div className="flex gap-x-4">
                            <div className="text-white hover:text-[#9B30FF] flex items-center gap-1 py-[8px] font-medium whitespace-nowrap cursor-pointer border-b-2 text-sm lg:text-base border-transparent hover:border-[#9B30FF] transition-all duration-200">
                                <IoIosLogIn />
                                <span>Masuk</span>
                            </div>
                            <div className="text-white hover:text-[#9B30FF] flex items-center gap-1 py-[8px] font-medium whitespace-nowrap cursor-pointer border-b-2 text-sm lg:text-base border-transparent hover:border-[#9B30FF] transition-all duration-200">
                                <IoPersonAddOutline />
                                <span>Daftar</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => setNavOpen(true)}
                    className="block md:hidden text-white py-5 cursor-pointer"
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
                    <FaXmark className="cursor-pointer w-8 h-8 border p-1 rounded-full" onClick={() => setNavOpen(false)} />
                </div>
                <div className="p-4 h-96 text-left space-y-2">
                    {menu.map((item, itemIdx) => (
                        <div key={itemIdx}>
                            <div className="px-6 py-2 flex items-center border justify-between text-white hover:bg-[#333333] font-medium whitespace-nowrap cursor-pointer rounded-lg" onClick={() => setNavOpen(false)}>
                                <span>{item.title}</span>
                                {item.icon}
                            </div>
                        </div>
                    ))}
                    <div className="px-6 py-2 mt-10 flex items-center border justify-between text-white hover:bg-[#333333] font-medium whitespace-nowrap cursor-pointer rounded-lg" onClick={() => setNavOpen(false)}>
                        <span>Masuk</span>
                        <IoIosLogIn />
                    </div>
                    <div className="px-6 py-2 flex items-center border justify-between text-white hover:bg-[#333333] font-medium whitespace-nowrap cursor-pointer rounded-lg" onClick={() => setNavOpen(false)}>
                        <span>Daftar</span>
                        <IoPersonAddOutline />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
