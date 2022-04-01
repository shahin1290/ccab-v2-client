import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container, Typography } from "@mui/material";

const Content = styled.div`
  background-color: #f5f6f9;
  height: ${(props) => (props.show ? "110px" : 0)};
  opacity: ${(props) => (props.show ? 1 : 0)};
  display: flex;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const HContainer = styled.div`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  & p {
    color: ${(props) => (props.show ? "#6364D9" : "#313030")};
  }
`;

const StyledKeyboardArrowDownIcon = styled(ArrowForwardIosIcon)`
  color: #6364d9;
  font-size: 18px;
  transform: ${(props) => (props.show ? "rotate(90deg)" : 0)};
  transition: ${(props) => (props.show ? "all 0.3s ease-in" : "none")};
`;

const FAQAccordion = ({ title, description, active, setActive }) => {
  return (
    <Container>
      <Box bgcolor="#F5F6F9" sx={{ borderRadius: "10px" }}>
        <HContainer
          onClick={() => setActive(title)}
          show={active === title ? 1 : 0}
        >
          <Typography>{title}</Typography>
          <StyledKeyboardArrowDownIcon show={active === title ? 1 : 0} />
        </HContainer>

        <Content show={active === title ? 1 : 0}>
          <Typography
            sx={{
              padding: "0 30px",
              fontSize: "16px",
              color: "#313030",
              lineHeight: "1.6",
            }}
          >
            {description}
          </Typography>
        </Content>
      </Box>
    </Container>
  );
};

export default FAQAccordion;
