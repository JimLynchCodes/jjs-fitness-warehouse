import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About Us — Pineapple Xpress" }],
  }),
  component: AboutPage,
});

// About page content only. It renders in the root layout's <Outlet />, in the
// same spot as the home page's store cards, so header/nav/hero stay put.
function AboutPage() {
  return (
    <div className="animate-route-slide-up mt-12 w-full max-w-2xl text-lg text-muted-foreground">
      <h2 className="font-display text-5xl text-gold">About Pineapple Xpress</h2>
      <br/>
      <p>
        At Pineapple Xpress, we’re all about bringing premium nicotine vapes and disposables straight to your fingertips. With the convenience of an online destination we make it easy to browse and order from a curated collection of the best, most trusted brands all in one place and have them shipped right to your door.
      </p>
      <br/>
      <p>
        Whether you're exploring new flavors or restocking a favorite, Pineapple Xpress is designed to give you a fast, reliable, and hassle-free experience every time.
      </p>
      <br/>
      <ol className="space-y-4 text-left">
        <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-md backdrop-blur-md transition-all hover:border-gold/40">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-lg font-bold text-gold">
            1
          </span>
          <div className="pt-1">
            <h3 className="font-semibold text-xl text-foreground">Fresh</h3>
            <p className="mt-1 text-muted-foreground">We only sell the latest and most popular nicotine vapes.</p>
          </div>
        </li>

        <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-md backdrop-blur-md transition-all hover:border-gold/40">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-lg font-bold text-gold">
            2
          </span>
          <div className="pt-1">
            <h3 className="font-semibold text-xl text-foreground">Legit</h3>
            <p className="mt-1 text-muted-foreground">100% authentic products.</p>
          </div>
        </li>
        <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-md backdrop-blur-md transition-all hover:border-gold/40">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-lg font-bold text-gold">
            3
          </span>
          <div className="pt-1">
            <h3 className="font-semibold text-xl text-foreground">Simple</h3>
            <p className="mt-1 text-muted-foreground">Streamlined online ordering with real-time availability</p>
          </div>
        </li>
        <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-md backdrop-blur-md transition-all hover:border-gold/40">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-lg font-bold text-gold">
            4
          </span>
          <div className="pt-1">
            <h3 className="font-semibold text-xl text-foreground">Curated</h3>
            <p className="mt-1 text-muted-foreground">Focused selection: less overwhelm, more quality</p>
          </div>
        </li>
      </ol>
      <br/>
      <p className="mt-4 text-muted-foreground">
        We strive for excellence with every order.
      </p>
    </div>
  );
}
