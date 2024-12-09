import {
  Box,
  Button,
  Card,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { SPONSORCARD } from "../../../constant/PageData";

const Sponsor = () => {
  return (
    <Box
      sx={{
        px: { xs: "16px", md: "72px" },
        mb: { xs: 5, md: 15 },
      }}
    >
      <Typography
        sx={{
          font: "Monteserrat",
          fontSize: "24px",
          fontWeight: "bold",
          lineHeight: "120%",
          color: "#5C00B3",
        }}
      >
        Sponsor The Next Friday
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-start", md: "center" },
          alignItems: { xs: "flex-start", md: "center" },
          gap: "16px",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            display: { xs: "none", sm: "flex" },
            font: "Monteserrat",
            fontSize: "45px",
            fontWeight: "bold",
            lineHeight: "120%",
          }}
        >
          Why Sponsor
          <br /> Founders Friday?
        </Typography>
        <Typography
          sx={{
            display: { xs: "flex", sm: "none" },
            font: "Monteserrat",
            fontSize: "30px",
            fontWeight: "bold",
            lineHeight: "120%",
          }}
        >
          Why Sponsor Founders Friday?
        </Typography>

        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "48px",
            height: "100%",
            // width: "100%",
            px: { xs: 0, md: "70px" },
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", md: "60%" },
              height: "100%",
              padding: "30px",
              border: "1px solid #CA92FF",
              borderRadius: "8px",
              gap: "16px",
              boxSizing: "border-box",
            }}
          >
            {SPONSORCARD.map((item, i) => (
              <Box
                key={i}
                sx={{
                  width: "200px",
                  height: "200px",
                  border: "1px solid #A649FF",
                  borderColor: "#A649FF",
                  borderRadius: "150px",
                  backgroundColor:
                    item.title === "Community Impact" ||
                    item.title === "Brand Association"
                      ? "#EDDBFF"
                      : "#DCB6FF",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    font: "Montserrat",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    font: "Montserrat",
                    fontSize: "12px",
                    fontWeight: "regular",
                    textAlign: "center",
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Card>

          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <Typography
              sx={{
                font: "Montserrat",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              How To Sponsor
            </Typography>
            <Typography
              sx={{
                font: "Montserrat",
                fontSize: "24px",
                fontWeight: "regular",
                color: "#605668",
              }}
            >
              <em>Ready to Make an Impact?</em>
            </Typography>
            <Typography
              sx={{
                font: "Montserrat",
                fontSize: "16px",
                fontWeight: "regular",
                color: "#2C2830",
              }}
            >
              Fill out the form below or contact us at [contact email/phone
              number] to learn more about how you can sponsor the next Founders
              Friday
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                mt: 3,
                width: "100%",
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <InputLabel sx={{ fontWeight: "bold" }}>Name</InputLabel>
                <TextField
                  fullWidth
                  name="full-name"
                  placeholder="Full name"
                  InputProps={{
                    style: {
                      height: "48px",
                      borderRadius: "8px",
                      border: "1px solid #121212",
                    },
                  }}
                />
              </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <InputLabel>
                  <span style={{ fontWeight: "bold" }}>Company</span> (optional)
                </InputLabel>
                <TextField
                  fullWidth
                  name="full-name"
                  placeholder="Full name"
                  InputProps={{
                    style: {
                      height: "48px",
                      borderRadius: "8px",
                      border: "1px solid #121212",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                mt: 3,
                width: "100%",
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <InputLabel sx={{ fontWeight: "bold" }}>Email</InputLabel>
                <TextField
                  fullWidth
                  name="email"
                  placeholder="Email address"
                  InputProps={{
                    style: {
                      height: "48px",
                      borderRadius: "8px",
                      border: "1px solid #121212",
                    },
                  }}
                />
              </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <InputLabel sx={{ fontWeight: "bold" }}>Phone</InputLabel>
                <TextField
                  fullWidth
                  name="phone-number"
                  placeholder="Phone number"
                  InputProps={{
                    style: {
                      height: "48px",
                      borderRadius: "8px",
                      border: "1px solid #121212",
                    },
                  }}
                />
              </Box>
            </Box>
            <Button
              sx={{
                mt: 3,
                width: "189px",
                height: "40px",
                borderRadius: "4px",
                padding: "20px 70px",
                color: "#fff",
                backgroundColor: "#A649FF",
                gap: "8px",
                textTransform: "Capitalize",
              }}
            >
              Sponsor
              <ArrowRightAltIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sponsor;
