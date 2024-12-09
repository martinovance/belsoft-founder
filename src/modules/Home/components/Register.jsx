import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

import EventImage from "../../../assets/EventImage.svg";

const Register = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "36px",
        paddingX: "72px",
        mt: 15,
        height: "434px",
      }}
    >
      <Card
        sx={{
          position: "relative",
          width: "50%",
          height: "100%",
          borderRadius: "16px",
        }}
      >
        <CardMedia
          component="img"
          alt="image"
          image={EventImage}
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-10%, -50%)",
          }}
        >
          <PlayCircleFilledWhiteIcon
            sx={{
              color: "#fff",
              // backgroundColor: "purple",
              width: "25%",
              height: "25%",
            }}
          />
        </Box>
      </Card>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "36px",
          }}
        >
          <Typography
            sx={{
              font: "Montserrat",
              fontSize: "24px",
              fontWeight: "semibold",
              lineHeight: "120%",
            }}
          >
            At Founder’s Friday, Every Friday Is a Learning Experience!
          </Typography>
          <Typography
            sx={{
              font: "Montserrat",
              fontSize: "18px",
              fontWeight: "semibold",
              lineHeight: "120%",
            }}
          >
            Join us in our mission to transform ideas into impact and shape the
            future of Nigeria’s startup landscape.
          </Typography>
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
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
