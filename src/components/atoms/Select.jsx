function Select({ options, value, onChange }) {
  return (
    <select
      className="border px-2 py-2 rounded bg-white text-xs md:text-sm text-gray-800"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
