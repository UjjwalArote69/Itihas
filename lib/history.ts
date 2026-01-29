import { eras } from "@/data/eras";
import { events } from "@/data/events";
import type { Era, Event } from "@/types/history";

export function getAllEras(): Era[] {
    return [...eras].sort(
        (a, b) => a.startYear - b.startYear,
    );
}

export function getEraBySlug(slug: string): Era | undefined {
    return eras.find((era) => era.slug === slug);
}

export function getEventsByEra(eraSlug: string): Event[] {
    return events
        .filter((event) => event.era === eraSlug)
        .sort((a, b) => a.year - b.year);
}

export function getEventBySlug(eraSlug: string, eventSlug: string): Event | undefined {
    return events.find(
        (event) =>
            event.slug === eventSlug &&
            event.era === eraSlug,
    );
}