const serviceModules = import.meta.glob("/public/Images/services/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const naturalSort = (a: string, b: string) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });

export const serviceImageUrls = Object.entries(serviceModules)
  .sort(([pathA], [pathB]) => naturalSort(pathA, pathB))
  .map(([, url]) => url);
