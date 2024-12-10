import { Box, Divider, Typography } from "@mui/material";

import Dot from "../../../assets/Dot.svg";
import Cross from "../../../assets/Cross.svg";
import { OFFERDATA } from "../../../constant/PageData";

const Offer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: "16px", md: "72px" },
        mt: { xs: 5, md: 15 },
      }}
    >
      <Typography
        sx={{
          font: "Montserrat",
          fontSize: "40px",
          fontWeight: "bold",
          lineHeight: "120%",
        }}
      >
        What we offer
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          mt: { xs: 5, md: 10 },
          width: "100%",
        }}
      >
        {OFFERDATA.map((item, i) => (
          <Box key={i} sx={{ width: "100%", mb: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
                gap: "16px",
                width: "100%",
                mb: { xs: 2, sm: 0 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: { xs: "8px", sm: "36px" },
                  width: { xs: "100%", md: "30%" },
                }}
              >
                <img src={Dot} alt="dot" />
                <Typography
                  sx={{
                    font: "Montserrat",
                    fontSize: "24px",
                    fontWeight: "bold",
                    lineHeight: "120%",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                  width: { xs: "100%", md: "65%" },
                }}
              >
                <Typography
                  sx={{
                    font: "Montserrat",
                    fontSize: "16px",
                    fontWeight: "semibold",
                    lineHeight: "120%",
                    color: "#75687E",
                  }}
                >
                  {item.desc}
                </Typography>
                <img src={Cross} alt="dot" />
              </Box>
            </Box>
            <Divider sx={{ width: "100%", border: "1px solid #000" }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Offer;
