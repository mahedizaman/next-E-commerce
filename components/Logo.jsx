import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        width={120}
        height={120}
        src="https://www.next.co.uk/static-content/icons/header/next/v2/revision/new-next-logo-gold.svg"
        alt="Next Logo"
        className="h-6 w-auto"
      />
    </div>
  );
};

export default Logo;
