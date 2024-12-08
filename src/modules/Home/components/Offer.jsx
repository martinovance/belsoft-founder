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
        px: "70px",
        mt: 15,
      }}
    >
      <Typography
        sx={{
          font: "Montserrat",
          fontSize: "45px",
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
          mt: 10,
          width: "100%",
        }}
      >
        {OFFERDATA.map((item, i) => (
          <Box key={i} sx={{ width: "100%", mb: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "36px",
                  width: "30%",
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
                  width: "65%",
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