import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import IntroSection from '@/components/IntroSection';
import NewsSection from '@/components/NewsSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-heritage-cream font-body">
      <Navbar />
      <main className="pt-16">
        <Carousel />
        <IntroSection />
        <NewsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}