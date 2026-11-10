import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import ArrowLeftIcon from "mdi-material-ui/ArrowLeft";
import { siteData } from "./data";
import PublicationGrid from "./PublicationGrid";

function PublicationsPage() {
  return (
    <Stack component="section" spacing={3} sx={{ mt: { xs: 5, md: 8 } }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          alignItems: { xs: "flex-start", sm: "flex-end" },
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.25rem", md: "2.8rem" },
              fontWeight: 400,
            }}
            variant="h1"
          >
            Publications
          </Typography>
        </Box>
        <Button
          component={Link}
          startIcon={<ArrowLeftIcon />}
          to="/"
          variant="text"
        >
          Back home
        </Button>
      </Stack>
      <PublicationGrid publications={siteData.publications} filterable />
    </Stack>
  );
}

export default PublicationsPage;
