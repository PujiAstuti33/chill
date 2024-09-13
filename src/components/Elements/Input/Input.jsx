const Input = (props) => {
    const {type, placeholder, name} = props;
    return (
        <input 
            type={type}
            className="bg-slate-800 text-sm border rounded w-full py-2 px-3 text-white placeholder: opacity-50"
            placeholder={placeholder}
            name={name}
        
        />
    );
};

export default Input;
