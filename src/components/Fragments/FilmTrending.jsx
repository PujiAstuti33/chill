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
    <div className="bg-slate-900 text-white py-5">
        <h2 className="text-xl font-semibold mb-4">Film Trending</h2>
        <div className="flex flex-wrap justify-center">
            {filmTrending.map((item) => (
                <CardBeranda key={item.id}>
                    <CardBeranda.Header image={item.image} />
                    <CardBeranda.Body name={item.name}>
                        {item.description}
                    </CardBeranda.Body>
                    <CardBeranda.Footer />
                </CardBeranda>
            ))}
        </div>
    </div>
);

export default FilmTrending;