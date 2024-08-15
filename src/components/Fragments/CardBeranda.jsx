import Button from "../Elements/Button";

const CardBeranda = (props) => {
    const { children } = props;
    return (
        <div className="max-w-sm rounded-lg shadow mx-4 my-2 flex flex-col">
            {children}
        </div>
    );
};



const Header = (props) => {
    const { image } = props;
    return (
        <a href="#">
            <img src={image} alt="beranda" className="h-48 object-cover" />
        </a>
    );
};

const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="px-4 pb-3">
            <h5 className="text-lg font-semibold text-white">
                {name}
            </h5>
            <div className="text-sm text-white">
                {children}
            </div>
        </div>
    );
};

const Footer = (props) => {
    const { title } = props;
    return (
        <div className="flex items-center justify-between px-4 py-2 rounded-b-lg">
            <span className="text-lg font-bold text-white">{title}</span>
        </div>
    );
};

CardBeranda.Header = Header;
CardBeranda.Body = Body;
CardBeranda.Footer = Footer;

export default CardBeranda;
