/* eslint react/prop-types: 0 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faScrewdriverWrench,
  faPlus,
  faTrashCan,
  faGraduationCap,
  faUserGear,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

// interfaces for props types
interface PersonDataProps {
  firstName: string;
  secondName: string;
  niche: string;
  userStatement: string;
  imageSource: string;
}

interface PersonalDataInputProps {
  personData: PersonDataProps;
  handleInputChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    propertyName: string
  ) => void;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface JobProps {
  position: string;
  company: string;
  startingDate: string;
  endingDate: string;
  role: string;
  id: number;
}

interface WorkHandlerDataProps {
  element?: HTMLInputElement | HTMLTextAreaElement;
  id?: number;
  property?: string;
  addNewJob?: boolean;
  deleteJob?: boolean;
}

interface WorkExperienceProps {
  jobs: JobProps[];
  handleChange: (workHandlerData: WorkHandlerDataProps) => void;
}

function PersonalDataInput({
  personData,
  handleInputChange,
  handleImageChange,
}: PersonalDataInputProps) {
  const { firstName, secondName, niche, userStatement } = personData;

  return (
    <div className="personal-data">
      <div className="header">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <h2> Personal Data</h2>
      </div>

      <div className="names">
        <input
          type="text"
          value={firstName}
          placeholder="First name"
          onChange={(e) => handleInputChange(e, "firstName")}
        />
        <input
          type="text"
          value={secondName}
          placeholder="Last name"
          onChange={(e) => handleInputChange(e, "secondName")}
        />
      </div>

      <div className="niche">
        <input
          type="text"
          placeholder="Niche: Front-end Developer"
          value={niche}
          onChange={(e) => handleInputChange(e, "niche")}
        />
      </div>

      <div className="profile-picture">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e)}
        />
      </div>

      <div className="user-statement">
        <textarea
          placeholder="Tell something about yourself to make you stand out"
          value={userStatement}
          onChange={(e) => handleInputChange(e, "userStatement")}
        ></textarea>
      </div>
    </div>
  );
}

function WorkExperience({ jobs, handleChange }: WorkExperienceProps) {
  const hasManyJobs = jobs.length > 1;
  const jobsOutput = jobs.map((job) => {
    const { position, company, startingDate, endingDate, role, id } = job;

    // returning individual work experience item
    return (
      <div className="work" id={id} key={id}>
        {hasManyJobs && (
          <div className="work-title">
            <p>Experience {id + 1}</p>
            <FontAwesomeIcon
              icon={faTrashCan}
              className="icon"
              onClick={() => {
                handleChange({ deleteJob: true });
              }}
            />
          </div>
        )}
        <div>
          <input
            type="text"
            value={position}
            placeholder="position"
            onChange={(e) => {
              handleChange({
                element: e.target,
                id: id,
                property: "position",
              });
            }}
          />
        </div>

        <div>
          <input
            type="text"
            value={company}
            placeholder="company"
            onChange={(e) => {
              handleChange({
                element: e.target,
                id: id,
                property: "company",
              });
            }}
          />
        </div>

        <div>
          <input
            type="text"
            value={startingDate}
            placeholder="Start date: day/month/year"
            onChange={(e) => {
              handleChange({
                element: e.target,
                id: id,
                property: "startingDate",
              });
            }}
          />
        </div>

        <div>
          <input
            type="text"
            value={endingDate}
            placeholder="End date: day/month/year"
            onChange={(e) => {
              handleChange({
                element: e.target,
                id: id,
                property: "endingDate",
              });
            }}
          />
        </div>

        <div>
          <textarea
            value={role}
            placeholder="your role at this job"
            onChange={(e) => {
              handleChange({
                element: e.target,
                id: id,
                property: "role",
              });
            }}
          />
        </div>
      </div>
    );
  });

  // actual whole element represent all inputs related to work experience
  return (
    <div className="work-experience-container">
      <div className="header">
        <FontAwesomeIcon icon={faScrewdriverWrench} className="icon" />
        <h2>Work Experience</h2>
      </div>
      {jobsOutput}
      {!hasManyJobs && (
        <div>
          {" "}
          <FontAwesomeIcon
            icon={faPlus}
            className="icon add"
            onClick={() => {
              handleChange({ addNewJob: true });
            }}
          />
        </div>
      )}
    </div>
  );
}

function Education({ educationData, handleChange }) {
  const { school, degree } = educationData;
  return (
    <div className="education">
      <div className="header">
        <FontAwesomeIcon icon={faGraduationCap} className="icon" />
        <h2>Education</h2>
      </div>

      <div>
        <input
          type="text"
          value={school}
          placeholder="school"
          onChange={(e) => {
            handleChange(e.target, "school");
          }}
        />
      </div>

      <div>
        <input
          type="text"
          value={degree}
          placeholder="degree"
          onChange={(e) => {
            handleChange(e.target, "degree");
          }}
        />
      </div>
    </div>
  );
}

function Skills({ skillsData, handleChange }) {
  const hasManySkills = skillsData.length > 1;
  const skillsOutput = skillsData.map((skillItem) => {
    const { id, skill } = skillItem;
    return (
      <div key={id} className="skill">
        <input
          type="text"
          value={skill}
          placeholder="Language or Technology"
          maxLength={15}
          onChange={(e) => {
            handleChange({ element: e.target, elementId: id });
          }}
        />

        {hasManySkills && (
          <FontAwesomeIcon
            icon={faTrashCan}
            className="icon"
            onClick={() => handleChange({ elementId: id, deleteSkill: true })}
          />
        )}
      </div>
    );
  });

  return (
    <div className="skills-input">
      <div className="header">
        <FontAwesomeIcon icon={faUserGear} className="icon" />
        <h2>Skills</h2>
      </div>

      {skillsOutput}

      <div>
        <FontAwesomeIcon
          icon={faPlus}
          className="icon"
          onClick={() => {
            handleChange({ addNewSkill: true });
          }}
        />
      </div>
    </div>
  );
}

function Contacts({ contactsData, handleChange }) {
  const { address, email, phoneNumber, portifolioLink } = contactsData;
  return (
    <div className="contacts-input">
      <div className="header">
        <FontAwesomeIcon icon={faAddressBook} className="icon" />
        <h2>Contacts</h2>
      </div>

      <div>
        <input
          type="text"
          value={address}
          placeholder="address"
          onChange={(e) => {
            handleChange(e.target, "address");
          }}
        />
      </div>

      <div className="email-address">
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => {
            handleChange(e.target, "email");
          }}
        />

        <input
          type="text"
          value={phoneNumber}
          placeholder="phone number"
          onChange={(e) => {
            handleChange(e.target, "phoneNumber");
          }}
        />
      </div>

      <div>
        <input
          type="text"
          value={portifolioLink}
          placeholder="link to portifolio"
          onChange={(e) => {
            handleChange(e.target, "portifolioLink");
          }}
        />
      </div>
    </div>
  );
}

// function Skills()
export { PersonalDataInput, WorkExperience, Education, Skills, Contacts };
