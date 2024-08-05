import Link from "next/link";

//Icons
import {
    RiYoutubeLine,
    RiInstagramLine,
    RiGithubLine,
    RiTwitterLine
} from 'react-icons/ri';

const Socials = () => {
    return <div className="flex items-center gap-x-5">
        <Link href={''} className="hover:text-accent transition-all duration-300">
            <RiGithubLine />
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300">
            <RiTwitterLine />
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300">
            <RiInstagramLine />
        </Link>
        <Link href={''} className="hover:text-accent transition-all duration-300">
            <RiYoutubeLine />
        </Link>
    </div>;
};

export default Socials;
