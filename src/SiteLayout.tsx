import {
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "@tanstack/react-router";
import { siteData } from "./data";

function SiteLayout() {
  return (
    <Container maxWidth="xl" sx={{ pb: 4 }}>
      <Stack sx={{ minHeight: "100vh" }}>
        <Box
          component="header"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              gap: 2,
              py: 1.5,
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
          >
            <Button
              component={Link}
              hash="about"
              sx={{ color: "text.primary", fontWeight: 600, px: 0 }}
              to="/"
              variant="text"
            >
              {siteData.teamName}
            </Button>
            <Stack
              component="nav"
              direction="row"
              sx={{ flexWrap: "wrap", gap: 1 }}
              aria-label="Primary navigation"
            >
              <Button component={Link} to="/publications" variant="outlined">
                Publications
              </Button>
              <Button component={Link} hash="awards" to="/" variant="outlined">
                Awards
              </Button>
              <Button
                component={Link}
                hash="partners"
                to="/"
                variant="outlined"
              >
                Partners
              </Button>
            </Stack>
          </Toolbar>
        </Box>
        <Box component="main" sx={{ flex: 1 }}>
          <Outlet />
        </Box>
        <Box
          component="footer"
          sx={{
            mt: 10,
            pt: 3,
            borderTop: 1,
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          <Typography color="text.secondary" variant="caption">
            Copyright © {new Date().getFullYear()} Bosch Research | CR/RIX3-AP.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}

export default SiteLayout;
