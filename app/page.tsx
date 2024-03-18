import { Nav } from "./comps/Nav";
import TodoSection from "./comps/TodoSection";



export default function Home() {
  return (
    <>
    <Nav/>
    {/* Ts-ignore */}
    <TodoSection/>
    </>
  );
}
