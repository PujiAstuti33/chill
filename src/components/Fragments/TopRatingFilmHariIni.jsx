import CardBeranda from "./CardBeranda";

const topRatingFilmHariIni = [
    {
        id: 1,
        image: "/images/TopRatingFilmHariIni/tnt1.png",
    },
    {
        id: 2,
        image: "/images/TopRatingFilmHariIni/tnt2.png",
    },
    {
        id: 3,
        image: "/images/TopRatingFilmHariIni/tnt3.png",
    },
    {
        id: 4,
        image: "/images/TopRatingFilmHariIni/tnt4.png",
    },
    {
        id: 5,
        image: "/images/TopRatingFilmHariIni/tnt5.png",
    },
];

const TopRatingFilmHariIni = () => (
    <div className="bg-slate-900 text-white py-5">
        <h2 className="text-xl font-semibold mb-4 text-left">Top Rating Film Hari Ini</h2>
        <div className="flex flex-wrap items-center gap-4">
            {topRatingFilmHariIni.map((item) => (
                <CardBeranda key={item.id} className="w-48">
                    <CardBeranda.Header image={item.image} />
                    <CardBeranda.Body name={item.name}>
                        <p className="text-sm">{item.description}</p>
                    </CardBeranda.Body>
                    <CardBeranda.Footer />
                </CardBeranda>
            ))}
        </div>
    </div>
);

export default TopRatingFilmHariIni;
