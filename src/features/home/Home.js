import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  const totalTodos = useSelector((state) => state.todos.length);
  const currentCounter = useSelector((state) => state.counter.value);
  return (
    <main>
      <h1>Home</h1>
      <hr />
      <h2>Todos</h2>
      <h3>
        Total Complete Items: {completedTodos.length} / {totalTodos}
      </h3>
      <hr />
      <h2>Counter</h2>
      <h3>Current counter status: {currentCounter}</h3>
    </main>
  );
};

export default Home;
