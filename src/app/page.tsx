import QRCard from "@/components/QRCard";
import Attribution from "@/components/Attribution";

export default function HomePage() {
  return (
    <main>
      <section className="relative flex h-screen w-full items-center justify-center px-3">
        <QRCard />
        <Attribution />
      </section>
    </main>
  );
}
