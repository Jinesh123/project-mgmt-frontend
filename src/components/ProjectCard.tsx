import React from 'react'

// - Project name
// - Description (truncated if too long)
// - Status badge
// - Due date
// - Edit/Delete actions


interface IProjectCard {
    name: string;
    description: string;
    status: 'Not Started' | 'In Progress' | 'Completed';
    dueDate: Date;
    createdAt: Date;
}

const ProjectCard = ({name,status,createdAt,description,dueDate}: IProjectCard) => {
  return (
    <div className='border-2 rounded-lg px-3 py-2 shadow-lg'>
        <div className='flex justify-between'>
        <h3>{name}</h3>
        <p className='text-sm'>{status}</p>
        </div>
        <div className='text-clip text-sm'>
        {description}
        </div>
        <div>
        Due Date : {dueDate.toDateString()}
        </div>
        Created On : ss{createdAt.toDateString()}
    </div>
  )
}

export default ProjectCard