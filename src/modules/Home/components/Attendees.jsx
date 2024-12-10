import { Avatar, Box, Typography } from "@mui/material";
import MrImage from "../../../assets/MrImage.svg";
import { ATTENDEES } from "../../../constant/PageData";

const Attendees = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        p: { xs: "16px", md: "40px 70px" },
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography
          sx={{
            mt: 1,
            font: "Montserrat",
            fontSize: "45px",
            fontWeight: "bold",
            lineHeight: "120%",
            textAlign: "center",
          }}
        >
          What Do Our Attendees Have To Say?
        </Typography>
        <Typography
          sx={{
            mt: 1,
            font: "Montserrat",
            fontSize: "24px",
            fontWeight: "regular",
            lineHeight: "120%",
            color: "gray",
          }}
        >
          Well See For Yourself!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "8px", md: "36px" },
          // minWidth: "100%",
          // overflowX: "scroll",
        }}
      >
        {ATTENDEES.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              width: "300px",
              mt: 10,
            }}
          >
            <Avatar
              src={MrImage}
              alt="image"
              sx={{
                width: "150px",
                height: "150px",
                border: "2px solid #8300FF",
                padding: "16px",
              }}
            />
            <Typography
              sx={{
                font: "Montserrat",
                fontSize: "24px",
                fontWeight: "bold",
                lineHeight: "120%",
                textAlign: "center",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                mt: 1,
                font: "Montserrat",
                fontSize: "18px",
                fontWeight: "regular",
                lineHeight: "120%",
                textAlign: "center",
              }}
            >
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Attendees;
