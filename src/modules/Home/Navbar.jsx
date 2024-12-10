import { AppBar, Box, Button, IconButton, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

import Logo3 from "../../assets/Logo3.svg";
import { useState } from "react";
import MobileNav from "./components/MobileNav";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const onClose = () => {
    setToggleMenu(false);
  };
  return (
    <AppBar
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "80px",
        backgroundColor: "#fff",
        padding: { xs: "24px 16px", md: "24px 72px" },
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
            gap: { xs: "4px", sm: "8px" },
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
              textShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
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
            gap: { xs: 1, md: 3, lg: 8 },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              gap: { md: "8px", lg: "32px" },
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
              width: { xs: "80px", sm: "150px" },
              height: { xs: "30px", sm: "40px" },
              borderRadius: "15px",
              textTransform: "capitalize",
              backgroundColor: "#fff",
              borderColor: "#9524FF",
              color: "#9524FF",
              gap: "4px",
              fontSize: { xs: "12px", sm: "20px" },
              // "&:hover": {
              //   backgroundColor: "#BEF264",
              //   pointer: "cursor",
              //   color: "#000000",
              // },
            }}
          >
            Register
            <ArrowForward
              sx={{
                width: { xs: 12, sm: 20 },
                height: { xs: 12, sm: 20 },
              }}
            />
          </Button>
          <IconButton
            onClick={() => setToggleMenu(true)}
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ color: "#000", display: { sm: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        {toggleMenu && <MobileNav onClose={onClose} />}
      </Box>
    </AppBar>
  );
};

export default Navbar;
