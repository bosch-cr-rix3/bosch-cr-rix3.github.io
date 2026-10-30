import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import type { Publication } from "./data";

interface PublicationGridProps {
  publications: Publication[];
  filterable?: boolean;
}

function PublicationGrid({ publications, filterable = false }: PublicationGridProps) {
  const [activeTag, setActiveTag] = useState("All");
  const tags = ["All", ...new Set(publications.flatMap((item) => item.tags))];
  const visiblePublications =
    !filterable || activeTag === "All"
      ? publications
      : publications.filter((item) => item.tags.includes(activeTag));

  return (
    <Stack spacing={3}>
      {filterable && (
        <Stack
          aria-label="Filter publications"
          component="div"
          direction="row"
          role="group"
          sx={{ alignItems: "center", flexWrap: "wrap", gap: 1 }}
        >
          {tags.map((tag) => (
            <Button
              aria-pressed={activeTag === tag}
              key={tag}
              onClick={() => setActiveTag(tag)}
              variant={activeTag === tag ? "contained" : "outlined"}
              disableElevation
            
            >
              {tag}
            </Button>
          ))}
        </Stack>
      )}
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {visiblePublications.map((publication) => (
          <Grid key={publication.title} size={{ xs: 12, md: 6, lg: 4 }}>
            <Card
              component="article"
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                overflow: "hidden",
                transition: "border-color 160ms ease, box-shadow 160ms ease",
                "&:hover": {
                  borderColor: "primary.light",
                  boxShadow: "0 5px 16px rgba(27, 26, 24, 0.12)",
                },
                "&.MuiPaper-outlined:hover": {
                  borderColor: "primary.light",
                  boxShadow: "0 5px 16px rgba(27, 26, 24, 0.12)",
                },
              }}
              variant="outlined"
            >
              <CardMedia
                alt={publication.title}
                component="img"
                image={publication.img}
                sx={{ aspectRatio: "16 / 9", objectFit: "cover" }}
              />
              <CardContent sx={{ display: "flex", flex: 1, flexDirection: "column", gap: 1.25, p: 2.5 }}>
                <Chip
                  label={publication.badge}
                  size="small"
                  sx={{
                    alignSelf: "flex-start",
                    height: "auto",
                    maxWidth: "100%",
                    py: 0.35,
                    "& .MuiChip-label": { display: "block", whiteSpace: "normal" },
                  }}
                  variant="outlined"
                />
                <Typography component="h3" variant="h6">
                  {publication.title}
                </Typography>
                <Typography color="text.secondary" sx={{ flex: 1, lineHeight: 1.55 }}>
                  {publication.excerpt}
                </Typography>
                <Stack
                  direction="row"
                  sx={{ flexWrap: "wrap", gap: 0.75 }}
                >
                  {publication.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{ bgcolor: "#fae9df", color: "#86370f" }}
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ flexWrap: "wrap", gap: 0.5, px: 2.5, pb: 2.5 }}>
                {publication.links.map((link) => (
                  <Button
                    component="a"
                    href={link.url}
                    key={link.url}
                    rel="noopener noreferrer"
                    size="small"
                    target="_blank"
                    variant="outlined"
                  >
                    {link.text}
                  </Button>
                ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default PublicationGrid;