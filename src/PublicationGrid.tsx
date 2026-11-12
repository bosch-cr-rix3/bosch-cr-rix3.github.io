import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import ImageOutlineIcon from "mdi-material-ui/ImageOutline";
import type { Publication } from "./data";

const MotionGrid = motion.create(Grid);

interface PublicationGridProps {
  publications: Publication[];
  filterable?: boolean;
}

function PublicationGrid({ publications, filterable = false }: PublicationGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const prefersReducedMotion = useReducedMotion();
  const categories = [
    "All",
    ...new Set(publications.flatMap((item) => item.categories)),
  ];
  const visiblePublications =
    !filterable || activeCategory === "All"
      ? publications
      : publications.filter((item) => item.categories.includes(activeCategory));

  return (
    <Stack spacing={3}>
      {filterable && (
        <Tabs
          aria-label="Filter publications"
          onChange={(_, category: string) => setActiveCategory(category)}
          scrollButtons="auto"
          value={activeCategory}
          variant="scrollable"
        >
          {categories.map((category) => (
            <Tab key={category} label={category} value={category} />
          ))}
        </Tabs>
      )}
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <AnimatePresence initial={false} mode="popLayout">
          {visiblePublications.map((publication, index) => (
            <MotionGrid
              key={`${activeCategory}-${publication.title}`}
              layout={!prefersReducedMotion}
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      rotate: index % 2 === 0 ? -3 : 3,
                      scale: 0.94,
                      y: 20,
                    }
              }
              animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, rotate: index % 2 === 0 ? 2 : -2, scale: 0.96, y: -12 }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: 360,
                      damping: 30,
                      delay: Math.min(index, 8) * 0.035,
                    }
              }
              size={{ xs: 12, md: 6, lg: 4 }}
            >
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
              {publication.img ? (
                <CardMedia
                  alt={publication.title}
                  component="img"
                  image={publication.img}
                  sx={{ aspectRatio: "16 / 9", objectFit: "contain" }}
                />
              ) : (
                <CardMedia
                  aria-label={`${publication.title} image placeholder`}
                  component="div"
                  role="img"
                  sx={{
                    aspectRatio: "16 / 9",
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "background.default",
                    color: "text.secondary",
                  }}
                >
                  <Stack spacing={0.75} sx={{ alignItems: "center" }}>
                    <ImageOutlineIcon fontSize="large" />
                    <Typography variant="caption">Image placeholder</Typography>
                  </Stack>
                </CardMedia>
              )}
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
                <Typography
                  component="h3"
                  sx={{ fontSize: { xs: "1.125rem", md: "1.25rem" } }}
                  variant="h6"
                >
                  {publication.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    flex: 1,
                    fontSize: { xs: "0.9375rem", md: "1rem" },
                    lineHeight: 1.55,
                  }}
                >
                  {publication.abstractSummary}
                </Typography>
                <Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.75 }}>
                  {publication.categories.map((category) => (
                    <Chip
                      key={category}
                      label={category}
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
            </MotionGrid>
          ))}
        </AnimatePresence>
      </Grid>
    </Stack>
  );
}

export default PublicationGrid;