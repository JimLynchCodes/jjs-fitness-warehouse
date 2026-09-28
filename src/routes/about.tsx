import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About Us — JJ's Fitness Warehouse" }],
  }),
  component: AboutPage,
});

// About page content only. It renders in the root layout's <Outlet />, in the
// same spot as the home page's store cards, so header/nav/hero stay put.
function AboutPage() {
  return (
    <div className="animate-route-slide-up mt-12 w-full max-w-2xl text-lg text-muted-foreground">
      <h2 className="font-display text-5xl text-gold">About JJ's Fitness Warehouse</h2>
      <br/>
      <p>
        At JJ's Fitness Warehouse, we're dedicated to bringing quality sports nutrition, fitness essentials, and performance products to athletes, gyms, retailers, and fitness enthusiasts throughout the greater NYC area.
      </p>
      <br/>
      <p>
        Whether you're stocking up on training essentials, replenishing your gym's inventory, or shopping for your own fitness goals, we make it easy to find and order the products you need with a straightforward, reliable experience.
      </p>
      <br/>
      <p>
        From individual purchases to wholesale orders, JJ's Fitness Warehouse is your local source for performance.
      </p>
      <br/>
      <ol className="space-y-4 text-left">
        <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-md backdrop-blur-md transition-all hover:border-gold/40">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-lg font-bold text-gold">
            1
          </span>
          <div className="pt-1">
            <h3 className="font-semibold text-xl text-foreground">Quality</h3>
            <p className="mt-1 text-muted-foreground">Carefully selected fitness and sports nutrition products designed to support training, performance, and recovery.</p>
          </div>
        </li>

        <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-md backdrop-blur-md transition-all hover:border-gold/40">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-lg font-bold text-gold">
            2
          </span>
          <div className="pt-1">
            <h3 className="font-semibold text-xl text-foreground">Authentic</h3>
            <p className="mt-1 text-muted-foreground">Genuine products from trusted manufacturers and suppliers, with quality and product integrity at the forefront.</p>
          </div>
        </li>
        <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-md backdrop-blur-md transition-all hover:border-gold/40">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-lg font-bold text-gold">
            3
          </span>
          <div className="pt-1">
            <h3 className="font-semibold text-xl text-foreground">Convenient</h3>
            <p className="mt-1 text-muted-foreground">Simple ordering, dependable service, and convenient purchasing for individual customers and businesses.</p>
          </div>
        </li>
        <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-md backdrop-blur-md transition-all hover:border-gold/40">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-lg font-bold text-gold">
            4
          </span>
          <div className="pt-1">
            <h3 className="font-semibold text-xl text-foreground">Curated</h3>
            <p className="mt-1 text-muted-foreground">A focused selection of fitness essentials and performance products. Less clutter, more of what athletes and fitness businesses actually need.</p>
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
