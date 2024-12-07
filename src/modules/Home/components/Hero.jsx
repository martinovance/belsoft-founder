import { Card, CardMedia, Typography, Box } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

import Image1 from "../../../assets/images/Image1.png";
import Image2 from "../../../assets/images/Image2.png";
import Image3 from "../../../assets/images/Image3.png";
import Image4 from "../../../assets/images/Image4.png";

function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "50%",
        mt: 15,
        placeItems: "center",
      }}
    >
      <Card
        sx={{
          position: "absolute",
          width: "210px",
          height: "227px",
          transform: "rotate(-8deg)",
          backgroundColor: "#B86BFF",
          left: "26%",
        }}
      >
        <CardMedia
          component="img"
          image={Image1}
          alt="image"
          sx={{
            width: "100%",
            position: "relative",
            transform: "rotate(6deg)",
            borderRadius: 2,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-30%, -50%)",
          }}
        >
          <PlayCircleFilledWhiteIcon
            sx={{
              color: "white",
              width: "50%",
              height: "50%",
            }}
          />
        </Box>
        <Typography
          variant="caption"
          sx={{
            ml: 7,
            color: "#fff",
            borderRadius: 1,
          }}
        >
          Founder&apos;s Friday
        </Typography>
      </Card>
      <Card
        sx={{
          position: "absolute",
          width: "210px",
          height: "227px",
          transform: "rotate(17deg)",
          backgroundColor: "#6F00D9",
          top: "25%",
          left: "57%",
        }}
      >
        <CardMedia
          component="img"
          image={Image2}
          alt="image"
          sx={{
            position: "relative",
            transform: "rotate(-10deg)",
            borderRadius: 2,
          }}
        />
        <Typography
          variant="caption"
          sx={{
            ml: 7,
            color: "#fff",
            borderRadius: 1,
          }}
        >
          Founder&apos;s Friday
        </Typography>
      </Card>
      <Card
        sx={{
          position: "absolute",
          width: "101px",
          height: "117px",
          transform: "rotate(18deg)",
          backgroundColor: "#EBE9ED",
          top: "70%",
          left: "24%",
        }}
      >
        <CardMedia
          component="img"
          image={Image3}
          alt="image"
          sx={{
            position: "relative",
            transform: "rotate(-10deg)",
            borderRadius: 2,
          }}
        />
        <Typography
          sx={{
            font: "Monotype Corsiva",
            fontSize: "8px",
            ml: 2.5,
            color: "#000",
            borderRadius: 1,
          }}
        >
          Founder&apos;s Friday
        </Typography>
      </Card>
      <CardMedia
        component="img"
        image={Image4}
        alt="image"
        sx={{
          position: "absolute",
          width: "101px",
          height: "100px",
          transform: "rotate(14deg)",
          borderRadius: 2,
          top: "85%",
          left: "60%",
        }}
      />
    </Box>
  );
}

export default Hero;
