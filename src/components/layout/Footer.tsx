import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

type FooterMenuItem = {
    head: string;
    title: string;
    link: string;
};

type SosialFooter = {
    instagram: string;
    twitter: string;
    youtube: string;
};

const Footer: React.FC = () => {
    const currentYear: number = new Date().getFullYear();

    const footerMenu: FooterMenuItem[] = [
        { head: "Peta Situs", title: "Beranda", link: "Lorem" },
        { head: "Peta Situs", title: "Cek Transaksi", link: "Lorem" },
        { head: "Peta Situs", title: "Hubungi Kami", link: "Lorem" },
        { head: "Peta Situs", title: "Ulasan", link: "Lorem" },
        { head: "Dukungan", title: "Whatsapp", link: "Lorem" },
        { head: "Dukungan", title: "Instagram", link: "Lorem" },
        { head: "Dukungan", title: "Email", link: "Lorem" },
        { head: "Legalitas", title: "Kebijakan Pribadi", link: "Lorem" },
        { head: "Legalitas", title: "Syarat & Ketentuan", link: "Lorem" },
    ];

    const sosialFooter: SosialFooter = {
        instagram: "/",
        twitter: "/",
        youtube: "/",
    };

    // Group menu items by head
    const groupedMenu: Record<string, FooterMenuItem[]> = footerMenu.reduce((acc, item) => {
        if (!acc[item.head]) acc[item.head] = [];
        acc[item.head].push(item);
        return acc;
    }, {} as Record<string, FooterMenuItem[]>);

    return (
        <div className="px-[1rem] md:px-[60px] bg-[#1A1A1A] pt-4 md:pt-16 text-white">
            <div className="mb-10 flex flex-wrap gap-x-20 gap-y-10">
                {/* Footer Menu */}
                <div className="flex flex-col w-[400px]">
                    <div className="font-bold text-lg text-[#654321] mb-4">
                        RAIMEISTORE
                    </div>
                    <div className="text-sm text-justify sm:text-left">
                    RAIMEISTORE adalah tempat top up games yang aman, murah dan terpercaya. Proses cepat 1-3 Detik. Open 24 jam. Jika ada kendala silahkan klik logo CS pada kanan bawah di website ini.
                    </div>
                </div>
                {Object.entries(groupedMenu).map(([head, links], index) => (
                    <div key={index} className="flex flex-col">
                        <h4 className="font-bold text-lg text-[#654321] mb-4">{head}</h4>
                        {links.map((item, i) => (
                            <div key={i} className="mb-4">
                                <div className="text-sm hover:text-white/50 cursor-pointer">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="py-5 text-xs md:text-sm justify-between w-full min-[500px]:flex border-t-[3px] border-[#333333]">
                <div className="mb-2">
                    &copy; {currentYear} <b className="text-[#654321]">RAIMEISTORE.</b> All rights reserved
                </div>
                <div className="flex gap-4">
                    <a
                        href={sosialFooter.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/50"
                    >
                        <FaYoutube size={26} />
                    </a>
                    <a
                        href={sosialFooter.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/50"
                    >
                        <FaInstagram size={26} />
                    </a>
                    <a
                        href={sosialFooter.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/50"
                    >
                        <FaTwitter size={26} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
