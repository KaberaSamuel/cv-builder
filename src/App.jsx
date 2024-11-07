/* eslint react/prop-types: 0 */

import { useState } from "react";
import Cv from "./cv";
import {
  PersonalDataInput,
  WorkExperience,
  Education,
  Skills,
  Contacts,
} from "./inputs";

function App() {
  const [personData, setPersonData] = useState({
    firstName: "",
    secondName: "",
    niche: "",
    imageSource: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    userStatement: "",
  });

  const [workData, setWorkData] = useState([
    {
      position: "",
      company: "",
      startingDate: "",
      endingDate: "",
      role: "",
      id: 0,
    },
  ]);

  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
  });

  const [skillsData, setSkillsData] = useState([
    {
      id: crypto.randomUUID(),
      skill: "",
    },
  ]);

  const [contactsData, setContactsData] = useState({
    address: "",
    email: "",
    phoneNumber: "",
    portifolioLink: "",
  });

  return (
    <main>
      <PersonalDataInput
        personData={personData}
        functions={{
          handleInputChange: function (e, property) {
            setPersonData({ ...personData, [property]: e.target.value });
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
        handleChange={function (objectData) {
          const {
            element = "",
            id = "",
            property = "",
            addNewJob = false,
            deleteJob = false,
          } = objectData;

          let newWorkData = [...workData];

          if (addNewJob) {
            let newId = workData[0].id;
            newId += 1;
            const newJob = {
              position: "",
              company: "",
              startingDate: "",
              endingDate: "",
              role: "",
              id: newId,
            };
            newWorkData.push(newJob);
          } else if (deleteJob) {
            newWorkData.splice(id, 1);
            newWorkData[0].id = 0;
          }
          // when user is typing in inputs fields
          else {
            let individualWorkData = newWorkData[id];
            individualWorkData = {
              ...individualWorkData,
              [property]: element.value,
            };

            newWorkData[id] = individualWorkData;
          }

          setWorkData(newWorkData);
        }}
      />

      <Education
        educationData={educationData}
        handleChange={function (element, property) {
          setEducationData({ ...educationData, [property]: element.value });
        }}
      />

      <Skills
        skillsData={skillsData}
        handleChange={function (objectData) {
          const {
            elementId = null,
            deleteSkill,
            addNewSkill,
            element = "",
          } = objectData;
          const index = elementId
            ? skillsData.findIndex((skill) => skill.id === elementId)
            : 0;
          let newSkillsData = [...skillsData];

          if (addNewSkill) {
            newSkillsData.push({
              id: crypto.randomUUID(),
              skill: "",
            });
          } else if (deleteSkill) {
            newSkillsData.splice(index, 1);
          } else {
            skillsData[index].skill = element.value;
          }

          setSkillsData(newSkillsData);
        }}
      />

      <Contacts
        contactsData={contactsData}
        handleChange={function (element, property) {
          setContactsData({ ...contactsData, [property]: element.value });
        }}
      />

      <Cv
        personData={personData}
        workData={workData}
        educationData={educationData}
        skillsData={skillsData}
        contactsData={contactsData}
      />
    </main>
  );
}

export default App;
