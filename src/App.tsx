import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "@tanstack/react-router";
import ArrowRightIcon from "mdi-material-ui/ArrowRight";
import { siteData } from "./data";
import Affiliations from "./Affiliations";
import PublicationGrid from "./PublicationGrid";

function App() {
  return (
    <>
      <Box
        component="section"
        id="about"
        sx={{
          position: "relative",
          isolation: "isolate",
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
          width: "100vw",
          left: "50%",
          ml: "-50vw",
          mt: { xs: "-114px", sm: "-65px" },
          overflow: "hidden",
          py: { xs: 8, md: 12 },
          color: "common.white",
          "@media (max-width: 359px)": { mt: "-159px" },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <Box
          aria-hidden="true"
          autoPlay
          component="video"
          loop
          muted
          playsInline
          src="/landing.mp4"
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, textAlign: "center", pt:10, }}
        >
          <Typography
            component="h1"
            sx={{
              maxWidth: "26ch",
              mx: "auto",
              fontSize: { xs: "2rem", sm: "2.25rem", md: "3.8rem" },
              fontWeight: 400,
              lineHeight: 1.04,
              mb: 2.5,
              color: "common.white",
            }}
            variant="h1"
          >
            {siteData.tagline}
          </Typography>
          <Typography
            sx={{
              maxWidth: "62ch",
              mx: "auto",
              fontSize: { xs: "0.9375rem", md: "1rem" },
              lineHeight: { xs: 1.6, md: 1.7 },
              color: "rgba(255, 255, 255, 0.9)",
            }}
            variant="body1"
          >
            {siteData.about}
          </Typography>
          <Button
            component={Link}
            endIcon={<ArrowRightIcon />}
            hash="publications"
            sx={{ mt: 3 }}
            to="/"
            disableElevation
            size="large"
            variant="contained"
          >
            Explore Publications
          </Button>
        </Container>
      </Box>

      <Stack
        component="section"
        id="publications"
        spacing={3}
        sx={{ pt: { xs: 5, md: 8 } }}
      >
        <Typography
          component="h2"
          sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
          variant="h2"
        >
          Latest Publications
        </Typography>
        <PublicationGrid publications={siteData.publications.slice(0, 3)} />
        <Box sx={{ display: "flex", justifyContent: "center", pt: 1 }}>
          <Button
            component={Link}
            endIcon={<ArrowRightIcon />}
            to="/publications"
            variant="contained"
            disableElevation
            size="large"
          >
            View all publications
          </Button>
        </Box>
      </Stack>

      <Stack
        component="section"
        id="awards"
        spacing={2}
        sx={{ pt: { xs: 8, md: 14 } }}
      >
        <Typography
          component="h2"
          sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
          variant="h2"
        >
          Awards
        </Typography>
        <Stack
          divider={<Divider flexItem />}
          sx={{ borderTop: 1, borderColor: "divider" }}
        >
          {siteData.awards.map((award) => (
            <Stack
              component="article"
              direction={{ xs: "column", sm: "row" }}
              key={award.name}
              spacing={{ xs: 0.5, sm: 3 }}
              sx={{ py: 2 }}
            >
              <Typography
                color="primary.dark"
                sx={{ fontWeight: 600, minWidth: "4rem" }}
              >
                {award.year}
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9375rem", md: "1rem" } }}>
                {award.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Affiliations />
    </>
  );
}

export default App;
