
import Link from "next/link";
import {MenuData} from "../data/MenuData"
import Container from "./Container";

const HeaderMenu = () => {
  return (
    <Container>
      <nav className="hidden md:flex justify-between  ">
        {MenuData.map((item) => (
          <Link
            key={item.id}
            href={`${item.href}`}
            className="text-gray-700 hover:text-black font-medium transition uppercase"
          >
            {item.heading}
          </Link>
        ))}
      </nav>
    </Container>
  );
}

export default HeaderMenu