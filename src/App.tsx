/* eslint react/prop-types: 0 */
import { useState } from "react";
import Cv from "./cv";
import { PersonalDataInputProps, WorkExperienceProps } from "./App.type";
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

  const [jobs, setWorkData] = useState([
    {
      position: "",
      company: "",
      startingDate: "",
      endingDate: "",
      role: "",
      id: 1,
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

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.files) {
      const imageObject = e.currentTarget.files[0];
      const url = URL.createObjectURL(imageObject);
      setPersonData({ ...personData, imageSource: url });
    }
  }

  function handleInputChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    property: string
  ) {
    setPersonData({ ...personData, [property]: e.target.value });
  }

  return (
    <main>
      <PersonalDataInput
        personData={personData}
        handleImageChange={handleImageChange}
        handleInputChange={handleInputChange}
      />

      <WorkExperience
        jobs={jobs}
        handleChange={function (objectData) {
          const {
            element = "",
            id = "",
            property = "",
            addNewJob = false,
            deleteJob = false,
          } = objectData;

          let newWorkData = [...jobs];

          if (addNewJob) {
            let newId = jobs[0].id;
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
        jobs={jobs}
        educationData={educationData}
        skillsData={skillsData}
        contactsData={contactsData}
      />
    </main>
  );
}

export default App;
