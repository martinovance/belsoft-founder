import { Box, Divider, Stack } from "@mui/material";

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
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          position: "relative",
          padding: { xs: "24px 16px", md: "24px 72px" },
        }}
      >
        <Box
          component="img"
          src={StrokeLine}
          alt="line"
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            height: "746px",
            left: "38.5%",
            mt: 3,
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
          height: { xs: "100%", md: "600px" },
        }}
      >
        <Box
          component="img"
          src={DetailsLine}
          alt="Line"
          sx={{
            display: { xs: "none", md: "flex" },
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
        <Box
          component="img"
          src={AvatarLine}
          alt="Line"
          sx={{
            display: { xs: "none", md: "flex" },
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
