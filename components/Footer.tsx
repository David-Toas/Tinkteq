import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-gray-700 pb-6">
          {/* Logo & Description */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-teal-600 via-green-600 to-sky-500 bg-clip-text text-transparent"
            >
              TINKTEQ
            </Link>
            <p className="text-gray-400 mt-6">
              Simplify shipping payments with our easy, reliable, and secure
              system—designed for speed and peace of mind.
            </p>
          </div>
          {/* Useful Links */}
          <div className="items-center ml-11">
            <h3 className="font-poppins text-[18px] leading-[27px] font-semibold mb-3">
              Useful Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">
                  Content
                </Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">
                  How it Works
                </Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">
                  Create
                </Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">
                  Explore
                </Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">
                  Terms & Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="ml-11">
            <h3 className="font-poppins text-[18px] leading-[27px] font-semibold mb-3">
              Community
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">
                  Help Center
                </Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">
                  Partners
                </Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">
                  Suggestions
                </Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">
                  Blog
                </Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">
                  Newsletters
                </Link>
              </li>
            </ul>
          </div>

          {/* Partner */}
          <div className="ml-11">
            <h3 className="font-poppins text-[18px] leading-[27px] font-semibold mb-3">
              Partner
            </h3>
            <ul className="space-y-2 text-gray-400 ">
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">
                  Our Partner
                </Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm">
          <p>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaInstagram className="text-white hover:text-cyan-400 cursor-pointer" />
            <FaFacebookF className="text-white hover:text-cyan-400 cursor-pointer" />
            <FaTwitter className="text-white hover:text-cyan-400 cursor-pointer" />
            <FaLinkedinIn className="text-white hover:text-cyan-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
