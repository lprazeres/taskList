import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

export interface Task {
    id: number;
    title: string;
    priority: 'normal' | 'low' | 'high';
    isCompleted: boolean;
    description: string;
}

interface TasksContextType {
    tasks: Task[];
}

interface TasksProviderProps {
    children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType);

export function TasksProvider({ children }: TasksProviderProps) {

    const [tasks, setTasks] = useState<Task[]>([])

    async function loadTasks() {
        const response = await fetch('http://localhost:3336/tasks')
        const data = await response.json()

        setTasks(data)
    }

    useEffect(() => {
        loadTasks();
    }, [])

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');

    function handleTitle(event: string) {
        setTitle(event.target.value)
    }
    function handleDescription(event: string) {
        setDescription(event.target.value)
    }
    function handlePriority(event: string) {
        setPriority(event.target.value)
    }

    
    function handleNewTask(e: any) {
        e.preventDefault()

        const task = {
            id: uuidv4(),
            title: title,
            priority: priority,
            description: description,
            isCompleted: false,
        }

        console.log(task)
        postNewTask(task)
    }

    async function postNewTask(task){

        alert(`${task.title}, ${task.description}, ${task.priority}, ${task.id}`);
        /*
        await fetch('http://localhost:3336/tasks').post('tasks',{
            task,
        })
        */
    }


    return (
        <TasksContext.Provider value={{
            tasks,
            handleNewTask,
            handleTitle,
            handleDescription,
            handlePriority
        }}>
            {children}
        </TasksContext.Provider>
    )
}