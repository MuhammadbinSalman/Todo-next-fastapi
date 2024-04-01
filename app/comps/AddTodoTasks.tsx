'use client'
import React, { useEffect, useState } from 'react'
import { ClipboardPen, Trash } from "lucide-react"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import toast, { Toaster } from 'react-hot-toast';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import fetchTodo from './Fetchtodo'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"



const AddTodoTasks = () => {
    const [task, setTask] = useState<any>({ task: "" });
    const handleSubmit = async () => {
        if (task.task) {
            try {
                const res = await fetch("http://127.0.0.1:3000/todo/add", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json", // Set the content type
                    },
                    body: JSON.stringify({
                        name: task.task,
                        description: "kuch nhi",
                        completed: false
                    })
                })
                console.log(res.ok)
            } catch (error) {
                console.log("error")
            }
        }
    }
    const handleChange = (e: any) => {
        setTask({ task: e.target.value });
    }
    const notify = () => toast('Here is your toast.');
    console.log(task, "🤡🤡")
    return (
        <>
            <div className='flex items-center mt-9 justify-center gap-3'>
                <input onChange={handleChange} placeholder="Write your next task" className="border-none placeholder:text-[#70685c] text-[#e6d4b7] py-1.5 pl-6 bg-[#1e1e1e] w-full rounded-xl max-w-[370px]" />
                {/* <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger> */}
                <button onClick={() => {
                    // handleSubmit();
                    notify
                     }} className="rounded-full h-[37px] cursor-pointer w-[37px] bg-[#ff5631] text-lg flex justify-center items-center font-extrabold">+</button>
                {/* </TooltipTrigger>
                        <TooltipContent>
                            <p className="text-[#e6d4b7]">Add a new task</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider> */}


            </div>
        </>
    )
}

export default AddTodoTasks;