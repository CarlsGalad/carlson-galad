import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
        <Image
          src="/avatar.png"
          alt="Avatar"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Avatar;