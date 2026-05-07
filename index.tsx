import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { ReservationForm } from "@/components/site/ReservationForm";
import heroDish from "@/assets/hero-dish.jpg";
import dishDuck from "@/assets/dish-duck.jpg";
import dishTaco from "@/assets/dish-taco.jpg";
import dishLasagna from "@/assets/dish-lasagna.jpg";
import dishCroquettes from "@/assets/dish-croquettes.jpg";
import interior from "@/assets/interior-1.jpg";
import chef from "@/assets/chef.jpg";
import atmosphere from "@/assets/atmosphere.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const dishes = [
  { name: "Magret de Pato", desc: "Seared duck breast, berry reduction, microgreens.", price: "24", img: dishDuck },
  { name: "Taco Cochinita", desc: "Slow-braised pork pibil, pickled red onion, cilantro.", price: "14", img: dishTaco },
  { name: "Lasagna", desc: "House-made pasta, slow ragù, parmesan foam.", price: "19", img: dishLasagna },
  { name: "Croquettes", desc: "Golden, molten centre, smoked aioli.", price: "12", img: dishCroquettes },
];

const reviews = [
  { quote: "Great food and good service — would recommend the lasagne and the duck!", author: "Marcus L." },
  { quote: "Sophisticated dishes that are uniquely presented. A real find in Palma.", author: "Elena R." },
  { quote: "The flavors stayed with us for days. We'll be back next trip.", author: "James & Sofia" },
];

