import { useState } from "react";

import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../store/slices/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const edit = (content) => dispatch(editTodo({ id: todo.id, content }));
  const toggle = () => dispatch(toggleTodo(todo.id));
  const remove = () => dispatch(deleteTodo(todo.id));

  const [isEditing, setEditing] = useState(false);

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <form
          className="input-group input-group-sm"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const content = formData.get("content");
            edit(content);
            e.target.reset();
            setEditing(false);
          }}
        >
          <input
            className="form-control"
            name="content"
            type="text"
            placeholder={todo.content}
            defaultValue={todo.content}
          />

          <button className="btn btn-warning" type="submit">
            Save <i className="bi bi-floppy ms-1" />
          </button>
        </form>
      ) : (
        <span className={todo.completed ? "text-decoration-line-through" : ""}>
          {todo.content}
        </span>
      )}

      {!isEditing && (
        <div className="d-flex align-items-center">
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
            className="btn btn-warning btn-sm ms-2"
            onClick={() => setEditing(true)}
          >
            Edit <i className="bi bi-pencil ms-1" />
          </button>

          <button
            className="btn btn-danger btn-sm text-white ms-2"
            type="button"
            onClick={remove}
          >
            <i className="bi bi-trash" />
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
