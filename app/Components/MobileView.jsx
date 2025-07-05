import Link from "next/link";
import { FaHome, FaTags, FaSync, FaNewspaper, FaRupeeSign, FaWallet, FaCommentDots, FaLanguage, FaPhone } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-84 bg-white h-screen shadow p-4 flex flex-col justify-between">
      <ul className="space-y-4 text-gray-800 text-base">
        <li className="flex  items-center gap-3">
          <FaHome />
          <Link href="/">Home</Link>
        </li>

        <li className="flex items-center gap-3">
          <FaTags />
          <Link href="/newcars">New Cars</Link>
        </li>

        <li className="flex items-center gap-3">
          <FaSync />
          <Link href="/usedcars">Used Cars</Link>
        </li>

        <li className="flex items-center gap-3">
          <FaNewspaper />
          <Link href="/reviews">Reviews and News</Link>
        </li>

        <li className="flex items-center gap-3">
          <FaRupeeSign />
          <Link href="/sellcars">Sell Cars</Link>
        </li>

        <li className="flex items-center gap-3">
          <FaWallet />
          <Link href="/carloan">Car Loan</Link>
        </li>

        <li className="flex items-center gap-3">
          <FaCommentDots />
          <Link href="/feedback">Feedback</Link>
        </li>

        <li className="flex items-center gap-3">
          <FaLanguage />
          <span>Choose Language / <br /> भाषा चुनें</span>
        </li>
      </ul>
    </aside>
  );
}
