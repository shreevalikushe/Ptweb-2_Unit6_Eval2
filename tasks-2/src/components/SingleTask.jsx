import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleTask = () => {
  const { id } = useParams();
  const [subtask, setSubTask] = useState("");
  console.log(id);
  const getSingleTask = () => {
    fetch(`http://localhost:3001/tasks/${id}`)
      .then((r) => r.json())
      .then((r) => {
        setSubTask(r.subTask);
        console.log(r);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getSingleTask();
  }, [id]);
  return (
    <div>
      <h2>Single sub-tasks page</h2>
      Sub task for {id} number task is {subtask}
    </div>
  );
};
