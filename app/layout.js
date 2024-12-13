import "./globals.css";

export const metadata = {
  title: "For Grace",
  description: "This is dedicated for grace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="w-full h-screen flex flex-col items-center text-center"
      >
        {children}
      </body>
    </html>
  );
}
