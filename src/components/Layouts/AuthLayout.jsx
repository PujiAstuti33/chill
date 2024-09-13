import { Link } from "react-router-dom";
import Button from "../Elements/Button";


const AuthLayout = ({ children, type, title, forgotPasswordLink = "/forgot-password", registerLink = "/register", loginLink = "/login" }) => {
    const getBackgroundImage = () => {
        switch (type) {
            case "login":
                return '/images/bg-masuk/bg.jpg';
            case "register":
                return '/images/bg-daftar/bg.jpg';
            default:
                return ''; 
        }
    };

    const backgroundImage = getBackgroundImage();

    return (
        <div 
            className="flex justify-center items-center min-h-screen bg-cover bg-center" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="w-full max-w-md font-bold bg-slate-900 p-6 inset-0 opacity-70">
                <img 
                    src="/images/icon-movie.png" 
                    alt="Movie Icon" 
                />
                         
                <h1 className="text-3xl font-bold mb-2 text-white text-center">
                    CHILL
                </h1>
                <p className="text-xl font-bold text-white mb-2 text-center">
                    {title}
                </p>
                <p className="font-medium text-white font-bold mb-8 text-center">
                    {type === "login" ? "Selamat datang kembali!" : "Selamat datang!"}
                </p>
                {children}
                <div className="flex justify-between font-bold text-sm text-white mt-5 mb-4">
                    <p className="text-left flex-grow">
                        {type === "login" ? (
                            <>
                                Belum punya akun? 
                                <Link to={registerLink} className="font-bold text-white hover:underline ml-1">
                                    Daftar
                                </Link>
                            </>
                        ) : (
                            <>
                                Sudah punya akun? 
                                <Link to={loginLink} className="font-bold text-white ml-1">
                                    Masuk
                                </Link>
                            </>
                        )}
                    </p>
                    {type === "login" && (
                        <Link 
                            to={forgotPasswordLink} 
                            className="text-sm text-white hover:underline ml-4"
                        >
                            Lupa Kata Sandi?
                        </Link>
                    )}
                </div>
                    <Button className="w-full bg-gray-800 w-full border text-white mb-4" type="submit">
                        {type === "login" ? "Masuk" : "Daftar"}
                    </Button>
                <div className="w-full text-center mb-4">
                    <p className="text-sm text-white mb-4">Atau</p>
                    <button className="w-full py-2 px-4 bg-gray-800 border text-white rounded flex items-center justify-center ">
                        <img src="/images/google-icon.png" alt="Google Icon" className="w-5 h-6 mr-4" />
                        <span>Daftar dengan Google</span>
                    </button>
                </div>            
            </div>
        </div>
     
    );
};

export default AuthLayout;
