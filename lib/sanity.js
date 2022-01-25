import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "zhv96q28",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "sk16WRELyKrZArXcQw337LENBB9TY6wACJMA7HDex7zQqnHpttZG4thKi4OH2IDkW1T0ch0yBwWnlNiWYvxJwa30EffSaWWZEyfqIcgCWhTR4ObN6ugj01FTl6HdNiMoyL0kaD0PYHkGUMMz5QJcEYsxlPJwYarJiwN77RbPnbtWC8DyQOSx",
  useCdn: false,
});
