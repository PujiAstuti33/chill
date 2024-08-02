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
        <h2 className="text-xl font-semibold mb-4">Melanjutkan Tonton Film</h2>
        <div className="flex flex-wrap justify-between">
            {melanjutkanTontonFilm.map((item) => (
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

export default MelanjutkanTontonFilm;
