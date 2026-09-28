import { createFileRoute } from "@tanstack/react-router";

import Cards, { type Store } from "@/components/Cards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pineapple Xpress — Pineapple Xpress & NIC Vineland" },
      {
        name: "description",
        content:
          "Order online from Pineapple Xpress or visit NIC Vineland at 1381 West Landis Ave, Vineland, NJ.",
      },
      {
        property: "og:title",
        content: "Pineapple Xpress — Pineapple Xpress & NIC Vineland",
      },
      {
        property: "og:description",
        content:
          "Order online from Pineapple Xpress or visit NIC Vineland at 1381 West Landis Ave, Vineland, NJ.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stores: Store[] = [
  {
    name: "Pineapple Xpress Vineland",
    tagline: "Vineland",
    description:
      `1381 W Landis Ave #1381B, Vineland, NJ 08360`,
    action: {
      label: "Order Online",
      href: "https://quickvee.com/merchant/FAW29198NJ?orderMethod=delivery",
      external: true,
    },
  },
  {
    name: "Pineapple Xpress Burlington",
    tagline: "Burlington",
    description:
      `1805 Mt Holly Rd Ste 200, Burlington, NJ 08016`,
    action: {
      label: "Order Online",
      href: "https://quickvee.com/merchant/FAW125934NJ?orderMethod=delivery",
      external: true,
    },
  },
  {
    name: "Third Option",
    tagline: "Queens",
    description:
      `Example of a third option with some extra text. 
      
      34-15 31st St, Long Island City, NY 11106`,
    action: {
      label: "Say What's up",
      href: "https://www.olywarehousenyc.com/",
      external: true,
    },
  },
];

// Home page content: only the store cards. The shared header, nav, hero
// background, headline and footer live in the root layout (__root.tsx).
function Index() {
  return <Cards stores={stores} />;
}
