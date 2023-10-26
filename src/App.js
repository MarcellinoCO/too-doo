import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/slices/todoSlice";

import Filters from "./components/Filter";
import TodoItem from "./components/Todo";

function App() {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const add = (content) => {
    const todo = {
      id: uuidv4(),
      completed: false,
      timestamp: new Date().toISOString(),
      content,
    };

    dispatch(addTodo(todo));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 fw-bold">Let&apos;s get things done!</h1>
      <form
        className="input-group mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const content = formData.get("content");
          add(content);
          e.target.reset();
        }}
      >
        <input
          className="form-control"
          type="text"
          name="content"
          placeholder="What do you want to do?"
          required
        />

        <button
          className="btn btn-primary px-3 text-white fw-bold"
          type="submit"
        >
          <i className="bi bi-plus-circle me-1" /> Add
        </button>
      </form>

      <hr />

      <div className="d-flex justify-content-end align-items-baseline mb-2">
        <p>Filter:</p>
        <Filters />
      </div>

      <ul className="list-group">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
