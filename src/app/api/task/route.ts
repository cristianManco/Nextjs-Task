import { NextResponse } from "next/server";

// interface para las tareas
export interface Task {
  id: number;
  title: string;
  description: string;
  date: string;
  completed: boolean;
  createdAt: Date;
}


// array quemado como base de datos
let tasks: Task[] = [
  {
    id: 1,
    title: "Tarea 1",
    description: "Esta es la descripción de la tarea 1",
    date: "2022-01-01",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Tarea 2",
    description: "Esta es la descripción de la tarea 2",
    date: "2022-01-02",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Tarea 3",
    description: "Esta es la descripción de la tarea 3",
    date: "2022-01-03",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 4,
    title: "Tarea 4",
    description: "Esta es la descripción de la tarea 4",
    date: "2022-01-04",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "Tarea 5",
    description: "Esta es la descripción de la tarea 5",
    date: "2022-01-023",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 6,
    title: "Tarea 6",
    description: "Esta es la descripción de la tarea 6",
    date: "2022-01-06",
    completed: false,
    createdAt: new Date(),
  },
];

// GET: Obtener todas las tareas, filtradas por estado
export async function GET(req: Request) {
  const url = new URL(req.url);
  const status = url.searchParams.get("status");
  let taskFilter = tasks;

  if (status === "completed") {
    taskFilter = tasks.filter((t) => t.completed === true);
  } else if (status === "pending") {
    taskFilter = tasks.filter((t) => t.completed === false);
  }

  const sortedTasks = taskFilter.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return NextResponse.json(sortedTasks);
}

// POST: Crear una nueva tarea
export async function POST(req: Request) {
  const newTask: Task = await req.json();
  newTask.id = tasks.length + 1;
  newTask.createdAt = new Date();
  tasks.push(newTask);
  return NextResponse.json(tasks);
}

// PUT: Actualizar una tarea existente
export async function PUT(req: Request) {
  const updatedTask: Task = await req.json();
  const index = tasks.findIndex((t) => t.id === updatedTask.id);

  if (index === -1) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  tasks[index] = { ...tasks[index], ...updatedTask };
  return NextResponse.json(tasks[index]);
}

// DELETE: Eliminar una tarea
export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = parseInt(url.searchParams.get("id") || "");

  if (!id) {
    return NextResponse.json({ error: "Task ID is required" }, { status: 400 });
  }

  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  tasks.splice(index, 1);
  return NextResponse.json({ message: "Task deleted successfully" });
}
