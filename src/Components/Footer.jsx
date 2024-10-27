import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-40 w-full bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center mb-2">Life long</h1>
      <p className="text-center mb-2">
        © 2024 Decode Spawns. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <Link href="#" className="text-white hover:text-gray-400">
          Privacy Policy
        </Link>
        <Link href="#" className="text-white hover:text-gray-400">
          Terms of Service
        </Link>
        <Link href="#" className="text-white hover:text-gray-400">
          Contact Us
        </Link>
      </div>
    </div>
  );
};
export default Footer;
