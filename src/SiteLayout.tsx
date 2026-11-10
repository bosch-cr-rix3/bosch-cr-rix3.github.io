import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { siteData } from "./data";

function SiteLayout() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const headerRef = useRef<HTMLElement | null>(null);
  const [isOverVideo, setIsOverVideo] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const hero = document.getElementById("about");

    if (!header || !hero) {
      setIsOverVideo(false);
      return;
    }

    const update = () => {
      setIsOverVideo(
        hero.getBoundingClientRect().bottom >
          header.getBoundingClientRect().bottom,
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  const navButtonSx = isOverVideo
    ? {
        color: "common.white",
        borderColor: "rgba(255, 255, 255, 0.65)",
        "&:hover": {
          borderColor: "common.white",
          bgcolor: "rgba(255, 255, 255, 0.12)",
        },
      }
    : {
        color: "text.primary",
        borderColor: "divider",
        "&:hover": {
          borderColor: "text.primary",
          bgcolor: "action.hover",
        },
      };

  return (
    <Container maxWidth="xl" sx={{ pb: 4 }}>
      <Stack sx={{ minHeight: "100vh" }}>
        <Box
          component="header"
          ref={headerRef}
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1100,
            width: "100vw",
            ml: "calc(50% - 50vw)",
            borderBottom: 1,
            borderColor: isOverVideo ? "rgba(255, 255, 255, 0)" : "divider",
            bgcolor: isOverVideo
              ? "rgba(0, 0, 0, 0)"
              : "rgba(255, 255, 255, 0.5)",
            backdropFilter: isOverVideo ? "none" : "blur(12px)",
            transition: "background-color 180ms ease, border-color 180ms ease",
          }}
        >
          <Container maxWidth="xl">
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
                sx={{
                  color: isOverVideo ? "common.white" : "text.primary",
                  fontWeight: 600,
                  px: 0,
                  transition: "color 180ms ease",
                }}
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
                <Button
                  component={Link}
                  hash="publications"
                  sx={navButtonSx}
                  to="/"
                  variant="outlined"
                >
                  Publications
                </Button>
                <Button
                  component={Link}
                  hash="awards"
                  sx={navButtonSx}
                  to="/"
                  variant="outlined"
                >
                  Awards
                </Button>
                <Button
                  component={Link}
                  hash="affiliations"
                  sx={navButtonSx}
                  to="/"
                  variant="outlined"
                >
                  Affiliations
                </Button>
              </Stack>
            </Toolbar>
          </Container>
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
