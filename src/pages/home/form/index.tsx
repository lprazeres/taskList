import { useContext } from "react";
import { TasksContext } from "../../../context/TasksContext";
import { FormContainer, FormContent } from "./styles";


export function Form() {
    
    const {handleNewTask, handleTitle, handlePriority, handleDescription } = useContext(TasksContext)


    return (
        <FormContainer onSubmit={handleNewTask}>

            <h1>Activity:</h1>

            <FormContent>
                <label>Title:</label>
                <input type="text" placeholder="Enter the title" onChange={handleTitle}></input>
            </FormContent>


            <FormContent>
                <label>Priority:</label>
                <select name="priority" id="priority" onClick={handlePriority}>
                    <option value="1" id="basic" value={'Basic'}>Basic</option>
                    <option value="2" id="normal" value={'Normal'}>Normal</option>
                    <option value="2" id="high" value={'High'}>High</option>
                </select>
            </FormContent>

            <FormContent>
                <label>Description:</label>
                <textarea placeholder="Enter the description" onChange={handleDescription}></textarea>
            </FormContent>

            <button type="submit">Send</button>


        </FormContainer>
    )
}