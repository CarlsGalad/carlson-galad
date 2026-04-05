import Link from "next/link";

//Icons
import {
    RiLinkedinLine,
    RiInstagramLine,
    RiGithubLine,
    RiTwitterXLine
} from 'react-icons/ri';

const Socials = () => {
    return <div className="flex items-center gap-x-5">
        <Link href={'https://github.com/CarlsGalad'} className="hover:text-accent transition-all duration-300">
            <RiGithubLine />
        </Link>
        <Link href={'https://x.com/GaladimaCarl'} className="hover:text-accent transition-all duration-300">
            <RiTwitterXLine />
        </Link>
        <Link href={'https://www.instagram.com/carlsgalad?igsh=N3lkeGF4aWRreWZn'} className="hover:text-accent transition-all duration-300">
            <RiInstagramLine />
        </Link>
        <Link href={'https://www.linkedin.com/in/adams-kingsley-x'} className="hover:text-accent transition-all duration-300">
            <RiLinkedinLine />
        </Link>
    </div>;
};

export default Socials;