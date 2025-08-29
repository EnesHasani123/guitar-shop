import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  return (
    <footer className="bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="VibeStrings"
                width={148}
                height={148}
              />
            </div>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="text-gray-500"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4a2 2 0 0 0-2 2v1.2l10 5.6l10-5.6V6a2 2 0 0 0-2-2m0 5.4l-8 4.4l-8-4.4V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"
                  />
                </svg>
                Enquiry@VibeStrings.com
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="text-gray-500"
                >
                  <path
                    fill="currentColor"
                    d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5"
                  />
                </svg>
                San Francisco
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">
              PAGES
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

      
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">
              PRODUCT
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900"
                >
                  Copyright
                </Link>
              </li>
            </ul>
          </div>

   
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">
              FOLLOW US
            </div>
            <div className="flex items-center gap-4">
          
              <Link
                href="#"
                aria-label="Facebook"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 2h-2.5A4.5 4.5 0 0 0 10 6.5V9H7v4h3v9h4v-9h3l1-4h-4V6.5A1.5 1.5 0 0 1 14.5 5H17z"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 5.8c-.7.3-1.4.5-2.1.6c.8-.5 1.3-1.2 1.6-2.1c-.7.5-1.6.8-2.5 1c-.7-.7-1.7-1.2-2.8-1.2c-2.2 0-4 1.8-4 4c0 .3 0 .6.1.9C8.3 9 5.1 7.3 3 4.8c-.4.7-.6 1.5-.6 2.3c0 1.4.7 2.7 1.8 3.5c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.2 4c-.3.1-.7.2-1.1.2c-.3 0-.5 0-.8-.1c.6 1.7 2.2 3 4.2 3c-1.5 1.2-3.4 1.9-5.4 1.9c-.3 0-.7 0-1-.1C4.7 21 6.9 22 9.2 22c6.6 0 10.2-5.5 10.2-10.2v-.5c.7-.5 1.3-1.2 1.8-1.9z"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-5 3.5A5.5 5.5 0 1 1 6.5 13A5.5 5.5 0 0 1 12 7.5m0 2A3.5 3.5 0 1 0 15.5 13A3.5 3.5 0 0 0 12 9.5m5.75-3.25a1 1 0 1 1-1 1a1 1 0 0 1 1-1"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Copyright VibeStrings
        </div>
        <div className="mt-6">
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
