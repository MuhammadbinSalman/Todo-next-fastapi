'use client'
import {Input} from "@/components/ui/input"
import React, { useState } from 'react'
import { TodoTasks } from "./TodoTasks"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


// const getData:any = async () => {
//   try {
//     const response = await fetch('http://localhost:8000/todo');
//     if (!response.ok) {
//       throw new Error('Failed to fetch todo');
//     }
//     const todoData: any = await response.json();
//     return todoData;
//   } catch (error) {
//     console.log('Error fetching todo:', error);
//   }
// }

async function TodoSection(){
  const [todoName, setTodoName] = useState({task:""});
  console.log(todoName, "🤡🤡")
  //const todoData = await getData();
  //const completedTodos: any = todoData.filter((todo: any) => todo.completed);

  // break
  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:8000/todo/add', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name: "fromTodo",
  //         description: 'bring carrots', // You can customize this
  //         completed: false,
  //       }),
  //     });
  //   if (response.ok) {
  //     // Handle success (e.g., show a success message)
  //     console.log('Todo added successfully!');
  //     // Clear the input field
  //     // setTodoName('');
  //     // Trigger a function to refresh the todo list
  //     // addTodo();
  //   } else {
  //     // Handle error (e.g., show an error message)
  //     console.error('Error adding todo:', response.statusText);
  //   }
  // } catch (error) {
  //   console.error('Error adding todo:', error);
  // }
  return (
    <main className='px-24 mb-10'>
      <div className='h-[230px] w-[440px] rounded-[39px] border-2 border-[#766e5f] mx-auto flex justify-between px-14 gap-3 items-center'>
        <div className=''>
          <h1 className='text-[#dbcaae] text-[28px] font-extrabold leading-7'>Todo Done <br /><span className='text-xl text-[#c2b29a] font-normal'>Keep <span className='ml-1'>it </span> <span className='ml-1'>up</span></span></h1>
        </div>
        <div className='rounded-full h-36 w-36 bg-[#ff5631] flex items-center justify-center'>
          <h3 className='text-[#0f0e0c] font-[1000] text-4xl'>
            {/* {completedTodos.length} / {todoData.length} */}
          </h3>
        </div>
      </div>
      <div className='flex items-center mt-9 justify-center gap-3'>
        <input onChange={(e) => setTodoName({task: e.target.value})} placeholder="Write your next task" className="border-none placeholder:text-[#70685c] text-[#e6d4b7] bg-[#1e1e1e] rounded-xl max-w-[360px]" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button className="rounded-full h-9 cursor-pointer w-9 bg-[#ff5631] flex justify-center items-center font-extrabold">+</button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-[#e6d4b7]">Add a new task</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {/* <TodoTasks tasks={todoData} /> */}
    </main>
  )
}

export default TodoSection;