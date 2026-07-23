import { Marcellus, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AboutSection from "@/components/About/About";
import StatsSection from "@/components/Stats/Stats";
import ServicesSection from "@/components/Services/Service";
import Cta from "@/components/Cta/Cta";
import Appointment from "@/components/Appointment/Appointment";
import Testimonials from "@/components/Testimonial/Testimonial";
import BlogSection from "@/components/Blog/Blog";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elan Studio",
  description: "Elan Aesthetic Studio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <AboutSection/>
        <ServicesSection/>
        <StatsSection/>
        <Cta/>
        <Appointment/>
        <Testimonials/>
        <BlogSection/>
        <Footer />
      </body>
    </html>
  );
}
