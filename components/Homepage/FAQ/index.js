import { Box, Typography } from "@mui/material";
import { useState } from "react";
import FAQAccordion from "./FAQAccordion";

const FAQs = [
  {
    title: "What is the refund policy?",
    content:
      "If you subscribed, you get a 7-day free trial during which you can cancel at no penalty. After that, we don’t give refunds, but you can cancel your subscription at any time.",
  },
  {
    title: "Can I just enroll in a single course?",
    content:
      "Yes! To get started, click the course card that interests you and enroll. You can enroll and complete the course to earn a shareable certificate.",
  },
  {
    title: "Is financial aid available?",
    content:
      "No, Codify college does not presently provide financial aid to learners who cannot afford the fee.",
  },

  {
    title:
      "Is this course really with live Mentoring and online? Do I need to attend any classes in person?",
    content:
      "This course is entirely with live Mentoring and online, where you will book your live mentoring sessions in person from the platform calendar. You can access your lectures, readings, recorded videos, and assignments anytime and anywhere via the web or your mobile device.",
  },
  {
    title: "Do I get a certificate after completion of the course?",
    content:
      "Yes, you will receive a certificate of graduation from the course once you pass the project.",
  },
  {
    title: "What background knowledge is necessary?",
    content:
      "No prerequisite knowledge is needed as our course is designed to take you from ground zero up.",
  },
  {
    title: "Do I need to take the courses in a specific order?",
    content:
      "Ideally, learners should complete the courses in the specified sequence. However, if you are already comfortable in some languages you may choose to skip the lesson which we strongly discourage.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState("What is the refund policy?");

  return (
    <Box bgcolor="#fff">
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          color: "#313030",
        }}
        py={{ xs: 5 }}
      >
        Frequently Asked Questions
      </Typography>
      <Box pb={{ xs: 10 }}>
        {FAQs.map((faq) => (
          <FAQAccordion
            key={faq.title}
            title={faq.title}
            description={faq.content}
            active={active}
            setActive={setActive}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;
