import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import NoProject from "./components/NoProject";

function App() {

  const [selectedProject, setSelectedProject] = useState({
    projectSelected: undefined,
    projects: []
  })

  function handleCancelProject() {
    setSelectedProject((prevProject) => {
      return {
        ...prevProject,
        projectSelected: undefined,
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

  console.log(selectedProject);

  let selected;

  if (selectedProject.projectSelected === undefined) {
    selected = <NoProject addNewProject={handleStartAddProject} />
  } else if (selectedProject.projectSelected === null) {
    selected = <NewProject cancel={handleCancelProject} add={handleAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar addNewProject={handleStartAddProject} projects={selectedProject.projects} />
      {selected}
    </main>

  )
}

export default App;
