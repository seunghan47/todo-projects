import Button from "./Button"
import Projects from "./Projects"

export default function Sidebar({ projects, addNewProject }) {

    function handleClick() {
        // make a screen pop up that props for title, description, and due date

    }

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="my-8 font-bold uppercase md:text-xl text-stone-200">New Project</h2>
            <Button onClick={addNewProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" >+ Add Project</Button>
            <ul className="mt-8">
                {projects.map(project => (<Projects title={project.title} key={project.id} />))}
            </ul>
        </aside>
    )
}