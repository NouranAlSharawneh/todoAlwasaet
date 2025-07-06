function Checkmark({ checked, onChange }) {
  return (
    <input
      type="checkbox"
      className="w-5 h-5 outline-none border-2 border-gray-300 accent-blue-600 rounded cursor-pointer"
      checked={checked}
      onChange={onChange}
    />
  );
}

export default Checkmark;
