function FloatingInput({ label, name, ...props }) {
  return (
    <div className="relative w-full">
      <input
        id={name}
        name={name}
        {...props}
        className="peer w-full bg-transparent border border-gray-300 rounded-md p-3 pt-4 text-base text-black placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#208D74] focus:border-[#208D74]"
        placeholder={label}
      />
      <label
        htmlFor={name}
        className="bg-white px-1 absolute left-3 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#208D74]"
      >
        {label}
      </label>
    </div>
  );
}
export default FloatingInput;
