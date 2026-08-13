import Image from "next/image";

export default function FramedImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={900}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
