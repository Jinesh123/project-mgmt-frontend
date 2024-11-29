import ProjectCard from "./ProjectCard"

const Dashboard = () => {
  return (
    <div>
        <h1 className="w-full text-center text-[30px] my-5">Project Management</h1>
        <ProjectCard name="Project 1" description="test project" status="Not Started" dueDate={new Date()} createdAt={new Date()}/>
    </div>
  )
}

export default Dashboard