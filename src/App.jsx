/* eslint react/prop-types: 0 */

import { useState } from "react";
import Cv from "./cv";
import { PersonalDataInput, WorkExperience } from "./inputs";

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

      <Cv personData={personData} workData={workData} />
    </main>
  );
}

export default App;
