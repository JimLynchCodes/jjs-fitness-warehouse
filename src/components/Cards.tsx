import { ExternalLink, LetterText, Mail, MapPin, Phone, PhoneCall, PhoneCallIcon, PhoneIcon, ShoppingBag } from "lucide-react";
export interface Store {
  name: string;
  tagline: string;
  description: string;
  action: {
    label: string;
    href: string;
    external: boolean;
  };
}

interface CardsProps {
  stores: Store[];
}

export default function Cards({ stores }: CardsProps) {
  return (
    <div className="animate-route-slide-up">
      <div className="mt-12 grid w-full max-w-4xl gap-5 sm:grid-cols-2">
      
      <a
        key={'email'}
        href={'mailto:jj@jjsfitnesswarehouse.com'}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-drift-up group rounded-3xl border border-border bg-card p-8 text-left shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-accent/40"
        style={{ animationDelay: `${0.55 + 1 * 0.15}s` }}
      >
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[13px] font-semibold uppercase tracking-widest text-gold-soft">
            {/* {store.tagline} */}
            Email
          </span>
          
            <Mail className="animate-ember-pulse h-5 w-5 text-gold" />
          
        </div>
        {/* <h2 className="font-display mt-5 text-4xl text-foreground">{store.name}</h2> */}
        <p className="mt-5 text-m leading-relaxed text-muted-foreground whitespace-pre-line">
          Email us at: jj@jjsfitnesswarehouse.com
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold transition-all group-hover:gap-3">
          {/* {store.action.label} */}
          Send an email
          <ExternalLink className="h-4 w-4" />
        </span>
      </a>
      
      <a
        key={'call'}
        href={'tel:19177453133'}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-drift-up group rounded-3xl border border-border bg-card p-8 text-left shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-accent/40"
        style={{ animationDelay: `${0.55 + 2 * 0.15}s` }}
      >
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[13px] font-semibold uppercase tracking-widest text-gold-soft">
            {/* {store.tagline} */}
            Call
          </span>
          
            <Phone className="animate-ember-pulse h-5 w-5 text-gold" />

        </div>
        {/* <h2 className="font-display mt-5 text-4xl text-foreground">{store.name}</h2> */}
        <p className="mt-5 text-m leading-relaxed text-muted-foreground whitespace-pre-line">
          {/* {store.description} */}
          Give us a call or text at: +1 (917) 745-3133
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold transition-all group-hover:gap-3">
          {/* {store.action.label} */}
          Call now
          <ExternalLink className="h-4 w-4" />
        </span>
      </a>
      
      </div>
    </div>
  );
}

// {stores.map((store, i) => (
//   <a
//     key={store.name}
//     href={store.action.href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="animate-drift-up group rounded-3xl border border-border bg-card p-8 text-left shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-accent/40"
//     style={{ animationDelay: `${0.55 + i * 0.15}s` }}
//   >
//     <div className="flex items-center justify-between">
//       <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[13px] font-semibold uppercase tracking-widest text-gold-soft">
//         {store.tagline}
//       </span>
      
//         <ShoppingBag className="animate-ember-pulse h-5 w-5 text-gold" />

//         {/* <MapPin className="h-5 w-5 text-gold" /> */}

//     </div>
//     <h2 className="font-display mt-5 text-4xl text-foreground">{store.name}</h2>
//     <p className="mt-3 text-m leading-relaxed text-muted-foreground whitespace-pre-line">
//       {store.description}
//     </p>
//     <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold transition-all group-hover:gap-3">
//       {store.action.label}
//       <ExternalLink className="h-4 w-4" />
//     </span>
//   </a>
// ))}