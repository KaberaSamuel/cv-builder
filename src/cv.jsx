/* eslint react/prop-types: 0 */
export default function Cv({ personData, workData }) {
  let { firstName, secondName, niche, userStatement, imageSource } = personData;

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
    </div>
  );
}
