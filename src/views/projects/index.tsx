import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { MouseEvent } from "react";
import JayCloudImg from "@assets/jaycloud.jpg";
import CeImg from "@assets/ce.jpg";

export const Projects = () => {
  const projectsList: Array<{
    name: string;
    description: string;
    link: string;
    image: string;
    imageAlt: string;
    inProgress: boolean;
  }> = [
    {
      name: "JayCloud",
      description:
        "A central location of JayCloud services for day-to-day operations.",
      link: "https://cloud.jahnueldorelus.com",
      image: JayCloudImg,
      imageAlt: "home screen of the application JayCloud",
      inProgress: false,
    },
    {
      name: "Chants d'Ésperance",
      description:
        "A Haitian Christian songbook. View, save, and present songs quickly and efficiently.",
      link: "https://ce.jahnueldorelus.com",
      image: CeImg,
      imageAlt: "home screen of the application Chants d'Ésperance",
      inProgress: true,
    },
  ];

  /**
   * Opens a link to a new website.
   */
  const onOpenBtnClick =
    (link: string) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      window.open(link, "_blank");
    };

  return (
    <Container>
      <p className="px-2 fs-2 text-font-tertiary text-secondary">Projects</p>

      <Row
        className="mb-5 fs-5 d-flex w-fit text-font-secondary"
        xs={1}
        md={2}
        lg={2}
      >
        {projectsList.map((project, index) => {
          return (
            <Col className="px-3 d-flex justify-content-center" key={index}>
              <Card
                className="my-4 bg-quaternary border-0"
                style={{ maxWidth: "25rem" }}
              >
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.imageAlt}
                  style={{ objectFit: "cover" }}
                  height={300}
                />

                <Card.Body>
                  <Badge
                    className="mb-3"
                    bg={project.inProgress ? "secondary" : "success"}
                  >
                    {project.inProgress ? "Still in Progress" : "Complete"}
                  </Badge>

                  <Card.Title className="text-quinary fs-4 text-font-tertiary">
                    {project.name}
                  </Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-end py-3 border-0 bg-transparent">
                  <Button
                    className="px-4 py-2 bg-secondary border-0"
                    aria-label={`Open the website ${project.name}`}
                    onClick={onOpenBtnClick(project.link)}
                  >
                    Open
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
