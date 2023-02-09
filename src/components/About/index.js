import { useEffect, useState } from 'react'
import { faAngular, faJava, faJsSquare, faMicrosoft, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
              lettersClass={letterClass}
            />
          </h1>
          <p>
            Skilled Full-stack web and mobile developer is eager to join a creative, problem-solving team.
          </p>
          <p>
            {' '}
            Ability to learn and implement new technologies quickly.
          </p>
          <p>
            I am a great team player, having successfully collaborated with the product and QA team to ensure the users have the best experience.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#f06529" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="green" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#28a4d9" />
            </div>
            <div className="face7">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face8">
              <FontAwesomeIcon icon={faMicrosoft} color="#03a4e6" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
