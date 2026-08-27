import {
  Scissors,
  Shirt,
  Sparkles,
  Baby,
  Ruler,
  Moon,
  Pencil,
} from "lucide-react";
import {
  services as fallbackServices,
  servicesSection,
} from "@/lib/site";
import { supabase } from "@/lib/supabase";
import styles from "./Services.module.css";

const ICONS: Record<string, React.ReactNode> = {
  scissors: <Scissors size={20} strokeWidth={1.6} />,
  shirt: <Shirt size={20} strokeWidth={1.6} />,
  sparkle: <Sparkles size={20} strokeWidth={1.6} />,
  kids: <Baby size={20} strokeWidth={1.6} />,
  ruler: <Ruler size={20} strokeWidth={1.6} />,
  moon: <Moon size={20} strokeWidth={1.6} />,
  pencil: <Pencil size={20} strokeWidth={1.6} />,
};

const NAME_TO_ICON: { match: RegExp; icon: string }[] = [
  { match: /blouse/i, icon: "sparkle" },
  { match: /churidar|kurti|suit/i, icon: "shirt" },
  { match: /frock|kids|child/i, icon: "kids" },
  { match: /night|nightwear|nighty/i, icon: "moon" },
  { match: /alter/i, icon: "ruler" },
  { match: /custom|design|stitch/i, icon: "scissors" },
];

function iconFor(name: string) {
  return (
    NAME_TO_ICON.find(({ match }) => match.test(name))?.icon ??
    "pencil"
  );
}

type DisplayService = {
  name: string;
  desc: string;
  icon: string;
};

async function getServices(): Promise<DisplayService[]> {
  // Use local content when Supabase is not configured.
  if (!supabase) {
    return fallbackServices;
  }

  const { data, error } = await supabase
    .from("services")
    .select("name, description")
    .eq("visible", true)
    .order("display_order", { ascending: true });

  // Fall back to local content if the database is unavailable
  // or doesn't contain any visible services.
  if (error || !data || data.length === 0) {
    return fallbackServices;
  }

  return data.map((service) => ({
    name: service.name,
    desc: service.description ?? "",
    icon: iconFor(service.name),
  }));
}

export default async function Services() {
  const services = await getServices();

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <header className={styles.intro} data-reveal>
          <span className={styles.label}>
            {servicesSection.label}
          </span>

          <h2 className={styles.heading}>
            {servicesSection.heading}
          </h2>
        </header>

        <div className={styles.grid}>
          {services.map((service) => (
            <article
              className={styles.card}
              key={service.name}
              data-reveal
            >
              <span
                className={styles.icon}
                aria-hidden="true"
              >
                {ICONS[service.icon] ?? ICONS.pencil}
              </span>

              <h3 className={styles.name}>
                {service.name}
              </h3>

              <p className={styles.desc}>
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}