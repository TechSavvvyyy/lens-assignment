"use client"

import React from 'react'
import { Accordion } from '@mantine/core';
import LensTitle from "../common-used-components/LensTitle";
import LensSubTitle from "../common-used-components/LensSubTitle";
import GradientLine from "../common-used-components/GradientLine";
const FAQ = () => {
  const faqArray = [
    {
      question: "Do I need to sign a contract?",
      answer: "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract."
    },
    {
      question: "How do we ensure quality of deliverables?",
      answer: "We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks."
    },
    {
      question: "How do I begin collaboration?",
      answer: "Please contact us at solutions@lenscorp.ai. We usually respond within 24 Hrs."
    },
    {
      question: "What services do we offer?",
      answer: "We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you."
    },
    {
      question: "How do you ensure user privacy?",
      answer: "We do not share, sell, or rent your competitive information (including any and all data) to any third party. Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy."
    },
    {
      question: "How can I pay for the services?",
      answer: "We split the entire project into multiple milestones. We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime."
    }
  ];
  const faqs = faqArray.map((item,index) => (
      <Accordion.Item key={index} value={item.question}>
        <Accordion.Control >{item.question}</Accordion.Control>
        <Accordion.Panel>{item.answer}</Accordion.Panel>
      </Accordion.Item>
  ));

  return (
      <div className={"flex flex-col items-center gap-y-8"}>
          <div className={"flex flex-col items-center "}>
              <LensSubTitle text = "GET TO KNOW US" />
<GradientLine height={"h-1"} />
          </div>
          <LensTitle text = "Frequently Asked Questions" />
      <Accordion className={"w-[90%] lg:w-1/2"} variant="separated" defaultValue={faqArray[0].question}
      styles={{
         root:{



             margin: "auto"

         },
        item:{
          borderWidth: '0px',

        },

        control:{
          border: '1px solid black',
            borderRadius: "0.75rem",
            backgroundColor: "white",
        },
          label:{
            fontSize: '1rem',
              fontWeight: '300',
          },
        panel:{
          color: "rgba(0,0,0,.6)"
        }
      }}>
        {faqs}
      </Accordion>
      </div>

  )
}

export default FAQ