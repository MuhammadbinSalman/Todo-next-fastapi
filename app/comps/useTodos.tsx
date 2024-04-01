// useTodos.js
import React, { useState, useEffect } from 'react';

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('http://127.0.0.1:3000'); // Replace with your API endpoint
      const data = await response.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  const addTodo = async (newTodo:any) => {
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo), // Send the new todo data
      });

      if (response.ok) {
        // Successfully added the todo to the database
        // Now fetch the updated data from the server
        const updatedTodos = await fetch('/api/todos').then((res) => res.json());
        setTodos(updatedTodos);
      } else {
        // Handle error (optional)
        console.error('Error adding todo:', await response.text());
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return { todos, addTodo };
}

export default useTodos;
