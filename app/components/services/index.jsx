import React from "react";
import ServiceCard from "./card/ServiceCard";
import GradientLine from "../common-used-components/GradientLine";
import LensSubTitle from "../common-used-components/LensSubTitle";

const Services = () => {
  return (
    <div
      className={"flex flex-col items-center bg-cover py-8  "}
      style={{ backgroundImage: "url('/images/Desktop_-_23_u3ypg0 (1).webp')" }}
    >
      <div className={"flex flex-col items-center "}>
        <LensSubTitle text="SERVICES " className={"raleway "} />
        <GradientLine height={"h-1"} />
      </div>

      <h3
        className={
          "mx-1 text-[2.25rem] lg:text-[3.5rem] text-center font-medium my-8"
        }
      >
        {" "}
        We provide Artificial Intelligence Services
      </h3>
      <div
        className={
          "mx-4 w-[90%] xl:w-[60%] flex flex-col lg:grid lg:grid-cols-2 gap-8 bg-cover "
        }
      >
        <ServiceCard
          rank={"01"}
          description={
            "Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection."
          }
          title={"Biometrics"}
        />
        <ServiceCard
          rank={"02"}
          description={
            "Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business."
          }
          title={"Image Analysis"}
        />
        <ServiceCard
          rank={"03"}
          description={
            "Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.\n"
          }
          title={"Cross-Media Translation"}
        />
        <ServiceCard
          rank={"04"}
          description={
            "We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.\n"
          }
          title={"3D Modelling and Design."}
        />
      </div>
    </div>
  );
};

export default Services;
