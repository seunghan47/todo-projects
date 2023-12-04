import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";
import Modal from "./Modal";


export default function NewProject({ cancel, add }) {

    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleSave() {

        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDate = date.current.value

        if (enteredDate.trim() === '' || enteredTitle.trim() === '' || enteredDescription.trim() === '') {

            modal.current.open();
            return;
        }

        add({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate
        })
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
                <p className='text-stone-600 mb-4'>Oops . . inputs must all be entered</p>
                <p className='text-stone-600 mb-4'>Please try saving again after filling out everything</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={cancel} className="text-stone-800 hover:text-stone-950" >Cancel</button></li>
                    <Button onClick={handleSave}>Save</Button >
                </menu>

                <Input type="text" ref={title} label="title" />
                <Input ref={description} label="description" textarea />
                <Input type="date" ref={date} label="date" />

            </div >
        </>
    )
}