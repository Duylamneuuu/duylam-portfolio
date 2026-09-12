import Image from "next/image";
import type { WorkImage } from "@/lib/site";

type FrameProps = {
  image: WorkImage;
  priority?: boolean;
  className?: string;
  sizes: string;
};

export function Frame({ image, priority = false, className = "", sizes }: FrameProps) {
  return (
    <figure className={className}>
      <div className="frame">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
        />
      </div>
      <figcaption className="caption">{image.caption}</figcaption>
    </figure>
  );
}
