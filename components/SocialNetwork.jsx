import { socialIcons } from "@/data/SocialIcon";
import Container from "./Container";

const SocialNetwork = () => {
  return (
    <Container>
      <div className="border-b pb-6 border-gray-500 ">
        {" "}
        <h4 className="font-semibold text-lg text-center mb-3">
          Our Social Networks
        </h4>
        <div className="flex items-center justify-center gap-4 ">
          {socialIcons.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-600 duration-300 border p-2 rounded-2xl"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default SocialNetwork;
