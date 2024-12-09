import { Typography, Button, Box, Avatar, Stack } from "@mui/material";

import RightArrow from "../../../assets/RightArrow.svg";
import Col1 from "../../../assets/Col1.svg";
import Col2 from "../../../assets/Col2.svg";
import Col3 from "../../../assets/Col3.svg";
import Col4 from "../../../assets/Col4.svg";
import Col5 from "../../../assets/Col5.svg";
import BoxArrowUpRight from "../../../assets/BoxArrowUpRight.svg";

function Header() {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        mt: 15,
        gap: "35px",
      }}
    >
      <Box>
        <Typography
          sx={{
            font: "Montserrat",
            fontSize: "12px",
            fontWeight: "bold",
            lineHeight: "120%",
          }}
        >
          Join our premier monthly meetup for startup founders and tech
          visionaries
        </Typography>
        <Typography
          sx={{
            font: "Montserrat",
            fontSize: "35px",
            fontWeight: "bold",
            lineHeight: "125%",
            color: "#5C00B3",
          }}
        >
          Connect, Collaborate, Innovate!
        </Typography>
      </Box>
      <Typography
        sx={{
          font: "Montserrat",
          fontSize: "16px",
          fontWeight: "regular",
          lineHeight: "150%",
        }}
      >
        Every last Friday of the month, we bring together the brightest minds in
        our local tech ecosystem. Whether you&apos;re a seasoned entrepreneur or
        just starting your journey, Founder&apos;s Friday is your launchpad for
        new ideas, valuable connections, and game-changing opportunities.
      </Typography>
      <Box>
        <Button
          variant="outlined"
          sx={{
            width: { xs: "100%", sm: "356px" },
            height: { xs: "40px", sm: "60px" },
            color: "#9524FF",
            borderColor: "#9524FF",
            p: { xs: "6px", sm: "10px" },
            borderRadius: "40px",
            textTransform: "capitalize",
            fontSize: { xs: "16px", sm: "20px" },
            gap: "8px",
          }}
        >
          Register For Our Next Event
          <Box
            component="img"
            src={RightArrow}
            alt="arrow"
            sx={{
              width: { xs: 15, sm: 30 },
              height: { xs: 15, sm: 30 },
            }}
          />
        </Button>
        <Typography
          sx={{
            marginTop: 1,
            font: "Montserrat",
            fontSize: "12px",
            fontWeight: "semibold",
          }}
        >
          Join Us for our next meetup on the 26th of July 2024
        </Typography>
      </Box>

      <Box>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Collaborator 1" src={Col1} />
          <Avatar alt="Collaborator 2" src={Col2} />
          <Avatar alt="Collaborator 3" src={Col3} />
          <Avatar alt="Collaborator 4" src={Col4} />
          <Avatar alt="Collaborator 5" src={Col5} />
        </Stack>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            mt: 1,
          }}
        >
          <Typography
            sx={{
              font: "Montserrat",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Become a collaborator today
          </Typography>
          <img src={BoxArrowUpRight} alt="arrow" />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
