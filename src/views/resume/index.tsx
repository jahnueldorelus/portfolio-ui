import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

export const Resume = () => {
  const degrees: Array<{
    schoolName: string;
    name: string;
    schoolLocation: string;
    year: string;
  }> = [
    {
      name: "Master of Science, Computer Information Systems, Web Application Development",
      schoolLocation: "Boston, Massachusetts",
      schoolName: "Boston University, Metropolitan College",
      year: "May 2023",
    },
    {
      name: "Bachelor of Science, Computer Science",
      schoolLocation: "Wenham, Massachusetts",
      schoolName: "Gordon College",
      year: "May 2021",
    },
  ];

  const experiences: Array<{
    companyName: string;
    location: string;
    position: string;
    date: string;
  }> = [
    {
      companyName: "Centerboard",
      date: "March-May 2022",
      location: "Danbury, Connecticut",
      position: "Junior Software Engineer",
    },
    {
      companyName: "Gordon College",
      date: "June-July 2020",
      location: "Wenham, Massachusetts",
      position: "Software Development Intern",
    },
    {
      companyName: "Gordon College",
      date: "June-July 2019",
      location: "Wenham, Massachusetts",
      position: "Practicum Software Developer",
    },
  ];

  /**
   * Creates a resume info card JSX for an event.
   * @param title The title of the card
   * @param year The year the event occurred
   * @param text The card info
   * @param location The location where the event occurred
   */
  const createEventInfoCard = (
    title: string,
    year: string,
    text: string,
    location: string
  ) => {
    return (
      <Col className="d-flex">
        <div className="m-2 bg-quaternary w-100 rounded">
          <div className="p-3 d-flex flex-column justify-content-between h-100">
            <div className="mb-2 d-flex flex-column-reverse flex-sm-row flex-md-column-reverse flex-lg-row justify-content-between align-items-start">
              <p className="mb-0 fs-4 text-secondary text-font-tertiary">
                {title}
              </p>
              <Badge className="ms-0 ms-lg-4 mb-2 mb-mb-0 fs-5" bg="secondary">
                {year}
              </Badge>
            </div>

            <p>{text}</p>
            <p className="mb-0 text-quinary">{location}</p>
          </div>
        </div>
      </Col>
    );
  };

  return (
    <Container>
      <p className="px-2 fs-2 text-font-tertiary text-secondary">Resume</p>

      {/* Experience */}
      <div className="px-2">
        <p className="mx-2 mb-0 fs-2 text-font-tertiary text-quinary">
          Experience
        </p>
        <Row className="mb-5 fs-5 text-font-secondary" xs={1} md={2}>
          {experiences.map((experience) => {
            return createEventInfoCard(
              experience.position,
              experience.date,
              experience.companyName,
              experience.location
            );
          })}
        </Row>
      </div>

      {/* Education */}
      <div className="px-2">
        <p className="mx-2 mb-0 fs-2 text-font-tertiary text-quinary">
          Education
        </p>
        <Row className="mb-5 fs-5 text-font-secondary" xs={1} md={2}>
          {degrees.map((degree) => {
            return createEventInfoCard(
              degree.schoolName,
              degree.year,
              degree.name,
              degree.schoolLocation
            );
          })}
        </Row>
      </div>
    </Container>
  );
};
