// "use server"
export default async function fetchTodo() {

  const response: any = await fetch('http://localhost:8000/api/todo', {
    method: "get",
    headers: {
      'Content-Type': 'application/json',
    }
  })
  if (!response.ok) {
    throw new Error('Fail hogya fetch todo');
  }
  const todoData: any = await response.json();
  return todoData;

}


