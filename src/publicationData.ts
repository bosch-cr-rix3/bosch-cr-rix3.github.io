import citationRecordsJson from "./publications.json";
import type { Publication } from "./data";

interface CitationAuthor {
  family?: string;
  given?: string;
  literal?: string;
}

interface CitationRecord {
  abstract?: string;
  author?: CitationAuthor[];
  DOI?: string;
  issued?: { "date-parts"?: Array<Array<number | string>> };
  publisher?: string;
  title: string;
  type?: string;
  URL?: string;
  "container-title"?: string;
}

const citationRecords = citationRecordsJson as CitationRecord[];

const typeLabels: Record<string, string> = {
  "article-journal": "Journal article",
  article: "Preprint",
  chapter: "Book chapter",
  "paper-conference": "Conference paper",
};

function getIssuedParts(record: CitationRecord) {
  return record.issued?.["date-parts"]?.[0] ?? [];
}

function getIssuedSortKey(record: CitationRecord) {
  const [year = 0, month = 1, day = 1] = getIssuedParts(record).map(Number);
  return year * 10000 + month * 100 + day;
}

function getAuthorLine(authors: CitationAuthor[] = []) {
  const names = authors.slice(0, 3).map((author) =>
    author.literal ?? [author.given, author.family].filter(Boolean).join(" "),
  );
  const suffix = authors.length > 3 ? ", et al." : "";
  return names.length > 0 ? `Authors: ${names.join(", ")}${suffix}` : "";
}

function getExcerpt(record: CitationRecord) {
  const abstract = record.abstract
    ?.replace(/\\textbf\{([^}]*)\}/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

  if (abstract) {
    return abstract.length > 240
      ? `${abstract.slice(0, 237).trimEnd()}...`
      : abstract;
  }

  return getAuthorLine(record.author);
}

function toPublication(record: CitationRecord): Publication {
  const typeLabel = typeLabels[record.type ?? ""] ?? "Publication";
  const venue = record["container-title"] ?? record.publisher ?? typeLabel;
  const year = getIssuedParts(record)[0]?.toString();
  const badge = year && !venue.includes(year) ? `${venue} · ${year}` : venue;
  const url = record.URL ?? (record.DOI ? `https://doi.org/${record.DOI}` : undefined);

  return {
    title: record.title,
    badge,
    excerpt: getExcerpt(record),
    tags: [typeLabel],
    links: url ? [{ url, text: record.URL ? "Paper" : "DOI" }] : [],
  };
}

export const publications: Publication[] = citationRecords
  .map((record) => ({
    publication: toPublication(record),
    sortKey: getIssuedSortKey(record),
  }))
  .sort((left, right) => right.sortKey - left.sortKey)
  .map(({ publication }) => publication);