import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JahnuelDorelusImg from "@assets/jahnuel-dorelus.png";
import ServerRackCabinetImg from "@assets/server-rack-cabinet.jpg";
import ProxmoxVEImg from "@assets/proxmox-ve.png";
import CloudflareImg from "@assets/cloudflare.jpg";
import SingleSignOnImg from "@assets/single-sign-on.jpg";
import Pm2Img from "@assets/pm2.jpg";
import GithubImg from "@assets/github.jpg";
import MongoImg from "@assets/mongo-db.png";
import ExpressImg from "@assets/express-js.png";
import ReactImg from "@assets/react.png";
import NodeImg from "@assets/node-js.png";

export const Home = () => {
  /**
   * Creates an intro sentence with colored text.
   * @param textOne The first part of the text
   * @param textTwo The second part of the text
   * @param textColor The color to use when coloring the text
   * @param colorTextOne Determines if the first or second
   *                     text will be colored
   */
  const createIntroColoredText = (
    textOne: string,
    textTwo: string,
    textColor: string,
    colorTextOne: boolean
  ) => {
    const textColorStyle = { color: textColor };

    return (
      <h1 className="text-secondary fw-bold">
        <span
          className={`me-3 ${colorTextOne ? "fs-1 text-font-primary" : "fs-2"}`}
          style={colorTextOne ? textColorStyle : {}}
        >
          {textOne}
        </span>
        <span
          className={!colorTextOne ? "fs-1 text-font-primary" : "fs-2"}
          style={!colorTextOne ? textColorStyle : {}}
        >
          {textTwo}
        </span>
      </h1>
    );
  };

  /**
   * Creates an hands on learning info card.
   * @param cardImg The image of the card
   * @param cardImgAlt The description of the image
   * @param cardTitle The title of the card
   * @param cardText The text of the card
   */
  const createHandsOnLearningCard = (
    cardImg: string,
    cardImgAlt: string,
    cardTitle: string,
    cardText: string
  ) => {
    return (
      <Col className="px-4 d-flex justify-content-center">
        <Card
          className="my-4 bg-quaternary border-0"
          style={{ maxWidth: "30rem" }}
        >
          <Card.Img
            variant="top"
            src={cardImg}
            alt={cardImgAlt}
            style={{ objectFit: "cover" }}
            height={300}
          />
          <Card.Body>
            <Card.Title className="text-quinary fs-4">{cardTitle}</Card.Title>
            <Card.Text>{cardText}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  /**
   * Creates a MERN stack card.
   * @param img The image to show
   * @param imgAlt The description of the image
   * @param imgText The text to display with the image
   */
  const createMERNCard = (img: string, imgAlt: string, imgText: string) => {
    return (
      <div className="mx-5">
        <img src={img} alt={imgAlt} height={120} />
        <p className="mt-2 mb-0 fs-5 text-center fw-bold">{imgText}</p>
      </div>
    );
  };

  return (
    <Fragment>
      {/* Intro */}
      <Container className="d-flex flex-column-reverse flex-lg-row text-font-tertiary">
        <div className="my-4 me-5 d-flex justify-content-center align-items-center w-100">
          <div>
            {createIntroColoredText("Creates with", "React", "#6eacec", false)}
            {createIntroColoredText("TypeScript", "Developer", "#41e643", true)}
            {createIntroColoredText("Builds with", "Node.js", "#ec706e", false)}
            {createIntroColoredText("Express.js", "Lover", "#e5e641", true)}
            {createIntroColoredText(
              "Explores new",
              "Technologies",
              "white",
              false
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center w-100">
          <img
            src={JahnuelDorelusImg}
            width={450}
            alt="portrait of Jahnuel Dorelus"
          />
        </div>
      </Container>

      {/* Hands on learning details */}
      <Container className="my-5 fs-5 d-flex flex-column justify-content-center">
        <h3 className="mt-5 text-center">Tech explorer and hands-on learner</h3>
        <p className="text-secondary text-center">
          I love tinkering, learning, and creating new services and
          technologies.
        </p>

        <Row
          className="mb-5 d-flex w-fit text-font-tertiary"
          xs={1}
          md={2}
          xl={3}
        >
          {createHandsOnLearningCard(
            ServerRackCabinetImg,
            "the inside of a self-built server rack cabinet",
            "Rack Server Cabinet Build",
            "To start the process of creating my own hosting service, I needed a server rack to house my equipment. A few trips to Home Depot and a lot of drilling led to a DIY server rack cabinet."
          )}
          {createHandsOnLearningCard(
            ProxmoxVEImg,
            "proxmox virtual environment application management screen",
            "Proxmox VE",
            "To host all of my services on a single machine, I utilize Proxmox VE which allows me to setup many servers and services for both personal and business use."
          )}
          {createHandsOnLearningCard(
            CloudflareImg,
            "cloudflare application overview screen",
            "Cloudflare",
            "To keep all of my public web applications secure, I use Cloudflare as my hosting service as it provides content delivery network, cloud cybersecurity, DDoS mitigation, and ICANN-accredited domain registration services."
          )}
          {createHandsOnLearningCard(
            SingleSignOnImg,
            "JayCloud application login screen",
            "Single Sign-On",
            "Authentication is one of the most critical features in user-based applications. To understand it's lifecycle, I've created my own authentication service (token and cookie based) that allows a user to sign into all current and future applications I create."
          )}
          {createHandsOnLearningCard(
            Pm2Img,
            "PM2 process monitor ui",
            "PM2",
            "With PM2, all of my services are hosted using this production grade daemon process manager. Combining this with Proxmox VE, hosting any service on my server is easy as pie."
          )}
          {createHandsOnLearningCard(
            GithubImg,
            "the inside of a self-built server rack cabinet",
            "Github",
            "This is the motherland where all of my projects are born and get an education before taking their first step into the real world. Some projects go to college while others ... well ... they completely drop out ( ...in middle school)."
          )}
        </Row>
      </Container>

      {/* MERN stack */}
      <div className="py-4 mt-3 mt-lg-5 bg-secondary text-font-secondary">
        <h3 className="mb-0 text-center">
          As a TypeScript developer, I build using the MERN Stack
        </h3>
        <Container className="pt-4 d-flex flex-wrap justify-content-evenly">
          {createMERNCard(MongoImg, "mongo database logo", "Mongo")}
          {createMERNCard(ExpressImg, "express js logo", "Express.js")}
          {createMERNCard(ReactImg, "react logo", "React")}
          {createMERNCard(NodeImg, "node js logo", "Node.js")}
        </Container>
      </div>
    </Fragment>
  );
};
