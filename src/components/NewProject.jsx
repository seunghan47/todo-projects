import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";


export default function NewProject({ cancel, add }) {

    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleSave() {

        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDate = date.current.value

        console.log(enteredDate, enteredDescription, enteredTitle);

        add({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate
        })
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={cancel} className="text-stone-800 hover:text-stone-950" >Cancel</button></li>
                <Button onClick={handleSave}>Save</Button >
            </menu>

            <Input type="text" ref={title} label="title" />
            <Input ref={description} label="description" textarea />
            <Input type="date" ref={date} label="date" />

        </div >
    )
}