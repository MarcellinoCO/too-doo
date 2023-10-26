import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/slices/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toggle = () => dispatch(toggleTodo(todo.id));
  const remove = () => dispatch(deleteTodo(todo.id));

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className={todo.completed ? "text-decoration-line-through" : ""}>
        {todo.content}
      </span>

      <div className="btn-group" role="group">
        <button
          className={`btn btn-sm ${
            todo.completed ? "btn-success text-white" : "btn-outline-success"
          }`}
          type="button"
          onClick={toggle}
        >
          {!todo.completed && <span className="me-1">Mark as done</span>}
          <i className="bi bi-check-circle" />
        </button>

        <button
          className="btn btn-danger btn-sm"
          type="button"
          onClick={remove}
        >
          <i className="bi bi-trash text-white" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
