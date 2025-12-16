import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        width={120}
        height={120}
        src="https://www.next.co.uk/static-content/icons/header/next/v2/revision/new-next-logo-gold.svg"
        alt="Next Logo"
        className="h-6 w-auto"
      />
    </Link>
  );
};

export default Logo;
