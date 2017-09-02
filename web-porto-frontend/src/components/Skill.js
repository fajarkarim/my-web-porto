
import React, { Component } from 'react'
import { RadarChart, Radar, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
import { Link } from 'react-router-dom'

const data = [
    { subject: 'HTML', A: 80, fullMark: 100 },
    { subject: 'CSS', A: 50, fullMark: 100 },
    { subject: 'Vue', A: 75, fullMark: 100 },
    { subject: 'React', A: 70, fullMark: 100 },
    { subject: 'Databases', A: 75, fullMark: 100 },
    { subject: 'Deployment', A: 65, fullMark: 100 },
    { subject: 'ExpressJS', A: 85, fullMark: 100 },
    { subject: 'React Native', A: 65, fullMark: 100 },
];

class Skill extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-around'>
          <div className='col'>
            <RadarChart outerRadius={90} width={350} height={400} data={data}>
              <Radar name="Fajar's Strength" dataKey="A" stroke="#fc4a1a" fill="#fc4a1a" fillOpacity={0.6} />
              <PolarGrid />
              <Legend legendType="circle"/>
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
            </RadarChart>
          </div>
          <div className="col mt-md-5 mb-2">
            <div className="card-body">
              <h4 className="card-title"><i><strong>Hei..</strong></i></h4>
              <p className="card-text">I created some projects to prove i got understanding in that Javascript's technology. I love created things, but i have more interest in backend and react-native</p>
              <p className="card-text">checkout <a target="_blank" href="https://github.com/fajarkarim/rest-api">here</a> and <a target="_blank" href="http://bit.ly/hacktivOver"> here </a>to see my understanding in backend and database</p>
              <p className="card-text">checkout <a target="_blank" href="http://bit.ly/knbnHacktiv">here</a>, <a target="_blank" href="https://github.com/fajarkarim/hacktiv-overflow/tree/master/overflow">here</a>, and <a target="_blank" href="https://github.com/fajarkarim/my-web-porto">here</a> to see my understanding in frontend</p>
              <p className="card-text">checkout <a target="_blank" href="https://github.com/fajarkarim/sentiment-analysis-media">here</a> and <a target="_blank" href="https://github.com/fajarkarim/thumb-wars">here</a> to see when i'm in a team</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skill
