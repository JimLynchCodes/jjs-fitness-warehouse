import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link, Outlet, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import heroPoster from "@/assets/hero-poster.jpg";
import { reportLovableError } from "../lib/lovable-error-reporting";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
] as const;

// Rendered inside the root layout's <Outlet />, so no full-screen wrapper.
function NotFoundComponent() {
  return (
    <div className="mt-12 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>

        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen overflow-hidden bg-background">
        {/* Background media layer — swap in a looping <video> here when the clip is ready */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroPoster}
            alt=""
            aria-hidden="true"
            className="animate-kenburns h-full w-full object-cover"
          />
        </div>

        {/* Slightly transparent charcoal overlay */}
        <div className="overlay-wash absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="flex items-center justify-between px-6 py-6 sm:px-10">
            <span className="font-display text-2xl tracking-widest text-foreground">
              JJ's Fitness&nbsp;
              <span className="text-gold">Warehouse</span>
            </span>

            <>
              {/* Desktop Navigation Links */}
              <div className="hidden items-center gap-4 sm:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="rounded-full border border-gold/40 bg-card px-5 py-2 text-sm font-semibold uppercase tracking-wider text-gold-soft backdrop-blur-md transition-colors hover:bg-gold/15"
                    activeProps={{
                      className: "border-gold bg-gold/20 text-gold",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-card text-gold-soft backdrop-blur-md transition-colors hover:bg-gold/15 sm:hidden"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Mobile Side Drawer Menu & Overlay */}
              <div
                className={`fixed inset-0 z-50 transition-opacity duration-300 sm:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                  }`}
              >
                {/* Dark Backdrop */}
                <div
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                  onClick={() => setIsMenuOpen(false)}
                />

                {/* Side Menu Drawer */}
                <aside
                  className={`absolute top-0 right-0 bottom-0 w-72 border-l border-gold/30 bg-card/95 p-6 shadow-2xl backdrop-blur-xl transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                  {/* Header inside drawer */}
                  <div className="flex items-center justify-between border-b border-gold/20 pb-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold-soft">
                      Menu
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Close menu"
                      className="rounded-full p-1 text-gold-soft transition-colors hover:bg-gold/15"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Navigation Links inside side drawer */}
                  <nav className="mt-8 flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="rounded-xl border border-gold/30 bg-card px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider text-gold-soft transition-colors hover:bg-gold/20 active:scale-95"
                        activeProps={{
                          className: "border-gold bg-gold/20 text-gold",
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </aside>
              </div>
            </>
          </header>

          <main className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
            <p
              className="animate-drift-up text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground sm:text-sm"
              style={{ animationDelay: "0.1s" }}
            >
              Greater NYC | Wholesale & Retail
            </p>
            <h1
              className="font-display animate-drift-up text-glow-gold mt-4 flex flex-col text-[12vw] leading-tight text-foreground sm:gap-x-4 sm:text-[9vw] lg:text-9xl"
              style={{ animationDelay: "0.25s" }}
            >
              <span className="whitespace-nowrap">YOUR LOCAL SOURCE</span>
              <span className="text-gold whitespace-nowrap">FOR PERFORMANCE.</span>
            </h1>
            <p
              className="animate-drift-up mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
              style={{ animationDelay: "0.4s" }}
            >
              Premium sports nutrition, fitness essentials, and performance products for athletes, gyms, and retailers across the New York metro area.
            </p>

            <Outlet />
          </main>

          <footer className="px-6 pb-8 text-center sm:px-10">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
              © 2026 JJ's Fitness Warehouse
            </p>
          </footer>
        </div>
      </div>
    </QueryClientProvider>
  );
}
