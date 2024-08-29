
import { Task } from "@/app/api/task/route"
import { Metadata } from "next"
import { LisTaskDone } from "../task-done/LisTaskDone"
import { Form } from "../components/Form"

export const metadata: Metadata = {
    title: "Listado de Tareas",
    description: "Esta es la página de listado de tareas",
    keywords: ["Next.js", "React", "TypeScript", "List"],
}

export default async function ListTaskPage() {
    const res = await fetch('http://localhost:3000/api/task')
    const listTask: Task[] = await res.json()

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">List Task Page</h1>
            <Form />
            <LisTaskDone listTask={listTask} />
        </div>
    )
}
