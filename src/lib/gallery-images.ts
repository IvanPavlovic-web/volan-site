const desktopGalleryModules = import.meta.glob("/public/Images/gallery/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const mobileGalleryModules = {
  ...(import.meta.glob("/public/Images/gallery-mobile/*.webp", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>),
  ...(import.meta.glob("/public/Images/gallery-mobile/*.jpg", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>),
  ...(import.meta.glob("/public/Images/gallery-mobile/*.jpeg", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>),
  ...(import.meta.glob("/public/Images/gallery-mobile/*.png", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>),
  ...(import.meta.glob("/public/Images/gallery-mobile/*.avif", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>),
} as Record<string, string>;

const naturalSort = (a: string, b: string) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });

const getFileName = (path: string) => {
  const segments = path.split("/");
  return segments[segments.length - 1] ?? path;
};

const getFileStem = (path: string) => getFileName(path).replace(/\.[^.]+$/, "");

export type GalleryImageSource = {
  id: string;
  desktopUrl: string;
  mobileUrl: string;
};

const mobileByFileStem = new Map(
  Object.entries(mobileGalleryModules).map(([path, url]) => [getFileStem(path), url] as const),
);

export const galleryImages: GalleryImageSource[] = Object.entries(desktopGalleryModules)
  .sort(([pathA], [pathB]) => naturalSort(pathA, pathB))
  .map(([path, desktopUrl]) => {
    const id = getFileStem(path);
    const mobileUrl = mobileByFileStem.get(id) ?? desktopUrl;

    return {
      id,
      desktopUrl,
      mobileUrl,
    };
  });

export const galleryImageUrls = galleryImages.map((image) => image.desktopUrl);
export const galleryMobileImageUrls = galleryImages.map((image) => image.mobileUrl);
