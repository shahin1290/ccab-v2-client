import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Underline from "../../../../images/svg/Underline";
import FAQAccordion from "./FAQAccordion";

const FAQ = ({ FAQs, title }) => {
  const [active, setActive] = useState("");

  return (
    <Box bgcolor="#fff">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pt: { xs: 5, md: 10 },
          pb: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="h3" mb={2}>
          {title}
        </Typography>
        <Underline />
      </Box>

      <Box pb={{ xs: 2 }}>
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
