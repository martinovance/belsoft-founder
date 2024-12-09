import { Box, Button, Divider, Typography } from "@mui/material";
import Logo from "../../../assets/Logo.svg";
import RightArrow from "../../../assets/RightArrow.svg";
import Facebook from "../../../assets/Facebook.svg";
import Instagram from "../../../assets/Instagram.svg";
import Hex from "../../../assets/Hex.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        p: " 10px 70px",
        gap: "16px",
        height: "450px",
      }}
    >
      <img src={Logo} alt="logo" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "36px",
          width: "100%",
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
          Want To Be A Part Of Abuja’s Biggest Tech
          <br /> Community?
        </Typography>
        <Button
          variant="outlined"
          sx={{
            width: "356px",
            height: "60px",
            color: "#9524FF",
            borderColor: "#9524FF",
            padding: "10px",
            borderRadius: "40px",
            textTransform: "capitalize",
            fontSize: "20px",
            gap: "8px",
          }}
        >
          Register For Our Next Event
          <img src={RightArrow} alt="arrow" />
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          width: "100%",
        }}
      >
        <Divider sx={{ width: "100%", border: "1px solid #000" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
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
              src={Facebook}
              alt="icon"
              style={{
                height: "35px",
                width: "35px",
              }}
            />
            <img
              src={Instagram}
              alt="icon"
              style={{
                height: "35px",
                width: "35px",
              }}
            />
            <img
              src={Hex}
              alt="icon"
              style={{
                height: "35px",
                width: "35px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
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
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
