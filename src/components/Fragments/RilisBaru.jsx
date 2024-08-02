import CardBeranda from "./CardBeranda";

const rilisBaru = [
    {
        id: 1,
        image: "/images/RilisBaru/tnt1.png",

    },
    {
        id: 2,
        image: "/images/RilisBaru/tnt2.png",
    },
    {
        id: 3,
        image: "/images/RilisBaru/tnt3.png",
    },
    {
        id: 4,
        image: "/images/RilisBaru/tnt4.png",
    },
    {
        id: 5,
        image: "/images/RilisBaru/tnt5.png",
    },
];

const RilisBaru = () => (
    <div className="bg-slate-900 text-white py-5">
        <h2 className="text-xl font-semibold mb-4">Rilis Baru</h2>
        <div className="flex flex-wrap justify-between">
            {rilisBaru.map((item) => (
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

export default RilisBaru;
