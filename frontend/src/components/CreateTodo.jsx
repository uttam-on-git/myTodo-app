import { useState } from "react"

export function CreateTodo() {

    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("")
    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 20
        }} type="text" placeholder="title"></input> <br />
        <input id="desc" style={{
            padding: 10,
            margin: 20
        }} type="text" placeholder="description"></input> <br />

        <button style={{
            padding: 10,
            margin: 20
        }} onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: {
                    title: hn,
                    description:hn
                }
            })
        }}>Add a todo</button>
    </div>   
}