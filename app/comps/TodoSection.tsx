import { Input } from "@/components/ui/input"
import React, { useEffect, useState } from 'react'
import AddTodoTasks from "./AddTodoTasks"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ClipboardPen, Trash } from "lucide-react"



const TodoSection = async () => {
  const [todo, setTodo] = useState([]);
  // useEffect(() => {
    async function fetchTodo(){
      
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
      setTodo(todoData);
      // return todoData;
      
      // })
    }
  console.log(todo, "TODO HERER")
  const todoData = await fetchTodo();
  console.log(todoData, "todo data here");
  
  const completedTodos: any = await todo?.filter((todo: any) => todo.completed);
  return (
    <main className='px-24 mb-10'>
      <div className='h-[230px] w-[440px] rounded-[39px] border-2 border-[#766e5f] mx-auto flex justify-between px-14 gap-3 items-center'>
        <div className=''>
          <h1 className='text-[#dbcaae] text-[28px] font-extrabold leading-7'>Todo Done <br /><span className='text-xl text-[#c2b29a] font-normal'>Keep <span className='ml-1'>it </span> <span className='ml-1'>up</span></span></h1>
        </div>
        <div className='rounded-full h-36 w-36 bg-[#ff5631] flex items-center justify-center'>
          <h3 className='text-[#0f0e0c] font-[1000] text-4xl'>
            {/* {completedTodos?.length} / {todoData?.length} */}
          </h3>
        </div>
      </div>
      <AddTodoTasks />
      <div className='mt-10 w-full mx-auto flex flex-col items-center justify-center gap-6 max-w-[440px]'>
        {todo?.map((task: any) => {
          return (
            <div id='task' className="bg-[#1e1e1e] pr-7 h-16 border-2 border-[#766e5f] flex justify-between px-6 rounded-xl w-[440px]">
              <div className="flex items-center justify-center gap-3">
                <div className={`${task.completed === false ? 'border-[#ff5631] h-7 w-7 rounded-full border-2 ' : 'border-[#57cb4c] bg-[#57cb4c] h-7 w-7 rounded-full border-2'}`}></div>
                <h1 className={`${task.completed ? 'line-through' : ''} text-[#e6d4b7] text-[20px] font-extrabold`}>{task.name}</h1>
              </div>
              <div className="flex justify-center items-center gap-3">
                <ClipboardPen size={30} className="icon-hover text-[#9f9480] " />
                <Trash size={30} className="icon-hover text-[#9f9480] " />
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default TodoSection;











// const handleSubmit = async () => {
//   if (task.task) {
//     const res = await fetch("http://127.0.0.1:3000/todo/add", {
//       method: "POST",
//       body: JSON.stringify({
//         name: task.task,
//         description: "kuch nhi",
//         completed: false
//       })
//     })
//     console.log(res.ok)
//   }
// }