import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const titleList = timelineItemsList.map(each => {
    const {title} = each
    return {title}
  })

  const timelineTheme = {
    primary: '#0967d2',
    secondary: '#ffffff',
    cardBgColor: 'yellow',
    cardForeColor: 'violet',
    titleColor: 'red',
  }

  return (
    <div className="timeline-view-bg">
      <h1 className="my-journey-h1">
        MY JOURNEY OF <br /> <span className="ccbp-title">CCBP 4.0 </span>
      </h1>
      <Chrono
        items={titleList}
        mode="VERTICAL_ALTERNATING"
        theme={timelineTheme}
      >
        {timelineItemsList.map(each =>
          each.categoryId === 'COURSE' ? (
            <CourseTimelineCard courseDetails={each} key={each.id} />
          ) : (
            <ProjectTimeLineCard projectDetails={each} key={each.id} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
