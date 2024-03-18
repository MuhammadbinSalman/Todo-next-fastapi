import React from 'react'
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
import { ScrollArea } from "@/components/ui/scroll-area"


export const TodoTasks = ({ tasks }: any) => {
    console.log(tasks)
    return (
        <>
                <div className='mt-10 w-full mx-auto flex flex-col items-center justify-center gap-6 max-w-[440px]'>
                    {tasks.map((task: any) => {
                        return (
                            <div id='task' className="bg-[#1e1e1e] pr-7 h-16 border-2 border-[#766e5f] flex justify-between px-6 rounded-xl w-[440px]">
                                <div className="flex items-center justify-center gap-3">
                                    <div className={`${task.completed === false ? 'border-[#ff5631] h-7 w-7 rounded-full border-2 ' : 'border-[#57cb4c] bg-[#57cb4c] h-7 w-7 rounded-full border-2'}`}></div>
                                    <h1 className={`${task.completed ? 'line-through' : ''} text-[#e6d4b7] text-[20px] font-extrabold`}>{task.description}</h1>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <ClipboardPen size={30} className="icon-hover text-[#9f9480] " />
                                    <Trash size={30} className="icon-hover text-[#9f9480] " />
                                </div>
                            </div>
                        )
                    })}
                </div>
        </>
    )
}
