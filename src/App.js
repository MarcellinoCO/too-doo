import Filters from "./components/Filter";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 fw-bold">Let&apos;s get things done!</h1>
      <div className="input-group mb-4">
        <input className="form-control" type="text" placeholder="What to do" />
        <button
          className="btn btn-primary px-3 text-white fw-bold"
          type="button"
        >
          <i className="bi bi-plus-circle me-1" /> Add
        </button>
      </div>

      <hr />

      <div className="d-flex justify-content-end align-items-baseline mb-2">
        <p>Filter:</p>
        <Filters />
      </div>

      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Buy milk</span>
          <div className="btn-group" role="group">
            <button className="btn btn-outline-success btn-sm" type="button">
              Mark as done <i className="bi bi-check-circle ms-1" />
            </button>
            <button className="btn btn-danger btn-sm" type="button">
              <i className="bi bi-trash text-white" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
