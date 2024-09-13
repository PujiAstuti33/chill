import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
        <form action="">
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
           
        </form>
    );
};

export default FormLogin;