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
   * @param regularText The regular text to display
   * @param specialTexts The special texts to show with its associated color
   */
  const createIntroColoredText = (
    regularText: string,
    specialTexts: Array<{ text: string; color: string }>
  ) => {
    return (
      <Fragment>
        <p className="mb-0 fs-4 text-tertiary fw-bold">{regularText}:</p>
        <p className="px-1 bg-primary rounded">
          {specialTexts.map((textInfo, index) => {
            return (
              <span
                key={index}
                className="px-2 d-block fs-2 text-font-primary text-auto-hyphens"
                style={{ color: textInfo.color }}
              >
                {textInfo.text}
              </span>
            );
          })}
        </p>
      </Fragment>
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
            <Card.Title className="text-quinary fs-4 text-font-tertiary">
              {cardTitle}
            </Card.Title>
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
      <Col className="d-flex justify-content-center">
        <div className="py-3 w-fit">
          <img
            className="px-3 px-sm-0"
            src={img}
            alt={imgAlt}
            style={{ maxHeight: 120, maxWidth: 120 }}
          />
          <p className="mt-2 mb-0 fs-5 text-center fw-bold">{imgText}</p>
        </div>
      </Col>
    );
  };

  return (
    <Fragment>
      {/* Intro */}
      <Container className="px-4 d-flex flex-column-reverse flex-lg-row text-font-tertiary">
        <div className="my-4 me-5 d-flex justify-content-center align-items-center w-100">
          <div className="p-4 pb-2 bg-secondary rounded w-100">
            {createIntroColoredText("Website creator using", [
              { text: "React", color: "#6eacec" },
            ])}
            {createIntroColoredText("API builder with", [
              { text: "Node.js", color: "#ec706e" },
              { text: "Express.js", color: "#e5e641" },
            ])}
            {createIntroColoredText("Developer using", [
              { text: "TypeScript", color: "#41e643" },
            ])}
            {createIntroColoredText("Explorer of new", [
              { text: "Technologies", color: "white" },
            ])}
          </div>
        </div>
        <div className="d-flex justify-content-center w-100">
          <img
            src={JahnuelDorelusImg}
            width="100%"
            style={{ maxWidth: 450, objectFit: "contain" }}
            alt="portrait of Jahnuel Dorelus"
          />
        </div>
      </Container>

      {/* Hands on learning details */}
      <Container className="my-5 fs-5 d-flex flex-column justify-content-center">
        <h3 className="mx-3 mt-5 text-center text-font-tertiary">
          Tech explorer and hands-on learner
        </h3>
        <p className="mx-3 text-secondary fs-4 text-center text-font-secondary">
          I love tinkering, learning, and creating new services and
          technologies.
        </p>

        <Row
          className="mb-5 d-flex w-fit text-font-secondary"
          xs={1}
          md={2}
          xl={3}
        >
          {createHandsOnLearningCard(
            ServerRackCabinetImg,
            "the inside of a self-built server rack cabinet",
            "Rack Server Cabinet Build",
            "To create a local hosting service, I needed a server rack to house my equipment. A few trips to Home Depot and a lot of drilling led to a DIY server rack cabinet."
          )}
          {createHandsOnLearningCard(
            ProxmoxVEImg,
            "proxmox virtual environment application management screen",
            "Proxmox VE",
            "To host all of my services on a single machine, I utilize Proxmox VE to set up many servers and services for personal and business use."
          )}
          {createHandsOnLearningCard(
            CloudflareImg,
            "cloudflare application overview screen",
            "Cloudflare",
            "To keep all of my public web applications secure, I use Cloudflare as my hosting service, which provides a content delivery network, cloud cybersecurity, DDoS mitigation, and ICANN-accredited domain registration services."
          )}
          {createHandsOnLearningCard(
            SingleSignOnImg,
            "JayCloud application login screen",
            "Single Sign-On",
            "Authentication is one of the most critical features in user-based applications. To understand its lifecycle, I've created an authentication service (token and cookie-based) that allows a user to sign into all current and future applications I create."
          )}
          {createHandsOnLearningCard(
            Pm2Img,
            "PM2 process monitor ui",
            "PM2",
            "All of my services hosted are using this production-grade daemon process manager. Combining this with Proxmox VE, hosting any service on my server is as easy as pie."
          )}
          {createHandsOnLearningCard(
            GithubImg,
            "the inside of a self-built server rack cabinet",
            "GitHub",
            "This is the motherland where all my projects are born and get an education before taking their first step into the real world. Some become successful while others ... well ... completely drop out ... before high school."
          )}
        </Row>
      </Container>

      {/* MERN stack */}
      <div className="py-4 mt-3 mt-lg-5 bg-secondary text-font-secondary">
        <h3 className="mx-3 mb-0 text-center text-font-tertiary">
          As a TypeScript developer, I build using the MERN Stack
        </h3>
        <Container>
          <Row className="pt-4" xs={2} md={4}>
            {createMERNCard(MongoImg, "mongo database logo", "Mongo")}
            {createMERNCard(ExpressImg, "express js logo", "Express.js")}
            {createMERNCard(ReactImg, "react logo", "React")}
            {createMERNCard(NodeImg, "node js logo", "Node.js")}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};
