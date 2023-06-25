import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap} from 'react-icons/fa';
export const Education = () => {
  return (
    <div id="education">
      <h2 align="center">Education</h2>
          <VerticalTimeline lineColor='#f5f5f5'>
              <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  iconStyle={{ background: 'rgb(218, 112, 214)', color: '#fff' }}
                  icon={<FaGraduationCap />}
                  date='2023-2024'
              >
                  <h1 className="vertical-timeline-element-title">
                      Second degree in software engineering
                  </h1>
                  <p>
                      En cours
                  </p>
              </VerticalTimelineElement>
       
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: '#422b7c', color: '#fff' }}
        icon={<FaGraduationCap />}
        date='2019-2022'
      >
        <h1 className="vertical-timeline-element-title" style={{color:"#982e30"}}>Bachelor's degree in computer science, software engineering specialty</h1>
        <p>
          Avec mention trés bien
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: '#2150b0', color: '#fff' }}
        icon={<FaGraduationCap />}
        date='2015-2019'
      >
        <h1 className="vertical-timeline-element-title" style={{color:"#645db7"}}>Bachelor in Experimental Science</h1>
        <p>
          Avec mention assez Bien
        </p>
      </VerticalTimelineElement>

      {/* Add more VerticalTimelineElement components as needed */}
    </VerticalTimeline>
    </div>
  )
}


