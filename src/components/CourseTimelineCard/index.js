// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails

  return (
    <div className="course-timeline-bg">
      <div className="course-title-container">
        <h1 className="course-title-h1">{courseTitle}</h1>
        <div className="course-duration-icon-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="course-duration-p">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="taglist-div">
        {tagsList.map(each => (
          <button type="button" key={each.id} className="taglist-btn">
            {each.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
