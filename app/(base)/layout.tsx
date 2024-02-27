import { Navbar } from '../components';
import Footer from '../components/footer/Footer';

export default function BaseLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid-layout">
      <div className="sticky top-0 bg-primary-100 z-[100] p-side">
        <Navbar />
      </div>

      <main className="">{children}</main>

      <Footer />
    </section>
  );
}
