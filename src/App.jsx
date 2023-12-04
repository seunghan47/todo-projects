import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [selectedProject, setSelectedProject] = useState({
    projectSelected: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text) {
    setSelectedProject(prevProject => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevProject.projectSelected,
        id: taskId
      }

      return {
        ...prevProject,
        tasks: [...prevProject.tasks, newTask],

      }
    })
  }

  function handleDeleteTask(id) {
    setSelectedProject((prevProject) => {
      return {
        ...prevProject,
        tasks: prevProject.tasks.filter(task => id !== task.id)
      }
    })
  }

  function handleSelectProject(id) {
    setSelectedProject(prevProject => {
      return {
        ...prevProject,
        projectSelected: id
      }
    })
  }

  function handleCancelProject() {
    setSelectedProject((prevProject) => {
      return {
        ...prevProject,
        projectSelected: undefined,
      }
    })
  }

  function handleDeleteProject() {
    setSelectedProject((prevProject) => {
      return {
        ...prevProject,
        projectSelected: undefined,
        projects: prevProject.projects.filter(project => prevProject.projectSelected !== project.id)
      }
    })
  }

  function handleStartAddProject() {
    setSelectedProject(prevProject => {
      return {
        ...prevProject,
        projectSelected: null
      }
    })
  }

  function handleAddProject(projectData) {

    const data = {
      ...projectData,
      id: Math.random()
    }

    setSelectedProject(prevProject => {
      return {
        ...prevProject,
        projects: [...prevProject.projects, data],
        projectSelected: undefined
      }
    })
  }

  const selectedProjects = selectedProject.projects.find(project => project.id === selectedProject.projectSelected)

  let selected = <SelectedProject
    project={selectedProjects}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={selectedProject.tasks}
  ></SelectedProject>;

  if (selectedProject.projectSelected === undefined) {
    selected = <NoProject addNewProject={handleStartAddProject} />
  } else if (selectedProject.projectSelected === null) {
    selected = <NewProject cancel={handleCancelProject} add={handleAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        addNewProject={handleStartAddProject}
        projects={selectedProject.projects}
        selectProject={handleSelectProject} />
      {selected}
    </main>

  )
}

export default App;
