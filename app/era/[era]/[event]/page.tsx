import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEraBySlug, getEventBySlug } from "@/lib/history";

type Props = {
  params: Promise<{
    era: string;
    event: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    era: string;
    event: string;
  }>;
}): Promise<Metadata> {
  const { era, event } = await params;

  const eventData = getEventBySlug(era, event);
  if (!eventData) return {};

  return {
    title: eventData.title,
    description: eventData.summary,
  };
}

export default async function EventPage({ params }: Props) {
  const { era, event } = await params;

  const eraData = getEraBySlug(era);
  if (!eraData) notFound();

  const eventData = getEventBySlug(era, event);
  if (!eventData) notFound();

  return (
    <article className="space-y-14">
      {/* Breadcrumb */}
      <nav className="text-sm text-blue-600">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link
          href={`/era/${eraData.slug}`}
          className="hover:underline"
        >
          {eraData.name}
        </Link>
      </nav>

      {/* Title + period */}
      <header className="space-y-3 max-w-2xl">
        <h1 className="text-4xl font-serif font-semibold tracking-tight">
          {eventData.title}
        </h1>

        <p className="text-blue-600 font-medium">
          {formatYear(eventData.year)}
        </p>
      </header>

      {/* Description (prose, not sections) */}
      <div className="max-w-2xl space-y-6 text-zinc-700 leading-relaxed">
        <p>{eventData.summary}</p>
      </div>

      {/* Timeline node (single) */}
      <section className="relative mt-16">
        {/* Vertical line */}
        <div className="absolute left-[96px] top-0 h-full w-px bg-zinc-200" />

        <div className="grid grid-cols-[80px_32px_1fr] gap-6">
          {/* Date */}
          <time className="text-sm font-medium text-blue-600 text-right pt-1">
            {formatYear(eventData.year)}
          </time>

          {/* Dot */}
          <div className="relative flex justify-center">
            <span className="mt-1 h-4 w-4 rounded-full border-2 border-blue-600 bg-white z-10" />
          </div>

          {/* Context text */}
          <div className="space-y-3 max-w-xl">
            <p className="text-zinc-700 leading-relaxed">
              This event occurred during the{" "}
              <strong>{eraData.name}</strong>, a period
              spanning from{" "}
              {formatYear(eraData.startYear)} to{" "}
              {formatYear(eraData.endYear)}.
            </p>

            <p className="text-sm text-zinc-500">
              Location: {eventData.location.name}
            </p>
          </div>
        </div>
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
