function FloatingSelect({ label, name, options, disabled = false, ...props }) {
  return (
    <div className="relative w-full">
      <select
        id={name}
        name={name}
        {...props}
        disabled={disabled}
        className={`peer w-full appearance-none border rounded-md p-3 pt-4 text-base placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#208D74] focus:border-[#208D74] ${
          disabled
            ? "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"
            : "bg-white text-gray-700 border-gray-300"
        }`}
      >
        {options.map(({ value, label }) => (
          <option key={value + label} value={value}>
            {label}
          </option>
        ))}
      </select>
      <label
        htmlFor={name}
        className="bg-white px-1 absolute left-3 top-2 text-sm text-[#208D74]
          opacity-0 scale-95 pointer-events-none
          peer-focus:opacity-100 peer-focus:scale-100 peer-focus:-top-2
          transition-all duration-200"
      >
        {label}
      </label>
    </div>
  );
}
export default FloatingSelect;