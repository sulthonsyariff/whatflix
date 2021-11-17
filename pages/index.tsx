import { useEffect } from 'react';
import LoadingPage from '../components/atoms/LoadingPage.tsx';
import SEO from '../components/atoms/SEO';
import CategoryMovies from '../components/organisms/CategoryMovies';
import DiscoverMovies from '../components/organisms/DiscoverMovies';
import Footer from '../components/organisms/Footer';
import Movies from '../components/organisms/Movies';
import Navbar from '../components/organisms/Navbar';
import TrendingMovies from '../components/organisms/TrendingMovies';

export default function index() {
  useEffect(() => {
    setTimeout(() => {
      const preLoader = document.querySelector<HTMLElement>('.preloader')!;
      preLoader.style.display = 'none';
    }, 1500);
  }, []);

  return (
    <>
      <SEO
        title="Search Information About Your Favorite Movies"
        description="Search information about your favorite movies"
        image="/trailer.png"
      />
      <div className="preloader">
        <LoadingPage />
      </div>
      <Navbar />
      <DiscoverMovies />
      <CategoryMovies />
      <TrendingMovies />
      <Movies />
      <Footer />
    </>
  );
}
