import Link from "next/link";
import { footerData } from "../data/FooterData";
import Container from "./Container";

export default function FooterDataSet() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 md:gap-2">
        {footerData.map((item) => (
          <div key={item.title}>
            <h4 className="font-semibold mb-5 uppercase tracking-wide text-white">
              {item.title}
            </h4>
            <ul className="space-y-3 text-[13px] leading-relaxed text-gray-300">
              {item.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs hover:text-white hover:underline underline-offset-4 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
