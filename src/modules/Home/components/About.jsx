import { Box, Button, Card, CardMedia, Stack, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import AboutImage from "../../../assets/AboutImage.svg";
import MoneyBag from "../../../assets/MoneyBag.svg";
import AboutLine from "../../../assets/AboutLine.svg";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "36px",
        px: { xs: "16px", md: "72px" },
        mt: { xs: 2, md: 15 },
        height: { xs: "100%", md: "434px" },
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "100%",
          borderRadius: "16px",
        }}
      >
        <CardMedia
          component="img"
          alt="image"
          image={AboutImage}
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
      </Card>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: { xs: "100%", md: "50%" },
          height: "100%",
          gap: { xs: "16px", md: "8px" },
        }}
      >
        <img
          src={AboutLine}
          alt="Line"
          style={{
            position: "absolute",
            marginTop: 15,
            height: "95%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "36px",
            ml: 5,
          }}
        >
          <Typography
            sx={{
              font: "Montserrat",
              fontSize: "45px",
              fontWeight: "bold",
              lineHeight: "120%",
            }}
          >
            Who Are We?
          </Typography>
          <Typography
            sx={{
              font: "Montserrat",
              fontSize: "16px",
              fontWeight: "regular",
              lineHeight: "120%",
              color: "gray",
            }}
          >
            Born from the vibrant startup ecosystem of Abuja, we recognized the
            need for a consistent, high-quality networking platform where
            founders, innovators, and tech enthusiasts could connect, share
            ideas, and foster collaboration.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              sx={{
                width: "189px",
                height: "40px",
                borderRadius: "50px",
                padding: "20px 70px",
                color: "#fff",
                backgroundColor: "#A649FF",
                gap: "8px",
                textTransform: "Capitalize",
              }}
            >
              Register
              <ArrowRightAltIcon />
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "189px",
                height: "40px",
                borderRadius: "50px",
                padding: "20px 70px",
                color: "#A649FF",
                borderColor: "#A649FF",
                gap: "8px",
                textTransform: "Capitalize",
              }}
            >
              Donate
              <img
                src={MoneyBag}
                alt="bag-icon"
                style={{ height: 20, width: 20 }}
              />
            </Button>
          </Stack>
        </Box>
        <Typography
          sx={{
            font: "Montserrat",
            fontSize: "15px",
            fontWeight: "bold",
            lineHeight: "120%",
            ml: 5,
          }}
        >
          Founder&apos;s Friday is more than just a meetup — it&apos;s a
          movement.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
