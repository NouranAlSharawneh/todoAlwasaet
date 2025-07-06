import Select from "../atoms/Select";

function FilterList({ currentFilter, onChangeFilter }) {
  const options = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <Select options={options} value={currentFilter} onChange={onChangeFilter} />
  );
}

export default FilterList;
