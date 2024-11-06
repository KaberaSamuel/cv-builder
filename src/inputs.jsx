/* eslint react/prop-types: 0 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faScrewdriverWrench,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function PersonalDataInput({ personData, functions }) {
  const { firstName, secondName, niche, userStatement } = personData;
  const { handleInputChange, handleImageChange } = functions;

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

function WorkExperience({ workData, handleChange }) {
  const hasManyJobs = workData.length > 1;
  const jobsOutput = workData.map((work) => {
    const { position, company, startingDate, endingDate, role, id } = work;

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
            type="text"
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

export { PersonalDataInput, WorkExperience };
