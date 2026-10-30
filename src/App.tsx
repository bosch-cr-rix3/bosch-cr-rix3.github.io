import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "@tanstack/react-router";
import ArrowRightIcon from "mdi-material-ui/ArrowRight";
import { siteData } from "./data";
import PublicationGrid from "./PublicationGrid";

function App() {
  return (
    <>
      <Box component="section" id="about" sx={{ py: { xs: 13, md: 18 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            component="h1"
            sx={{
              maxWidth: "26ch",
              mx: "auto",
              fontSize: { xs: "2.65rem", md: "3.8rem" },
              fontWeight: 400,
              lineHeight: 1.04,
              mb: 2.5,
            }}
            variant="h1"
          >
            {siteData.tagline}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ maxWidth: "62ch", mx: "auto", lineHeight: 1.7 }}
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
        sx={{ mt: { xs: 5, md: 8 } }}
      >
        <Typography component="h2" variant="h2">
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
        sx={{ mt: { xs: 8, md: 14 } }}
      >
        <Typography component="h2" variant="h2">
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
              <Typography>{award.name}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack
        component="section"
        id="partners"
        spacing={3}
        sx={{ mt: { xs: 8, md: 14 } }}
      >
        <Typography component="h2" variant="h2">
          Partners
        </Typography>
        <Grid container spacing={1.5}>
          {siteData.partners.map((partner) => (
            <Grid key={partner.name} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <Card
                component="article"
                sx={{
                  display: "grid",
                  justifyItems: "center",
                  alignContent: "center",
                  gap: 1,
                  height: "100%",
                  minHeight: 130,
                  p: 2,
                  textAlign: "center",
                }}
                variant="outlined"
              >
                <Box
                  alt={partner.name}
                  component="img"
                  src={partner.logo}
                  sx={{ width: 105, height: 52, objectFit: "contain" }}
                />
                <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                  <Typography color="text.secondary" variant="caption">
                    {partner.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}

export default App;
