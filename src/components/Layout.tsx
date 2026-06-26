import { Outlet } from 'react-router-dom';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LacquerDivider } from '@/components/ChuPattern';

export default function Layout() {
  return (
    <div className="min-h-screen font-body flex flex-col">
      <TopBar />
      <Header />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <div className="bg-heritage-cream py-3">
        <div className="max-w-[1600px] mx-auto px-4">
          <LacquerDivider />
        </div>
      </div>
      <Footer />
    </div>
  );
}
