import React, { useRef, useState } from 'react';

const Todo = () => {
  interface todo {
    id: number;
    title: string;
    limit: string;
    done: boolean;
  }

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'HTMLの勉強',
      limit: '2023-11-12',
      done: false,
    },
    {
      id: 2,
      title: 'CSSの勉強',
      limit: '2023-11-23',
      done: false,
    },
  ]);

  const titleRef = useRef<HTMLInputElement>(null);
  const limitRef = useRef<HTMLInputElement>(null);

  // todoを追加する
  const addNewTodo = () => {
    if (titleRef.current !== null && limitRef.current !== null) {
      const newTodo: todo = {
        id: Math.max(...todos.map((p) => p.id)) + 1,
        title: titleRef.current?.value || '',
        limit: limitRef.current?.value || '',
        done: false,
      };

      const newTodos = [...todos, newTodo];
      setTodos(newTodos);

      console.log('Todoの追加が完了しました' + newTodos);

      titleRef.current.value = '';
      titleRef.current.value = '';
    }
  };
  // todoの完了未完了を反転させる
  const toggleTodo = (id: number) => {
    console.log(id);
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);

    if (todo !== undefined) {
      todo.done = !todo.done;
    }

    setTodos(newTodos);
  };

  return (
    <>
      <h2>TodoList</h2>
      <table>
        <thead>
          <tr>
            <th>Done</th>
            <th>No.</th>
            <th>Title</th>
            <th>Limit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((element, index) =>
            !element.done ? (
              <tr key={index}>
                <input
                  type="checkbox"
                  onChange={() => toggleTodo(element.id)}
                  checked={element.done}
                />
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.limit}</td>
                {/* <button onClick={deleteTodo}>Delete</button> */}
              </tr>
            ) : null,
          )}
        </tbody>
      </table>

      <div>
        <label>
          Title
          <input type="text" ref={titleRef}></input>
        </label>
        <label>
          Limit
          <input id="limit" type="date" ref={limitRef}></input>
        </label>
        <button onClick={addNewTodo}>Add</button>
      </div>
    </>
  );
};

export default Todo;
