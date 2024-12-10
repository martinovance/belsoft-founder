import { Box, Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import UpcomingImage from "../../../assets/UpcomingImage.svg";
import Logo2 from "../../../assets/Logo2.svg";

const Upcoming = () => {
  return (
    <Box
      sx={{
        background: `url(${UpcomingImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: { xs: "100%", md: "608px" },
        px: { xs: "16px", sm: "72px" },
        py: { xs: "16px", sm: "72px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: { xs: "100%", md: "50%" },
          height: "100%",
          gap: "16px",
        }}
      >
        <Box>
          <Typography
            sx={{
              font: "Montserrat",
              fontSize: "35px",
              fontWeight: "bold",
              lineHeight: "125%",
              color: "#fff",
            }}
          >
            Founders Friday is coming to
            <br />{" "}
            <span
              style={{
                color: "#A649FF",
                fontSize: "55px",
              }}
            >
              Kaduna
            </span>
          </Typography>
        </Box>
        <Typography
          sx={{
            font: "Montserrat",
            fontSize: "16px",
            fontWeight: "regular",
            lineHeight: "120%",
            color: "#fff",
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
          variant="outlined"
          sx={{
            width: "189px",
            height: "40px",
            borderRadius: "50px",
            p: "20px",
            color: "#A649FF",
            borderColor: "#A649FF",
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
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          width: { xs: "100%", md: "40%" },
        }}
      >
        <Box
          component="img"
          src={Logo2}
          alt="logo"
          sx={{
            height: { xs: "50%", sm: "454px" },
            width: { xs: "50%", sm: "464px" },
          }}
        />
      </Box>
    </Box>
  );
};

export default Upcoming;
