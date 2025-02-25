import React, { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    number?: ReactNode;
    title?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
    children,
    number,
    title,
    onClick,
}) => {
    return (
        <div onClick={onClick} className={`mx-auto px-4 sm:px-[50px] ${onClick ? "cursor-pointer" : ""}`}>
            <div className="bg-[#404040] rounded-xl">
                <div className="flex font-bold">
                    {number &&
                        <div className="bg-[#9B30FF] rounded-tl-xl p-2 px-4">
                            {number}
                        </div>
                    }
                    {title &&
                        <div className="bg-[#5F666D] w-full rounded-tr-xl p-2 px-4">{title}</div>
                    }
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Card;