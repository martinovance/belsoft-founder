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
        px: "72px",
        mb: 15,
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
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            font: "Monteserrat",
            fontSize: "45px",
            fontWeight: "bold",
            lineHeight: "120%",
          }}
        >
          Why Sponsor
          <br /> Founders Friday?
        </Typography>

        <Box
          sx={{
            mt: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "48px",
            height: "100%",
            // width: "100%",
            px: "70px",
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              height: "100%",
              padding: "40px",
              border: "1px solid #CA92FF",
              borderRadius: "8px",
              gap: "16px",
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
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
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
                justifyContent: "space-between",
                alignItems: "center",
                gap: "4px",
                mt: 3,
                width: "100%",
              }}
            >
              <Box sx={{ width: "50%" }}>
                <InputLabel>Name</InputLabel>
                <TextField
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
              <Box sx={{ width: "50%" }}>
                <InputLabel>
                  Company <span>(optional)</span>
                </InputLabel>
                <TextField
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
                justifyContent: "space-between",
                alignItems: "center",
                gap: "4px",
                mt: 3,
                width: "100%",
              }}
            >
              <Box sx={{ width: "50%" }}>
                <InputLabel>Email</InputLabel>
                <TextField
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
              <Box sx={{ width: "50%" }}>
                <InputLabel>Phone</InputLabel>
                <TextField
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
