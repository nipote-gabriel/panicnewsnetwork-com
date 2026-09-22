import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function StoryImage({
  image,
  alt,
  label,
  className = "aspect-video",
}: {
  image?: string;
  alt: string;
  label: string;
  className?: string;
}) {
  if (!image) {
    return <ImagePlaceholder label={label} className={className} />;
  }
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <Image src={image} alt={alt} fill className="object-cover" />
    </div>
  );
}
