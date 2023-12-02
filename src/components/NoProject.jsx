import noProjectImage from '../assets/no-projects.png'
import Button from './Button';

export default function NoProject({ addNewProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img
                src={noProjectImage}
                alt="empty task list"
                className='w-16 h-16 object-contain mx-auto' />
            <h1 className='text-xl font-bold text-stone-500 my-4'>
                No Project Selected
            </h1>
            <p className='text-stone-400 mb-4'>Select a project or start with a new one</p>
            <p className='mt-8'>
                <Button onClick={addNewProject}>Create a new project</Button>
            </p>
        </div >
    );
}