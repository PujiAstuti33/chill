import CardBeranda from "./CardBeranda";

const melanjutkanTontonFilm = [
    {
        id: 1,
        name: "Don't Look Up",
        image: "/images/MelanjutkanTontonFilm/tnt1.png",
    },
    {
        id: 2,
        name: "Blue Lock",
        image: "/images/MelanjutkanTontonFilm/tnt2.png",
    },
    {
        id: 3,
        name: "The Batman",
        image: "/images/MelanjutkanTontonFilm/tnt3.png",
    },
    {
        id: 4,
        name: "A Man Called Otto",
        image: "/images/MelanjutkanTontonFilm/tnt4.png",
    },
];

const MelanjutkanTontonFilm = () => (
    <div className="bg-slate-900 text-white py-5">
        <h2 className="text-xl font-semibold mb-4 text-left">Melanjutkan Tonton Film</h2>
        <div className="flex flex-wrap items-center gap-4">
            {melanjutkanTontonFilm.map((item) => (
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

export default MelanjutkanTontonFilm;
