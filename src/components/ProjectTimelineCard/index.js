import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-card-bg">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="course-title-container">
        <h1 className="course-title-h1">{projectTitle}</h1>
        <div className="course-duration-icon-container">
          <AiFillCalendar className="clock-icon" />
          <p className="course-duration-p">{duration}</p>
        </div>
      </div>

      <p className="course-description">{description}</p>
      <a href={projectUrl} target="_self" className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
