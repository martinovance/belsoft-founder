import { Box, Avatar, Typography, Button } from "@mui/material";

import MrImage from "../../../assets/MrImage.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Join = () => {
  const avatars = [
    { src: MrImage, borderColor: "#8300FF" },
    { src: MrImage, borderColor: "#2F6C62" },
    { src: MrImage, borderColor: "#FF3B30" },
    { src: MrImage, borderColor: "#007AFF" },
    { src: MrImage, borderColor: "#FF3B30" },
    { src: MrImage, borderColor: "teal" },
    { src: MrImage, borderColor: "#FF9500" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "16px", md: "70px" },
        height: "500px",
        gap: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          width: { xs: "100%", md: "750px" },
        }}
      >
        <Typography
          sx={{
            font: "Montserrat",
            fontSize: "35px",
            fontWeight: "bold",
            lineHeight: "125%",
            textAlign: "center",
          }}
        >
          Register And Be Part of Our Community
        </Typography>
        <Typography
          sx={{
            font: "Montserrat",
            fontSize: "18px",
            fontWeight: "regular",
            lineHeight: "120%",
            textAlign: "center",
            color: "grey",
          }}
        >
          Join our community of over 1000+ founders, developers, and tech
          junkies in general. <br />
          Be inspired by people who live to inspire!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          // overflow: "hidden",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: { xs: "center", md: "space-between" },
            // alignItems: "center",
            width: "100%",
            zIndex: 1,
            gap: { xs: "36px", md: null },
          }}
        >
          {avatars.map((avatar, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                src={avatar.src}
                sx={{
                  width: { xs: 50, md: 70 },
                  height: { xs: 50, md: 70 },
                  border: `3px solid ${avatar.borderColor}`,
                  p: 1,
                  bottom:
                    index === 1 || index === 5 ? { xs: 0, md: "20%" } : null,
                  top:
                    index === 0 ||
                    index === 2 ||
                    index === 3 ||
                    index === 4 ||
                    index === 6
                      ? { xs: 0, md: "90%" }
                      : null,
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
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
        Register
        <ArrowRightAltIcon />
      </Button>
    </Box>
  );
};

export default Join;
