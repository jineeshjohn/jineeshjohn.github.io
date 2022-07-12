import "./styles.css";
import data from "./data";
import {
  Header2,
  SummaryGrid,
  SummaryGridCell,
  Designation,
  Company,
  Duration,
  TitleGrid,
  NameSection,
  Logo,
  ContactsGrid,
  ContactsGridCell,
  Tech,
  TechItem
} from "./styled";

export default function App() {
  return (
    <div className="App">
      <TitleGrid>
        <NameSection>
          <div className="label-name">JINEESH JOHN</div>
          <div className="label-designation">
            Full stack JavaScript Developer
          </div>
          <div className="label-slogon">
            I solve problems and help people overcome obstacles.
          </div>
        </NameSection>
        <div>
          <Logo src="./pic.jpeg" alt="Edit photo" height="100" width="100" />
        </div>
      </TitleGrid>
      <ContactsGrid>
        <ContactsGridCell>
          <div className="row">
            <div>Mobile</div>
            <div className="cellValue">07525100701</div>
          </div>
          <div className="row">
            <div>Email</div>
            <div className="cellValue">jineeshjohn@gmail.com</div>
          </div>
          <div className="row">
            <div>Location</div>
            <div className="cellValue">London</div>
          </div>
        </ContactsGridCell>
        <ContactsGridCell>
          <div className="row">
            <div>Github</div>
            <div>
              <a
                className="cellValue"
                target="_blank"
                href="https://github.com/jineeshjohn"
              >
                github.com/jineeshjohn
              </a>
            </div>
          </div>
          <div className="row">
            <div>Linkedin</div>
            <div>
              <a
                className="cellValue"
                href="https://www.linkedin.com/in/jineeshjohn"
                target="_blank"
              >
                linkedin.com/in/jineeshjohn/
              </a>
            </div>
          </div>
        </ContactsGridCell>
      </ContactsGrid>
      <Header2>Professional profile</Header2>
      <ul style={{ margin: 0 }}>
        <li>
          Senior React Developer with 15+ years of professional experience in
          Web Development.
        </li>
        <li>
          Strong experience on the frontend with Node JS, JavaScript (ES6),
          HTML/CSS and supporting technologies
        </li>
        <li>Experience working within an Agile, DevOps environment.</li>
        <li>Strong experience with testing frameworks and libraries</li>
        <li>Proficiency with TDD &amp; BDD</li>
        <li>
          Good understanding of development setup with Mac, Linux, and windows{" "}
        </li>
      </ul>
      <Header2>Tech stack primary</Header2>
      <div>
        <Tech bg="f0db4f" fg="454e56">
          #es6
        </Tech>
        <Tech bg="222" fg="00d8ff">
          #react
        </Tech>
        <Tech bg="3178c6" fg="fff">
          #typescript
        </Tech>
        <Tech bg="051e34" fg="ffa60f">
          #firebase
        </Tech>
        <Tech bg="90c53f" fg="46483d">
          #node
        </Tech>
        <Tech>#jest</Tech>
        <Tech>#git</Tech>
        <Tech bg="0a73b8" fg="fff">
          #docker
        </Tech>
        <Tech bg="dd4b26" fg="fff">
          #html5
        </Tech>
        <Tech bg="0a73b8" fg="fff">
          #css3
        </Tech>
      </div>

      <Header2>Tech stack secondary</Header2>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>
              <em>Frontend</em>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Redux</li>
                <li>GraphQL</li>
                <li>Styled components</li>
                <li>Sass</li>
                <li>JQuery.js</li>

                <li>Mocha.js</li>
              </ul>
            </td>
            <td>
              <em>Backend</em>
              <ul>
                <li>NodeJs</li>
                <li>Npm</li>
                <li>Koa</li>
                <li>PM2</li>
                <li>RESTful web service(JSON)</li>
                <li>supertest</li>
              </ul>
            </td>
            <td>
              <em>DevOps</em>
              <ul>
                <li>Docker</li>
                <li>Linux</li>
                <li>Cloud service</li>
                <li>Jenkins</li>
                <li>Git</li>
              </ul>
            </td>
            <td>
              <em>Testing</em>
              <ul>
                <li>BDD - Cucumber</li>
                <li>WebdriverIO</li>
                <li>mocha.js</li>
                <li>puppeteer</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <Header2>Work experience</Header2>

      {data.map((exp) => {
        return (
          <SummaryGrid>
            <SummaryGridCell className="separator">
              <Designation>{exp.designation}</Designation>
              <Company>{exp.company}</Company>
              <Duration>{exp.year}</Duration>
            </SummaryGridCell>
            <SummaryGridCell>
              <ul>
                {exp.desc.map((descItem) => (
                  <li>{descItem}</li>
                ))}
              </ul>
              {exp.tech && (
                <div style={{ margin: "10px 20px" }}>
                  {exp.tech.map((descItem) => (
                    <TechItem>{descItem}</TechItem>
                  ))}
                </div>
              )}
            </SummaryGridCell>
          </SummaryGrid>
        );
      })}
      <Header2>Education</Header2>
      <div class="edu">Master of computer application - 2009</div>
      <div class="edu">Bachelor of computer science - 2006</div>
    </div>
  );
}
