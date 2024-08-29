import { Task } from "@/app/api/task/route"

export const LisTaskDone = ({ listTask }: { listTask: Task[] }) => {
    return (
        <div className="overflow-x-auto mt-5">
            <table className="min-w-full bg-slate-400 shadow-md rounded-lg overflow-hidden border-separate">
                <thead className="bg-slate-500">
                    <tr>
                        <th className="py-2 text-left font-semibold text-neutral-950">Title</th>
                        <th className="py-2 text-left font-semibold text-neutral-950">Description</th>
                        <th className="py-2 text-left font-semibold text-neutral-950">Date</th>
                        <th className="py-2 text-left font-semibold text-neutral-950">Completed</th>
                        <th className="py-2 text-left font-semibold text-neutral-950">CreatedAt</th>
                    </tr>
                </thead>
                <tbody className="border-separate">
                    {listTask.map(task => (
                        <tr key={task.id}>
                            <td className="py-2 px-6 border-b border-slate-400 text-neutral-950">{task.title}</td>
                            <td className="py-2 px-6 border-b border-slate-400 text-neutral-950">{task.description}</td>
                            <td className="py-2 px-6 border-b border-slate-400 text-neutral-950">{task.date}</td>
                            <td className="py-2 px-6 border-b border-slate-400 text-neutral-950">{task.completed}</td>
                            <td className="py-2 px-6 border-b border-slate-400 text-neutral-950">{new Date(task.createdAt).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

