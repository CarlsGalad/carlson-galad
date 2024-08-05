import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
    return (
        <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
                    {/* logo */}
                    <Link href={'/'}>
                        <div className="relative w-[150px] h-[79px]"> {/* Adjust the width and height as needed */}
                            <Image
                                src={'/logo.svg'}
                                alt="Logo"
                                layout="fill"
                                objectFit="cover" // Or "cover" depending on the desired effect
                                objectPosition="center" // Adjust position as needed
                                priority={true}
                            />
                        </div>
                    </Link>
                    {/* socials */}
                    <Socials />
                </div>
            </div>
        </header>
    );
};

export default Header;
