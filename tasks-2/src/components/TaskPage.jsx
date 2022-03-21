import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const TaskPage = () => {
  const [page, setPage] = useState(1);
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const getTasks = () => {
    fetch(`http://localhost:3001/tasks?page=${page}`)
      .then((res) => res.json())
      .then((r) => setTask(r))
      .catch((e) => console.log(e));
  };
  const deleteTask = (id) => {
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((r) => getTasks())
      .catch((e) => console.log(e));
  };
  const addPost = () => {
    const payload = {
      title,
      status: false,
    };
    fetch(`http://localhost:3001/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((r) => r.json())
      .then((r) => getTasks())
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getTasks();
  }, [page]);
  return (
    <div>
      <h1>Welcome to the Task Page</h1>
      <div>
        <input
          placeholder="Add Task"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addPost}> Add</button>
      </div>

      {task &&
        task.map((item) => (
          <div key={item._id} style={{ border: "1px solid black" }}>
            {" "}
            <Link to={`/tasks/${item._id}`}>
              <h4>Title: {item.title}</h4>{" "}
            </Link>
            <h4> Status: {item.status ? "Completed" : "Not Completed"}</h4>
            <button onClick={() => deleteTask(item._id)}>Delete task</button>
          </div>
        ))}
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};
