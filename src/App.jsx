/* eslint react/prop-types: 0 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function PersonalDataInput({ personData, functions }) {
  const { firstName, secondName, niche, userStatement } = personData;
  const {
    handleFirstNameChange,
    handleSecondNameChange,
    handleNicheChange,
    handleImageChange,
    handleUserStatementChange,
  } = functions;

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
          onChange={(e) => handleFirstNameChange(e)}
        />
        <input
          type="text"
          value={secondName}
          placeholder="Last name"
          onChange={(e) => handleSecondNameChange(e)}
        />
      </div>

      <div className="niche">
        <input
          type="text"
          placeholder="Niche: Front-end Developer"
          value={niche}
          onChange={(e) => handleNicheChange(e)}
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
          onChange={(e) => handleUserStatementChange(e)}
        ></textarea>
      </div>
    </div>
  );
}

function WorkExperience({ workData, functions }) {
  const { position, company, startingDate, endingDate, role } = workData;
  const {
    handlePositionChange,
    handleCompanyChange,
    handleStartingDateChange,
    handleEndingDateChange,
    handleRoleChange,
  } = functions;
  return (
    <div className="work">
      <div className="header">
        <FontAwesomeIcon icon={faScrewdriverWrench} className="icon" />
        <h2>Work Experience</h2>
      </div>

      <div>
        <input
          type="text"
          value={position}
          placeholder="position"
          onChange={(e) => handlePositionChange(e)}
        />
      </div>

      <div>
        <input
          type="text"
          value={company}
          placeholder="company"
          onChange={(e) => handleCompanyChange(e)}
        />
      </div>

      <div>
        <input
          type="text"
          value={startingDate}
          placeholder="Start date: day/month/year"
          onChange={(e) => handleStartingDateChange(e)}
        />
      </div>

      <div>
        <input
          type="text"
          value={endingDate}
          placeholder="End date: day/month/year"
          onChange={(e) => handleEndingDateChange(e)}
        />
      </div>

      <div>
        <textarea
          type="text"
          value={role}
          placeholder="your role at this job"
          onChange={(e) => handleRoleChange(e)}
        />
      </div>
    </div>
  );
}

function Cv({ personData, workData }) {
  let { firstName, secondName, niche, userStatement, imageSource } = personData;

  const { position, company, startingDate, endingDate, role } = workData;

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
        <p className="position">{position}</p>
        <p className="company">
          {company} | {startingDate} - {endingDate}
        </p>
        <p>{role}</p>
      </section>
    </div>
  );
}

function App() {
  const [personData, setPersonData] = useState({
    firstName: "",
    secondName: "",
    niche: "",
    imageSource: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    userStatement: "",
  });

  const [workData, setWorkData] = useState({
    position: "",
    company: "",
    startingDate: "",
    endingDate: "",
    role: "",
  });

  return (
    <main>
      <PersonalDataInput
        personData={personData}
        functions={{
          handleFirstNameChange: function (e) {
            setPersonData({ ...personData, firstName: e.target.value });
          },

          handleSecondNameChange: function (e) {
            setPersonData({ ...personData, secondName: e.target.value });
          },

          handleNicheChange: function (e) {
            setPersonData({ ...personData, niche: e.target.value });
          },

          handleUserStatementChange: function (e) {
            setPersonData({ ...personData, userStatement: e.target.value });
          },

          handleImageChange: function (e) {
            const imageObject = e.target.files[0];
            const url = URL.createObjectURL(imageObject);

            setPersonData({ ...personData, imageSource: url });
          },
        }}
      />

      <WorkExperience
        workData={workData}
        functions={{
          handlePositionChange: function (e) {
            setWorkData({ ...workData, position: e.target.value });
          },
          handleCompanyChange: function (e) {
            setWorkData({ ...workData, company: e.target.value });
          },
          handleStartingDateChange: function (e) {
            setWorkData({ ...workData, startingDate: e.target.value });
          },
          handleEndingDateChange: function (e) {
            setWorkData({ ...workData, endingDate: e.target.value });
          },
          handleRoleChange: function (e) {
            setWorkData({ ...workData, role: e.target.value });
          },
        }}
      />

      <Cv personData={personData} workData={workData} />
    </main>
  );
}

export default App;
