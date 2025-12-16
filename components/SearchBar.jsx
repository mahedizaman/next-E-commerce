import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative mx-auto w-40 md:w-60">
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-md border border-gray-300 bg-gray-100 focus-within:ring-2 focus-within:ring-black transition">
        <Search className="w-4 h-4  text-gray-500 shrink-0" />

        <input
          type="text"
          placeholder="Search for anything here..."
          className="w-100 bg-transparent outline-none text-xs md:text-sm placeholder-gray-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;
