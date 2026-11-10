import citationRecordsJson from "./publications.json";
import type { Publication } from "./data";

interface CitationRecord {
  abstract?: string;
  abstractSummary?: string;
  categories?: string[];
  displayTitle?: string;
  DOI?: string;
  issued?: { "date-parts"?: Array<Array<number | string>> };
  keywords?: string[];
  publisher?: string;
  title: string;
  type?: string;
  URL?: string;
  "container-title"?: string;
}

const citationRecords = citationRecordsJson as CitationRecord[];

function getIssuedParts(record: CitationRecord) {
  return record.issued?.["date-parts"]?.[0] ?? [];
}

function getIssuedSortKey(record: CitationRecord) {
  const [year = 0, month = 1, day = 1] = getIssuedParts(record).map(Number);
  return year * 10000 + month * 100 + day;
}

function getAbstractSummary(record: CitationRecord) {
  if (record.abstractSummary) {
    return record.abstractSummary;
  }

  const abstract = record.abstract
    ?.replace(/\\textbf\{([^}]*)\}/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

  if (abstract) {
    return abstract.length > 240
      ? `${abstract.slice(0, 237).trimEnd()}...`
      : abstract;
  }

  return "Abstract unavailable from accessible sources.";
}

function toPublication(record: CitationRecord): Publication {
  const venue = record["container-title"] ?? record.publisher ?? "Publication";
  const year = getIssuedParts(record)[0]?.toString();
  const badge = year && !venue.includes(year) ? `${venue} · ${year}` : venue;
  const url = record.URL ?? (record.DOI ? `https://doi.org/${record.DOI}` : undefined);

  return {
    title: record.displayTitle ?? record.title,
    badge,
    abstractSummary: getAbstractSummary(record),
    categories: record.categories ?? [],
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