import { Nav } from "./comps/Nav";
import TodoSection from "./comps/TodoSection";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import AddTodoTasks from "./comps/AddTodoTasks";
import { Ban, ClipboardPen, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

async function fetchTodo() {
  const response: any = await fetch('http://127.0.0.1:3000/api/todo', {
    method: "get",
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    next: { revalidate: 1600 }
  })
  if (!response.ok) {
    throw new Error('Fail hogya fetch todo');
  }
  const todoData: any = await response.json();
  return todoData;

}
export default async function Home() {
  const data = await fetchTodo()
  console.log(data, "data from db");
  const completedTodos: any = await data?.filter((todo: any) => todo.completed);
  
  return (
    <>
      <Nav />
      <main className='px-24 mb-10'>
        <div className='h-[230px] w-[440px] rounded-[39px] border-2 border-[#766e5f] mx-auto flex justify-between px-14 gap-3 items-center'>
          <div className=''>
            <h1 className='text-[#dbcaae] text-[28px] font-extrabold leading-7'>Todo Done <br /><span className='text-xl text-[#c2b29a] font-normal'>Keep <span className='ml-1'>it </span> <span className='ml-1'>up</span></span></h1>
          </div>
          <div className='rounded-full h-36 w-36 bg-[#ff5631] flex items-center justify-center'>
            <h3 className='text-[#0f0e0c] font-[1000] text-4xl'>
              {completedTodos?.length} / {data?.length}
            </h3>
          </div>
        </div>
        <AddTodoTasks />
        <div className='mt-10 w-full mx-auto flex flex-col items-center justify-center gap-6 max-w-[440px]'>
          {data?.map((task: any) => {
            return (
              <div id='task' className="bg-[#1e1e1e] pr-7 h-16 border-2 border-[#766e5f] flex justify-between px-6 rounded-xl w-[440px]">
                <div className="flex items-center justify-center gap-3">
                  <div className={`${task.completed === false ? 'border-[#ff5631] h-7 w-7 rounded-full border-2 ' : 'border-[#57cb4c] bg-[#57cb4c] h-7 w-7 rounded-full border-2'}`}></div>
                  <h1 className={`${task.completed ? 'cutted-text' : ''} text-[#e6d4b7] text-[20px] font-extrabold`}>{task.name}</h1>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <Drawer>
                    <DrawerTrigger><ClipboardPen size={30} className="icon-hover text-[#9f9480] " /></DrawerTrigger>
                    <DrawerContent className="border-x-0 h-64 rounded-t-xl border-zinc-800 bg-zinc-950">
                      <div className="mx-auto w-28 rounded-l-xl -mt-[12px]  h-2 rounded-r-xl bg-zinc-700" />
                      <div className="mx-auto w-full flex justify-center pt-9 max-w-[400px]">
                        <DrawerHeader className="text-white">
                          <DrawerTitle className="flex gap-4 justify-between">
                            <Input placeholder="Edit your todo" className="w-full max-w-[230px] placeholder:text-[#70685c] border-white text-[#e6d4b7]" />
                            <div className="flex items-center space-x-2">
                              <Checkbox id="Completed" className="bg-white text-black" /> <label htmlFor="Completed" className="text-[15px]">Completed</label>
                            </div>
                          </DrawerTitle>
                        </DrawerHeader>
                      </div>
                      <DrawerFooter className="text-white">
                        <div className="mx-auto w-full max-w-[340px] flex flex-col gap-2">
                          <Button className="bg-white text-zinc-950">Update Todo<Plus className="ml-1" size={16} color="rgb(9 9 11)" /></Button>
                          <DrawerClose asChild>
                            <Button className="hover:bg-red-500 border-zinc-800" variant="outline">Cancel<Ban className="ml-1.5" size={16} color="white" /></Button>
                          </DrawerClose>
                        </div>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                  <Trash size={30} className="icon-hover text-[#9f9480] " />
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  );
}
