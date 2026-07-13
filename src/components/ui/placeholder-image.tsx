import Image from "next/image";

/**
 * Clearly-labeled placeholder image (CLAUDE.md §5.1). Swap the file in
 * public/placeholders/ for the client's real asset and drop the badge later.
 */
export function PlaceholderImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-surface ${className ?? ""}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
      <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white/70">
        placeholder
      </span>
    </div>
  );
}
