import "./globals.css";
import ApolloProviderClient from "@/components/providers/ApolloProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <ApolloProviderClient>
          {children}
        </ApolloProviderClient>
      </body>
    </html>
  );
}
