import Image from "next/image";
import Link from "next/link";

export default function WhyAndDownload() {
  return (
    <>
      {/* Black band */}
      <section className="bg-[#0E0E0E] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
          <h2 className="text-center text-2xl md:text-3xl font-semibold">
            Why try{" "}
            <span className="text-orange-500">
              VibeStrings?
            </span>
          </h2>

          <div className="mt-10 grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "SMOOTH BROWSING",
                text: "Explore guitars with fast, intuitive navigation.",
              },
              {
                title: "EASY DELIVERY",
                text: "Checkout in minutes and track your order.",
              },
              {
                title: "SWIFT PAYMENTS",
                text: "Secure payments with your favorite methods.",
              },
            ].map((f) => (
              <div key={f.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    className="opacity-80"
                  >
                    <path
                      fill="currentColor"
                      d="M4 5h16v4H4zm0 5h16v4H4zm0 5h16v4H4z"
                    />
                  </svg>
                </div>
                <div className="text-xs tracking-[0.16em] font-semibold uppercase">
                  {f.title}
                </div>
                <p className="mt-2 text-sm text-white/70 max-w-xs mx-auto">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-[28px] md:text-[36px] leading-[1.15] font-semibold text-gray-900">
              Browse and buy your{" "}
              <span className="text-orange-500">
                favorite guitars
              </span>{" "}
              with VibeStrings.
            </h3>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="#"
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/googleplay.png"
                  alt="Google Play"
                  width={160}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <Link
                href="#"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/appstore.png"
                  alt="App Store"
                  width={160}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Right single image with orange pill behind */}
          <div className="relative flex justify-center">
            <div className="absolute -z-10 h-56 w-56 rounded-full bg-orange-500/90 blur-sm self-center" />
            <Image
              src="/download.png"
              alt="App preview"
              width={360}
              height={640}
              className="w-[340px] md:w-[380px] lg:w-[400px] h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
