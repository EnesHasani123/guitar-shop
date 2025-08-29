import "./globals.css";
import ApolloProviderClient from "@/components/providers/ApolloProvider";
import LangProvider from "@/components/providers/LangProvider";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <LangProvider>
          <ApolloProviderClient>
            <div className="min-h-dvh flex flex-col">
              <div className="flex-1">
                <div className="container-app">
                  {children}
                </div>
              </div>

              <Footer />
            </div>
          </ApolloProviderClient>
        </LangProvider>
      </body>
    </html>
  );
}
