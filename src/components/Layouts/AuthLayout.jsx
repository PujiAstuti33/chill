import { Link } from "react-router-dom";
import GoogleAuthButton from "../Elements/Button/GoogleAuthButton";

const AuthLayout = ({ children, type, title, forgotPasswordLink = "/forgot-password", registerLink = "/register", loginLink = "/login" }) => {
    const getBackgroundImage = () => {
        switch (type) {
            case "login":
                return '/images/bg-masuk/bg.jpg';
            case "register":
                return '/images/bg-daftar/bg.jpg';
            default:
                return ''; // Default background or none
        }
    };

    const backgroundImage = getBackgroundImage();

    return (
        <div 
            className="flex justify-center items-center min-h-screen bg-cover bg-center" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="w-full max-w-md bg-slate-900 p-6">
                <img 
                    src="/images/icon-movie.png" 
                    alt="Movie Icon" 
                    className="w-8 h-8 mr-1" 
                />
                <h1 className="text-3xl font-bold mb-2 text-white text-center">
                    CHILL
                </h1>
                <p className="text-xl font-semibold text-white mb-2 text-center">
                    {title}
                </p>
                <p className="font-medium text-white mb-8 text-center">
                    {type === "login" ? "Selamat datang kembali!" : "Selamat datang!"}
                </p>

                {/* Form Field */}
                {children}

                {/* Additional Links */}
                <div className="flex justify-between text-sm text-slate-300 mt-5">
                    <p className="text-left flex-grow">
                        {type === "login" ? (
                            <>
                                Belum punya akun? 
                                <Link to={registerLink} className="font-bold text-white ml-1">
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

                {/* Google Auth Button */}
                <div className="text-center pt-2">
                    <p className="font-lato text-white text-sm mb-2">Atau</p>
                    <GoogleAuthButton>Masuk dengan Google</GoogleAuthButton>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;