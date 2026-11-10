import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { siteData } from "./data";

function Affiliations() {
  return (
    <Stack
      component="section"
      id="affiliations"
      spacing={3}
      sx={{ pt: { xs: 8, md: 14 } }}
    >
      <Typography
        component="h2"
        sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
        variant="h2"
      >
        Affiliations
      </Typography>
      <Box
        aria-label="Affiliations"
        role="region"
        tabIndex={0}
        sx={{
          overflow: "hidden",
          width: "100%",
          "&:hover .affiliations-track, &:focus .affiliations-track": {
            animationPlayState: "paused",
          },
          "@media (prefers-reduced-motion: reduce)": {
            overflowX: "auto",
            "& .affiliations-track": { animation: "none" },
          },
        }}
      >
        <Box
          className="affiliations-track"
          sx={{
            display: "flex",
            width: "max-content",
            animation: "affiliations-scroll 90s linear infinite",
            "@keyframes affiliations-scroll": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {[false, true].map((isDuplicate) => (
            <Box
              key={String(isDuplicate)}
              aria-hidden={isDuplicate || undefined}
              sx={{ display: "flex", gap: 1.5, pr: 1.5 }}
            >
              {siteData.affiliations.map((affiliation, index) => (
                <Card
                  component="article"
                  key={`${affiliation.name}-${index}`}
                  sx={{
                    display: "grid",
                    flex: "0 0 220px",
                    justifyItems: "center",
                    alignContent: "center",
                    gap: 1,
                    height: 150,
                    p: 2,
                    textAlign: "center",
                    "&&.MuiPaper-outlined:hover": { boxShadow: "none" },
                  }}
                  variant="outlined"
                >
                  <Box
                    alt={affiliation.name}
                    component="img"
                    src={affiliation.logo}
                    sx={{ width: "100%", height: 52, objectFit: "contain" }}
                  />
                  <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                    <Typography color="text.secondary" variant="caption">
                      {affiliation.name}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Stack>
  );
}

export default Affiliations;