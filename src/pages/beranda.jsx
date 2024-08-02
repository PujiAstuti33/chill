import Header from "../components/Header/Header";
import MelanjutkanTontonFilm from "../components/Fragments/MelanjutkanTontonFilm";
import TopRatingFilmHariIni from "../components/Fragments/TopRatingFilmHariIni";
import FilmTrending from "../components/Fragments/FilmTrending";
import RilisBaru from "../components/Fragments/RilisBaru";
import Footer from "../components/Footer/Footer";



const Beranda = () => (
    <div>
        <Header />
        <MelanjutkanTontonFilm />
        <TopRatingFilmHariIni />
        <FilmTrending />
        <RilisBaru /> 
        <Footer /> 
                     
    </div>
);
export default Beranda;
