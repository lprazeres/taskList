import { PostArea, PostsContainer, PostTitle, PriorityArea, IconArea, PostAreaLow, PostAreaHigh, ButtonArea, ButtonCheckBoxArea, ButtonCheckBox, ButtonEditDeleteArea, ButtonEdit, ButtonDelete } from "./styles"
import { Smiley, Pencil, Trash } from 'phosphor-react';
import { useContext} from "react";
import { TasksContext } from "../../../context/TasksContext";

export function Posts() {

    const { tasks } = useContext(TasksContext)
 
    return (
        <PostsContainer>

            {tasks.map(task => {
                return (
                    <PostArea>
                        <PostTitle>
                            <span>
                                <h1>{task.title}</h1>
                            </span>
                            <PriorityArea>
                                Priority:
                                <IconArea>
                                    <i><Smiley size={32} color="#effb09" /></i>
                                    <span>{task.priority}</span>
                                </IconArea>
                            </PriorityArea>
                        </PostTitle>
                        <p>
                            {task.description}
                        </p>
                        <ButtonArea>
                            <ButtonCheckBoxArea>
                                <ButtonCheckBox type="checkbox"></ButtonCheckBox> <label>Is Completed?</label>
                            </ButtonCheckBoxArea>
                            <ButtonEditDeleteArea>
                                <ButtonEdit type="submit"><span><Pencil size={32} color="#0414f6" /></span><span>Edit</span></ButtonEdit >
                                <ButtonDelete type="submit"><span><Trash size={32} color="#f60428" /></span><span>Delete</span></ButtonDelete>
                            </ButtonEditDeleteArea>
                        </ButtonArea>

                    </PostArea>
                )
            })}
        </PostsContainer>
    )
}