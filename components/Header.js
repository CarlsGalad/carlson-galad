import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
    return (
        <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
            <div className="container mx-auto">
                <div className="flex flex-row justify-between items-center py-4 xl:py-8">
                    {/* logo */}
                    <Link href={'/'}>
                        <div className="relative w-[120px] h-[33px] xl:w-[160px] xl:h-[44px]">
                            <Image
    src={'/logo.png'}
    alt="Logo"
    fill
    style={{ objectFit: 'contain', objectPosition: 'left center' }}
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
