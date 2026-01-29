import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Itihas",
    template: "%s · Itihas",
  },
  description:
    "An encyclopedic exploration of the history of the Indian subcontinent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-900 antialiased selection:bg-blue-100">
        <div className="mx-auto max-w-3xl px-5 py-12">
          {/* Page Content */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* Footer */}
          <footer className="mt-20 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
            <p>
              ©{" "}
              {new Date().getFullYear()}{" "}
              Itihas — A learning-first
              historical encyclopedia.
              Content is continuously
              expanded and referenced.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
