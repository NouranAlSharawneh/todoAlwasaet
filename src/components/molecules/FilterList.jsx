import { filterOptions } from "../../utils/options";
import Select from "../atoms/Select";

function FilterList({ currentFilter, onChangeFilter }) {
  return (
    <Select
      ariaLabel={"Filter Select"}
      options={filterOptions}
      value={currentFilter}
      onChange={onChangeFilter}
    />
  );
}

export default FilterList;
