import Button from "../Elements/Button";
import InputForm from "../Elements/Input";


const FormRegister = () => {
    return (
        <form action="">
        <InputForm
          label="Username"
          type="text" 
          placeholder="Masukkan username" 
          name="username"
        />
        <InputForm 
          label="Kata Sandi"
          type="password" 
          placeholder="Masukkan kata sandi" 
          name="password"
        />
         <InputForm
          label="Konfirmasi Kata Sandi"
          type="password" 
          placeholder="Masukkan kata sandi" 
          name="confirmPassword"
        />
        <Button classname="bg-slate-600 w-full">Daftar</Button>
      </form>
    ) 
};


export default FormRegister;