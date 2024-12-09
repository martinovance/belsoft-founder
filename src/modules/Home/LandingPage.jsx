import { AppBar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

import Logo3 from "../../assets/Logo3.svg";
import StrokeLine from "../../assets/StrokeLine.svg";
import AvatarLine from "../../assets/AvatarLine.svg";
import DetailsLine from "../../assets/DetailsLine.svg";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import DayDetails from "./components/DayDetails";
import Sponsor from "./components/Sponsor";
import Upcoming from "./components/Upcoming";
import Attendees from "./components/Attendees";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Join from "./components/Join";
import Register from "./components/Register";

const Home = () => {
  return (
    <Box>
      <AppBar
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "80px",
          backgroundColor: "#fff",
          padding: "24px 72px",
          borderBottom: "1px solid #000",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img
              src={Logo3}
              style={{ width: "81px", height: "81px" }}
              alt="logo"
            />
            <Typography
              sx={{
                font: "Montserrat",
                color: "#000",
                fontWeight: "bold",
                fontSize: 28,
              }}
            >
              Founder&apos;s Friday
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "32px",
              }}
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: "medium",
                  font: "Montserrat",
                }}
              >
                Home
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: "medium",
                  font: "Montserrat",
                }}
              >
                About Us
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: "medium",
                  font: "Montserrat",
                }}
              >
                Gallery
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: "medium",
                  font: "Montserrat",
                }}
              >
                Contact Us
              </Typography>
            </Box>

            <Button
              variant="outlined"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "150px",
                height: "45px",
                borderRadius: "15px",
                textTransform: "capitalize",
                backgroundColor: "#fff",
                borderColor: "#9524FF",
                color: "#9524FF",
                gap: "12px",
                fontSize: "20px",
                "&:hover": {
                  backgroundColor: "#BEF264",
                  pointer: "cursor",
                  color: "#000000",
                },
              }}
            >
              Register
              <ArrowForward size="small" />
            </Button>
          </Box>
        </Box>
      </AppBar>

      <Stack
        direction="row"
        sx={{
          position: "relative",
          padding: "24px 72px",
        }}
      >
        <img
          src={StrokeLine}
          style={{
            position: "absolute",
            height: "746px",
            left: "38.5%",
            marginTop: 20,
            zIndex: "-10",
          }}
        />
        <Header />
        <Hero />
      </Stack>

      <About />
      <Offer />
      <Box
        sx={{
          position: "relative",
          height: "600px",
        }}
      >
        <img
          src={DetailsLine}
          alt="Line"
          style={{
            position: "absolute",
            width: "100%",
            bottom: 1,
            zIndex: "-10",
          }}
        />
        <DayDetails />
      </Box>

      <Sponsor />
      <Upcoming />
      <Attendees />
      <Box
        sx={{
          position: "relative",
          // height: "600px",
        }}
      >
        <img
          src={AvatarLine}
          alt="Line"
          style={{
            position: "absolute",
            width: "100%",
            top: "50%",
          }}
        />
        <Join />
      </Box>
      <Register />
      <Faqs />
      <Divider sx={{ width: "99.9%", border: "1px solid #000" }} />
      <Footer />
    </Box>
  );
};

export default Home;
