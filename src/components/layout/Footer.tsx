import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

type FooterMenuItem = {
    head: string;
    title: string;
    link: string;
};

type AlamatFooter = {
    company: string;
    address: string;
    telp: string;
};

type SosialFooter = {
    instagram: string;
    twitter: string;
    youtube: string;
};

const Footer: React.FC = () => {
    const currentYear: number = new Date().getFullYear();

    const footerMenu: FooterMenuItem[] = [
        { head: "MENU", title: "Beranda", link: "Hero" },
        { head: "MENU", title: "Tentang Kami", link: "About" },
        { head: "MENU", title: "Pelayanan", link: "Service" },
        { head: "MENU", title: "Harga", link: "Pricing" },
        { head: "MENU", title: "FAQ", link: "FAQ" },
        { head: "MENU", title: "Kontak", link: "Contact" },
    ];

    const alamatFooter: AlamatFooter = {
        company: "Rumah Klaten Asri",
        address: "Jl. Kelengkeng 10, Way Huwi, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung 35365",
        telp: "0813-6930-4112",
    };

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
        <div className="px-[1rem] md:px-[60px] bg-[#1F1F1F] pt-4 md:pt-16 text-gray-600">
            <div className="mb-10 flex flex-wrap gap-x-8 gap-y-10">
                {/* Footer Menu */}
                {Object.entries(groupedMenu).map(([head, links], index) => (
                    <div key={index} className="flex flex-col">
                        <h4 className="font-bold text-lg text-green-600 mb-4">{head}</h4>
                        {links.map((item, i) => (
                            <div key={i} className="mb-2">
                                <div className="text-sm hover:text-green-500 cursor-pointer">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                {/* Address Footer */}
                <div className="flex flex-col w-[42rem]">
                    <h4 className="font-bold text-lg text-green-600 mb-4">KOSAN</h4>
                    <p className="text-sm mb-2">{alamatFooter.company}</p>
                    <p className="text-sm mb-2">
                        <strong>ALAMAT:</strong> {alamatFooter.address}
                    </p>
                    <div className="flex items-center text-sm">
                        <FiPhoneCall className="mr-2" />
                        {alamatFooter.telp}
                    </div>
                </div>
            </div>
            <div className="py-5 text-xs md:text-sm justify-between w-full font-semibold min-[500px]:flex border-t-[3px] border-black">
                <div className="mb-2">
                    &copy; {currentYear} <b>Rumah Klaten Asri.</b> All rights reserved
                </div>
                <div className="flex gap-4">
                    <a
                        href={sosialFooter.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-500"
                    >
                        <FaYoutube size={26} />
                    </a>
                    <a
                        href={sosialFooter.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-500"
                    >
                        <FaInstagram size={26} />
                    </a>
                    <a
                        href={sosialFooter.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-500"
                    >
                        <FaTwitter size={26} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
