import { Box, Button, CardMedia, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Image1 from "../../../assets/Image1.svg";
import Image2 from "../../../assets/Image2.svg";

const DayDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "36px",
        px: { xs: "16px", md: "72px" },
        mt: { xs: 5, md: 15 },
        height: { xs: "100%", md: "434px" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: { xs: "100%", md: "50%" },
          height: "100%",
          gap: "36px",
        }}
      >
        <Box>
          <Typography
            sx={{
              font: "Montserrat",
              fontSize: "24px",
              fontWeight: "bold",
              lineHeight: "120%",
              color: "#5600B3",
            }}
          >
            Founders Friday
          </Typography>
          <Typography
            sx={{
              mt: 1,
              font: "Montserrat",
              fontSize: "45px",
              fontWeight: "bold",
              lineHeight: "120%",
            }}
          >
            What Happens At
            <br /> Founders Friday
          </Typography>
        </Box>
        <Typography
          sx={{
            font: "Montserrat",
            fontSize: "16px",
            fontWeight: "regular",
            lineHeight: "120%",
            color: "gray",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
          dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
          suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </Typography>
        <Button
          sx={{
            width: "189px",
            height: "40px",
            borderRadius: "50px",
            padding: "20px",
            color: "#fff",
            backgroundColor: "#A649FF",
            gap: "8px",
            textTransform: "Capitalize",
          }}
        >
          Learn More
          <ArrowRightAltIcon />
        </Button>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "100%",
          position: "relative",
          display: { xs: "flex", md: "block" },
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          alt="image"
          image={Image2}
          sx={{
            position: { xs: "relative", md: "absolute" },
            width: { xs: "50%", md: "250px" },
            height: { xs: "100%", md: "300px" },
            left: { xs: 0, md: "40%" },
          }}
        />
        <CardMedia
          component="img"
          alt="image"
          image={Image1}
          sx={{
            position: { xs: "relative", md: "absolute" },
            width: { xs: "50%", md: "250px" },
            height: { xs: "100%", md: "300px" },
            left: { xs: 0, md: "20%" },
            top: "33%",
          }}
        />
      </Box>
    </Box>
  );
};

export default DayDetails;
