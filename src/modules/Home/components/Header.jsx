import { Typography, Button, Box } from "@mui/material";

function Header() {
  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        mt: 15,
      }}
    >
      <Typography variant="h4" component="h1" color="primary" gutterBottom>
        Connect, Collaborate, Innovate!
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Every last Friday of the month, we bring together the brightest minds in
        our local tech ecosystem. Whether you&apos;re a seasoned entrepreneur or
        just starting your journey, Founder&apos;s Friday is your launchpad for
        new ideas, valuable connections, and game-changing opportunities.
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        sx={{ marginTop: 2 }}
      >
        Register For Our Next Event
      </Button>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        sx={{ marginTop: 2 }}
      >
        Join us for our next meetup on the 26th of July 2024
      </Typography>
    </Box>
  );
}

export default Header;
