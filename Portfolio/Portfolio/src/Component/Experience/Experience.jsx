import './Experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const frontSkills = [
  { 'name': "HTML", "level": "Experienced" },
  { 'name': "CSS3", "level": "intermediate" },
  { 'name': "JavaScript", "level": "intermediate" },
  { 'name': "React", "level": "intermediate" },
  { 'name': "SASS", "level": "Experienced" },
  { 'name': "Git", "level": "Experienced" },
  { 'name': "Postman", "level": "intermediate" },
  { 'name': "Figma", "level": "intermediate" },
];
const softSkills = [
  { 'name': "Teamwork", "level": "Experienced" },
  { 'name': "Adaptability", "level": "Experienced" },
  { 'name': "Leadership", "level": "Experienced" },
  { 'name': "Growth mindset", "level": "Experienced" },
  { 'name': "Self-management", "level": "Experienced" },
  { 'name': "Problem-Solving", "level": "Experienced" },
  { 'name': "Time-management", "level": "Experienced" },
  { 'name': "Communication", "level": "Experienced" },
]


const Experience = () => {
  return (
    <section id='Experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {
              frontSkills.map((skill) => {
                return (
                  <article key={skill.name} className="experience__details">
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>{skill.name}</h4>
                      <small className="text-light">{skill.level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
        <div className="experience__general">
          <h3>Soft Skills</h3>
          <div className="experience__content">
            {
              softSkills.map((skill) => {
                return (
                  <article key={skill.name} className="experience__details">
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>{skill.name}</h4>
                      <small className="text-light">{skill.level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience