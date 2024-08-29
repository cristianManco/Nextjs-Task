"use client"

import { useState, ChangeEvent, FormEvent } from "react"

export const Form = () => {
    const [formState, setFormState] = useState({
        name: '',
        description: '',
        date: ''
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormState({ ...formState, [name]: value })
    }

    const handleSubmit = (e: FormEvent <HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted:', formState)
        // Lógica para enviar la información al backend (API)
        fetch('/api/task/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formState),
        })
           .then(response => response.json())
           .then(data => console.log('API response:', data))
           .catch(error => console.error('Error:', error))

        // Reiniciar el estado del formulario si es necesario
        setFormState({ name: '', description: '', date: '' })
    }

    return (
        <form className="flex flex-col gap-5 m-10" onSubmit={handleSubmit}>
            <div className="w-50 flex flex-col">
                <label htmlFor="date">Fecha de la tarea</label>
                <input
                    type="datetime-local"
                    id="date"
                    name="date"
                    value={formState.date}
                    onChange={handleInputChange}
                />

                <label htmlFor="name">Nombre de la tarea</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Add a task"
                />

                <label htmlFor="description">Descripción</label>
                <textarea
                    id="description"
                    name="description"
                    value={formState.description}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Add Task
            </button>
        </form>
    )
}
