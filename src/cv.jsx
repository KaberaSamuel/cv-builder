/* eslint react/prop-types: 0 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function Cv({ personData, workData, educationData, skillsData, contactsData }) {
  const { firstName, secondName, niche, userStatement, imageSource } =
    personData;
  const { school, degree } = educationData;
  const { address, email, phoneNumber, portifolioLink } = contactsData;
  return (
    <div id="cv">
      <section className="profile">
        <section>
          <div>
            <h3 className="names">
              {firstName} {secondName}
            </h3>
            <p className="niche">{niche}</p>
          </div>
          <div className="picture">
            <img src={imageSource} />
          </div>
        </section>

        <p className="statement">{userStatement}</p>
      </section>

      <section className="work-experience">
        <h2 className="header">Experience</h2>
        <div className="jobs">
          {workData.map((job) => {
            const { position, company, startingDate, endingDate, role, id } =
              job;
            return (
              <div key={id} className="job">
                <p className="position">{position}</p>
                <p className="company">
                  {company} | {startingDate} - {endingDate}
                </p>
                <p>{role}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="education-skills">
        <section className="education">
          <h2 className="header">Education</h2>
          <p>{school}</p>
          <p>{degree}</p>
        </section>

        <section className="skills">
          <h2 className="header">Skills</h2>
          <div className="grid">
            {skillsData.map((skillElement) => {
              return (
                <div className="skill" key={skillElement.id}>
                  <p>{skillElement.skill}</p>
                </div>
              );
            })}
          </div>
        </section>
      </section>

      <section className="contacts">
        <div>
          <FontAwesomeIcon icon={faMapLocationDot} className="icon" />
          <p>{address}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>{phoneNumber}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>{email}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faGlobe} className="icon" />
          <p>{portifolioLink}</p>
        </div>
      </section>
    </div>
  );
}

export default Cv;