function Index() {
  return (
    <div id="top" className="bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={heroDish}
          alt="Signature fusion dish at Infineat"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-background/30" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-20 md:pb-28">
          <div className="animate-float-up">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-10 bg-primary" />
              Palma de Mallorca · Est. fusion
            </p>
            <h1 className="font-display text-5xl leading-[1.05] text-balance text-cream md:text-7xl lg:text-8xl">
              A Unique Fusion <br />
              <span className="italic gradient-gold-text">Dining Experience</span> <br />
              in Palma.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Creative flavors. Thoughtful cuisine. Memorable moments —
              served just off the harbour.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="group inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-glow"
              >
                View Menu
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#reserve"
                className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 text-sm uppercase tracking-[0.2em] text-cream backdrop-blur-sm transition-all hover:border-cream hover:bg-cream/5"
              >
                Book a Table
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground animate-shimmer">
          Scroll
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-28 md:py-40">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:gap-24 md:items-center">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">Our Story</p>
            <h2 className="font-display text-4xl text-balance md:text-6xl">
              Cuisine without <span className="italic gradient-gold-text">borders</span>.
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Infineat was born from a single idea: that the most memorable
                meals live where traditions meet. Our kitchen blends Mediterranean
                roots with techniques and flavors gathered from far beyond
                the island.
              </p>
              <p>
                Every plate is composed with intention — quality ingredients,
                precise hands, and a quiet confidence that lets the food speak.
                Service is attentive, never intrusive. The result is a dining
                experience that feels both unfamiliar and entirely yours.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <Stat value="4.8" label="Guest rating" />
              <span className="h-10 w-px bg-border" />
              <Stat value="300+" label="Reviews" />
              <span className="h-10 w-px bg-border" />
              <Stat value="2019" label="Since" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <img
                src={chef}
                alt="Chef plating a dish at Infineat"
                width={1280}
                height={1600}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover shadow-elegant"
              />
              <div className="absolute -bottom-6 -left-6 hidden border border-primary/40 bg-background/90 px-6 py-4 backdrop-blur-md md:block">
                <p className="font-display text-2xl gradient-gold-text">Chef's table</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Reserve in advance</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="hairline" /></div>

      {/* MENU */}
      <section id="menu" className="py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">Signature Plates</p>
            <h2 className="font-display text-4xl md:text-6xl text-balance">
              A menu shaped by <span className="italic gradient-gold-text">curiosity</span>.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Four dishes our guests return for. The full menu changes with the seasons.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {dishes.map((d, i) => (
              <Reveal key={d.name} delay={i * 80}>
                <article className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-sm bg-card aspect-square">
                    <img
                      src={d.img}
                      alt={d.name}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                    <span className="absolute right-4 top-4 rounded-full border border-primary/40 bg-background/70 px-3 py-1 text-xs text-primary backdrop-blur-md">
                      €{d.price}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl">{d.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative overflow-hidden py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-12 md:gap-6">
            <Reveal className="md:col-span-5">
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">The Experience</p>
              <h2 className="font-display text-4xl md:text-6xl text-balance">
                Street-side, <br /><span className="italic gradient-gold-text">candle-lit</span>, slow.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Tucked into a quiet street in Palma, Infineat hums with warm
                light, low conversation, and the soft clink of glasses. The
                room is intimate; the service is attentive but unhurried.
                Stay for one dish, or settle in for the evening.
              </p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <img src={interior} alt="Interior" width={1280} height={1600} loading="lazy"
                  className="col-span-1 row-span-2 aspect-[3/4] w-full rounded-sm object-cover shadow-elegant" />
                <img src={atmosphere} alt="Street terrace at twilight" width={1600} height={1024} loading="lazy"
                  className="aspect-[4/3] w-full rounded-sm object-cover shadow-elegant" />
                <img src={dishTaco} alt="Plated taco" width={1024} height={1024} loading="lazy"
                  className="aspect-[4/3] w-full rounded-sm object-cover shadow-elegant" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="relative py-28 md:py-40">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{ backgroundImage: `radial-gradient(circle at 50% 0%, oklch(0.78 0.12 70 / 0.15), transparent 60%)` }}
        />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <div className="mx-auto inline-flex flex-col items-center">
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 font-display text-6xl gradient-gold-text">4.8</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">From 300+ guest reviews</p>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure className="group h-full rounded-sm border border-border bg-card/50 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
                  <span className="font-display text-5xl leading-none text-primary/40">"</span>
                  <blockquote className="mt-2 text-foreground leading-relaxed">{r.quote}</blockquote>
                  <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    — {r.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 grid gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">Find Us</p>
            <h2 className="font-display text-4xl md:text-5xl">
              C. de la Fàbrica, 15 <br />
              <span className="text-muted-foreground">Palma de Mallorca</span>
            </h2>
            <dl className="mt-10 space-y-6">
              <Info label="Hours" value="Open daily · until 11:00 PM" />
              <Info label="Phone" value="+34 971 000 000" href="tel:+34971000000" />
              <Info label="Email" value="hello@infineat.com" href="mailto:hello@infineat.com" />
            </dl>
            <a
              href="https://maps.google.com/?q=C.+de+la+Fàbrica+15+Palma+de+Mallorca"
              target="_blank" rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-6 py-3 text-sm uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Get Directions →
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-sm border border-border shadow-elegant">
              <iframe
                title="Infineat location"
                src="https://www.google.com/maps?q=C.%20de%20la%20F%C3%A0brica%2015%20Palma%20de%20Mallorca&output=embed"
                className="aspect-square w-full grayscale-[40%] contrast-110"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESERVE */}
      <section id="reserve" className="relative py-28 md:py-40">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">Reservations</p>
            <h2 className="font-display text-4xl md:text-6xl text-balance">
              Reserve your <span className="italic gradient-gold-text">evening</span>.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Tables open up to 60 days in advance. We'll confirm by email.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-14">
            <div className="rounded-sm border border-border bg-card/40 p-8 md:p-12 backdrop-blur-sm shadow-elegant">
              <ReservationForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-16">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl">
              <span className="gradient-gold-text font-semibold">Infi</span>neat<span className="text-accent">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Fusion cuisine, served slowly, in the heart of Palma de Mallorca.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Visit</p>
            <p className="mt-4 text-sm text-muted-foreground">C. de la Fàbrica, 15</p>
            <p className="text-sm text-muted-foreground">Palma de Mallorca, Spain</p>
            <p className="mt-2 text-sm text-muted-foreground">Open until 11 PM</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Follow</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Instagram", "Facebook", "TripAdvisor"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-muted-foreground transition-colors hover:text-primary">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl px-6 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Infineat. All rights reserved.</p>
          <p className="uppercase tracking-[0.3em]">Crafted with care</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl gradient-gold-text">{value}</p>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-lg">
        {href ? <a href={href} className="hover:text-primary transition-colors">{value}</a> : value}
      </dd>
    </div>
  );
}
