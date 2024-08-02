import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
        <form className="max-w-md mx-auto p-4 bg-slate-500 shadow-md rounded-lg">
            <InputForm
                label="Username"
                type="text"
                placeholder="Masukkan username"
                name="username"
                className="mb-4"
            />
            <InputForm
                label="Kata Sandi"
                type="password"
                placeholder="Masukkan kata sandi"
                name="password"
                className="mb-4"
            />
            <Button classname="bg-slate-600 w-full text-white py-2 rounded-md hover:bg-slate-700">
                Masuk
            </Button>
        </form>
    );
};

export default FormLogin;