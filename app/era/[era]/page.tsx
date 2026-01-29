import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEraBySlug, getEventsByEra } from "@/lib/history";

type Props = {
  params: Promise<{
    era: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ era: string }>;
}): Promise<Metadata> {
  const { era } = await params;
  const eraData = getEraBySlug(era);

  if (!eraData) return {};

  return {
    title: eraData.name,
    description: eraData.description,
  };
}

export default async function EraPage({ params }: Props) {
  const { era } = await params;

  const eraData = getEraBySlug(era);
  if (!eraData) notFound();

  const events = getEventsByEra(era).sort(
    (a, b) => a.year - b.year
  );

  return (
    <article className="space-y-16">
      {/* Header */}
      <header className="space-y-6 max-w-2xl">
        <p className="text-sm text-blue-600 font-medium">
          History
        </p>

        <h1 className="text-4xl font-serif font-semibold tracking-tight">
          {eraData.name}
        </h1>

        <p className="text-blue-600 font-medium">
          {formatYear(eraData.startYear)} —{" "}
          {formatYear(eraData.endYear)}
        </p>

        <p className="text-zinc-700 leading-relaxed">
          {eraData.description}
        </p>
      </header>

      {/* Timeline */}
<section>
  <ol className="relative mt-16 space-y-16">
    {/* Vertical line */}
    <div className="absolute left-[96px] top-0 h-full w-px bg-zinc-200" />

    {events.map((event) => (
      <li
        key={event.slug}
        className="relative grid grid-cols-[80px_32px_1fr] gap-6"
      >
        {/* Date */}
        <time className="text-sm font-medium text-blue-600 text-right pt-1">
          {formatYear(event.year)}
        </time>

        {/* Dot */}
        <div className="relative flex justify-center">
          <span className="mt-1 h-4 w-4 rounded-full border-2 border-blue-600 bg-white z-10" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-serif font-semibold leading-snug">
            <Link
              href={`/era/${eraData.slug}/${event.slug}`}
              className="hover:underline"
            >
              {event.title}
            </Link>
          </h3>

          <p className="text-zinc-700 leading-relaxed max-w-xl">
            {event.summary}
          </p>
        </div>
      </li>
    ))}
  </ol>
</section>

    </article>
  );
}

/* Utility */
function formatYear(year: number) {
  return year < 0
    ? `${Math.abs(year)} BCE`
    : `${year} CE`;
}
