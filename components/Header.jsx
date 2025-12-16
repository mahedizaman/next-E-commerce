import HeaderMain from "./HeaderMain";
import HeaderMenu from "./HeaderMenu";
import HeaderPromotion from "./HeaderPromotion";

const Header = () => {
  return (
    <header className="bg-[#FFF5EE]">
      <HeaderPromotion />
      <HeaderMain />
      <HeaderMenu />
    </header>
  );
};

export default Header;
