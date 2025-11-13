import Footer from "@/components/footer";
import HeroNavigation from "@/components/HeroNavigation";
import NavBar from "@/components/navbar";
import "../globals.css";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeroNavigation />
            <NavBar />
            {children}
            <Footer />
        </>
    );
}
