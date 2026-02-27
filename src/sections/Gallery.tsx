import { galleryImages } from "@/lib/gallery-images";

const Gallery = () => {
  const items = galleryImages;
  const hasImages = items.length > 0;
  const placeholders = hasImages ? items : [{ id: "placeholder", desktopUrl: "", mobileUrl: "" }];

  return (
    <section id="gallery" className="border-b border-[#1f1f1f]">
      <div className="relative">
        {placeholders.map((image, index) => (
          <article
            key={`${image.id}-${index}`}
            className="sticky top-0 h-screen overflow-hidden bg-[#0d0d0d]"
          >
            {image.desktopUrl ? (
              <picture className="absolute inset-0 block h-full w-full">
                <source media="(max-width: 767px)" srcSet={image.mobileUrl} />
                <img
                  src={image.desktopUrl}
                  alt={`Reparacije letvi volana Banja Luka galerija ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                  sizes="100vw"
                  className="h-full w-full object-cover object-center"
                />
              </picture>
            ) : (
              <div className="absolute inset-0 bg-[#0d0d0d]" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
