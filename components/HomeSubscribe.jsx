import { Mail } from "lucide-react";
import Container from "./Container";

const HomeSubscribe = () => {
  return (
    <Container>
      <div className="text-center border-y border-gray-200 py-12 px-4">
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <div className="p-4 bg-[#2D454D] rounded-full shadow-sm">
            <Mail size={40} className="text-[#FB5C23]" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Be In The Know</h2>
        </div>

        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-xs w-xl ml-12 text-gray-600 leading-relaxed mb-4">
            Keep up to date with the latest news, including exclusive offers and
            not-to-be-missed sales and store events.
          </p>
          <p className="text-gray-500 text-xs">
            Enter your email address below to opt in to email marketing.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="grow px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
            <button className="px-6 py-3 bg-[#2D454D] text-[#FB5C23] rounded-lg font-semibold transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg transform hover:-translate-y-0.5">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default HomeSubscribe;
