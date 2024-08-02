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
        />
        <InputForm 
          label="Kata Sandi"
          type="password" 
          placeholder="Masukkan kata sandi" 
          name="password"
        />
        <Button classname="bg-slate-600 w-full">Masuk</Button>
        </form>    
      
    );
};


export default FormLogin;