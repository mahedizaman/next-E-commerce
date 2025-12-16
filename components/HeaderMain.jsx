import CheckoutList from "./CheckoutList";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const HeaderMain = () => {
  return (
    <header className="w-full relative">
      <div className="relative flex items-center justify-between px-3 py-3 md:px-20">
        <div className="hidden md:block">
          <SearchBar />
        </div>

        <div
          className="
          absolute left-1/2 -translate-x-1/2
          md:static md:translate-x-0 mt-3
        "
        >
          <Logo />
        </div>

        <div className="hidden md:block">
          <CheckoutList />
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
