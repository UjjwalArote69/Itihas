import Link from "next/link";
import Image from "next/image";
import { getAllEras } from "@/lib/history";

export default function HomePage() {
  const eras = getAllEras();

  return (
    <main className="max-w-md mx-auto px-4 pb-20">
      {/* Header */}
      <header className="text-center mt-16 mb-14 space-y-5">
        <h1 className="text-4xl font-serif font-semibold tracking-tight">
          Bharat Chronicles
        </h1>

        <p className="text-zinc-600 text-sm leading-relaxed max-w-xs mx-auto">
          Exploring the depths of the Indian subcontinent&apos;s past — from the
          Indus Valley to the modern republic.
        </p>
      </header>

      {/* Era Cards */}
      <section className="space-y-10">
        {eras.map((era) => (
          <Link
            key={era.slug}
            href={`/era/${era.slug}`}
            className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-zinc-200 hover:ring-zinc-300 transition"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={getEraImage(era.slug)}
                alt={era.name}
                fill
                className="object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="w-10 h-[3px] bg-blue-600 rounded-full" />

              <h2 className="text-2xl font-serif font-semibold leading-tight">
                {era.name}
              </h2>

              <p className="text-sm text-blue-700 font-medium tracking-wide">
                {formatYear(era.startYear)} —{" "}
                {era.endYear ? formatYear(era.endYear) : "Present"}
              </p>

              <p className="text-sm text-zinc-600 leading-relaxed">
                {era.description}
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-zinc-400 mt-20">
        © {new Date().getFullYear()} Bharat Chronicles
      </footer>
    </main>
  );
}

/* Utilities */

function formatYear(year: number) {
  return year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;
}

function getEraImage(slug: string) {
  switch (slug) {
    case "ancient-india":
      return "/images/ancient.jpg";
    case "medieval-india":
      return "/images/medieval.jpg";
    case "colonial-india":
      return "/images/colonial.jpg";
    case "modern-india":
      return "/images/modern.jpg";
    default:
      return "/images/default.jpg";
  }
}
