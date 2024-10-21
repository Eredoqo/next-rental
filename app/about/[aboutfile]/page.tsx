import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import aboutImg from "../../images/cars-img/bmw-offer.png";
import faqs from "../../utils/FAQs";
import AboutPageDetail from "../../components/about/about-page/AboutPage";

export default function AboutPage() {
  return (
    <Box sx={{ padding: "120px" }}>
      <AboutPageDetail />
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
