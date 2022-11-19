import './App.css';
import Experience from './components/Experience.jsx';
import Profile from './components/Profile.jsx';
import Hobby from './components/Hobby.jsx';
import Technology from './components/Technology.jsx';
import Project from './components/Project.jsx';
import Other from './components/Other.jsx';
import BreakDown from './components/BreakDown.jsx';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function useProjects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('json/projects.json')
      .then(res => res.json())
      .then(projects_json => { setProjects(projects_json) })
  }, [])

  return projects;
}

function useTechsFrontEnd() {
  const [techs, setTechs] = useState([]);
  useEffect(() => {
    fetch('json/techs-frontend.json')
      .then(res => res.json())
      .then(techs_json => { setTechs(techs_json) })
  }, [])
  return techs;
}

function useTechsDesign() {
  const [techs, setTechs] = useState([]);
  useEffect(() => {
    fetch('json/techs-design.json')
      .then(res => res.json())
      .then(techs_json => { setTechs(techs_json) })
  }, [])
  return techs;
}
function useExperiences() {
  const [xps, setXps] = useState([]);
  useEffect(() => {
    fetch('json/experiences.json')
      .then(res => res.json())
      .then(xps_json => { setXps(xps_json) })
  }, [])
  return xps;
}

function useOthers() {
  const [others, setOthers] = useState([]);
  useEffect(() => {
    fetch('json/others.json')
      .then(res => res.json())
      .then(others => { setOthers(others) })
  }, [])
  return others;
}

function useHobbies() {
  const [hobbies, setHobbies] = useState([]);
  useEffect(() => {
    fetch('json/hobbies.json')
      .then(res => res.json())
      .then(hobby => { setHobbies(hobby) })
  }, [])
  return hobbies;
}

function App() {

  const projects = useProjects();
  const techs_frontend = useTechsFrontEnd();
  const techs_design = useTechsDesign();
  const xps = useExperiences();
  const others = useOthers();
  const hobbies = useHobbies();

  return (
    <div className='App'>
      <div className='main'>
        <div className='container-left'>
          <Profile
            name='Carlos Ramirez'
            career='Front-end developer'
            mail='cr9474320@gmail.com'
            phonenumber='+51 900899785' />
          <div className='container-experiences'>
            <h3>Experiences</h3>
            {
              xps.map(xp => (
                <Experience
                  key={uuidv4()}
                  company={xp.company}
                  date={xp.date}
                  job={xp.job}
                  about={xp.about}
                />
              ))
            }
          </div>

          <div className='container-hobbies'>
            <h3>Hobbies</h3>
            {
              hobbies.map(hobby => (
                <Hobby
                  key={uuidv4()}
                  hobby={hobby.hobby}
                  description={hobby.description} />
              ))
            }
          </div>
        </div>

        <div className='container-right'>
          <div className='container-careers'>
            <div className='container-technologies'>
              <h3>Front end</h3>
              <p className='title-years'>Years of experience 1 - 2</p>
              {
                techs_frontend.map(tech => (
                  <Technology
                    key={uuidv4()}
                    technology={tech.technology}
                    progress={tech.progress} />
                ))
              }
            </div>
            <div className='container-technologies'>
              <h3>Design</h3>
              <p className='title-years'>Years of experience 1 - 2</p>
              {techs_design.map(tech => (
                <Technology
                  key={uuidv4()}
                  technology={tech.technology}
                  progress={tech.progress} />
              ))}

            </div>
          </div>
          <BreakDown
            nameBD={`Projects (${projects.length})`} />
          {
            projects.map(project => (
              <Project
                key={uuidv4()}
                project={project.project}
                tags={project.tags}
                title={project.title}
                description={project.description}
                linkdemo={project.linkdemo}
                linkcode={project.linkcode} />
            ))
          }


          <BreakDown
            nameBD={`Others (${others.length})`} />
          {

            others.map(other => (
              <Other
                key={uuidv4()}
                title={other.title}
                description={other.description}
                linkdemo={other.linkdemo}
                img={other.img}
              />
            ))
          }
        </div>
      </div>

      <div className='credit'><p>created by <a href='https://github.com/Tzzent'>Tzzent</a> - <a href='https://devchallenges.io'>devChallenges.io</a></p></div>
    </div>
  );
}

export default App;
