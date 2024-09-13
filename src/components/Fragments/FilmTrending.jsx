import CardBeranda from "./CardBeranda";

const filmTrending = [
    {
        id: 1,
        image: "/images/FilmTrending/tnt1.png",
    },
    {
        id: 2,
        image: "/images/FilmTrending/tnt2.png",
    },
    {
        id: 3,
        image: "/images/FilmTrending/tnt3.png",
    },
    {
        id: 4,
        image: "/images/FilmTrending/tnt4.png",
    },
    {
        id: 5,
        image: "/images/FilmTrending/tnt5.png",
    }
];

const FilmTrending = () => (
    <div className="bg-slate-900 text-white py-5 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold mb-4 text-left">Film Trending</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {filmTrending.map((item) => (
                <CardBeranda key={item.id} className="w-full">
                    <CardBeranda.Header image={item.image} />
                    {/* Hapus CardBeranda.Body dan CardBeranda.Footer jika tidak digunakan */}
                </CardBeranda>
            ))}
        </div>
    </div>
);

export default FilmTrending;
