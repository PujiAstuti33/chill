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
    <div className="bg-slate-900 text-white py-5 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold mb-4 text-left">Rilis Baru</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {rilisBaru.map((item) => (
                <CardBeranda key={item.id} className="w-full">
                    <CardBeranda.Header image={item.image} />
                    {/* Hapus CardBeranda.Body dan CardBeranda.Footer jika tidak digunakan */}
                </CardBeranda>
            ))}
        </div>
    </div>
);

export default RilisBaru;
