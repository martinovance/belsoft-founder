import { Box, Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FAQSDATA } from "../../../constant/PageData";

const Faqs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "16px",
        padding: "70px",
      }}
    >
      <Typography
        sx={{
          font: "Montserrat",
          fontSize: "40px",
          fontWeight: "bold",
          lineHeight: "120%",
          textAlign: "center",
        }}
      >
        FAQs
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          mt: 1,
          px: "30px",
        }}
      >
        {FAQSDATA.map((item, i) => (
          <Grid key={i} item md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Typography
                sx={{
                  font: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "semibold",
                  lineHeight: "120%",
                  textAlign: "center",
                  color: "#340066",
                }}
              >
                {item.title}
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Faqs;
