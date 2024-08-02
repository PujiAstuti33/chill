import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
        <form className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
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