import Header from "@/components/Header";
import Footer from "@/components/ui/footer";
import Body from "@/components/ui/Body";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
