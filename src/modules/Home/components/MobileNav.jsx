import { Box, IconButton, Typography } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import Logo3 from "../../../assets/Logo3.svg";
import PropTypes from "prop-types";

const MobileNav = ({ onClose }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "50%",
        background: "#DCB6FF",
        transition: "0.05s ease",
        display: { xs: "flex", md: "none" },
        justifyContent: "center",
        flexDirection: "column",
        zIndex: 5,
        py: { xs: "16px", sm: "32px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: "16px", sm: "60px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: { xs: "4px", sm: "8px" },
            height: "30px",
          }}
        >
          <Box
            component="img"
            src={Logo3}
            sx={{
              width: { xs: "41px", sm: "61px" },
              height: { xs: "41px", sm: "61px" },
            }}
            alt="logo"
          />
          <Typography
            sx={{
              font: "Montserrat",
              color: "#000",
              fontWeight: "bold",
              fontSize: { xs: 16, sm: 28 },
            }}
          >
            Founder&apos;s Friday
          </Typography>
        </Box>
        <IconButton
          onClick={onClose}
          color="inherit"
          aria-label="menu"
          sx={{
            color: "#A649FF",
            cursor: "pointer",
            // right: "20px",
            padding: "0px !important",
          }}
        >
          <CancelOutlinedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
          height: "100%",
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
  );
};

export default MobileNav;

MobileNav.propTypes = {
  onClose: PropTypes.func.isRequired,
};
