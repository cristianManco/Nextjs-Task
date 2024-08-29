"use client";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-100 flex flex-col">
      <h2 className="text-2xl font-bold text-center p-4">
        App <span className="text-blue-700">to-do</span>
      </h2>

      <div className="flex flex-col justify-center items-center">
        <Image
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid"
          alt="Avatar User"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h4 className="mt-3 text-xl">Cristian Manco</h4>
      </div>
      <div className="flex flex-col text-center">
        <Link href="/to-do/list-task">Lista de tareas</Link>
        <Link href="/to-do/task-done">Tareas realizadas</Link>
        <Link href="/">Contador</Link>
      </div>
    </div>
  );
}
