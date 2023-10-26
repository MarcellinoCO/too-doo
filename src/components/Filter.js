import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../store/slices/filterSlice";

const FilterItem = ({ type, title }) => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <input
        id={`filter-${type}`}
        className="btn-check"
        name="filter"
        type="radio"
        checked={filter === type}
        onChange={(e) => {
          if (e.target.checked) dispatch(toggleFilter(type));
        }}
      />

      <label className="btn btn-outline-primary" htmlFor={`filter-${type}`}>
        {title}
      </label>
    </>
  );
};

const Filters = () => (
  <div className="btn-group ms-2" role="group">
    <FilterItem type="all" title="All" />
    <FilterItem type="active" title="Active" />
    <FilterItem type="completed" title="Completed" />
  </div>
);

export default Filters;
