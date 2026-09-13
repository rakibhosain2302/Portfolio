import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export const metadata = {
  title: "Rakib Hosain | Full Stack Developer",
  description:
    "Portfolio of Rakib Hosain, a Full Stack Developer specializing in React.js and Laravel, building fast, secure, and scalable web solutions.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
