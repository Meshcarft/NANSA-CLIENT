import { HomeHero } from "@/widgets/home-hero";

/**
 * Home Page (FSD Pages Layer)
 * Role: Entry point for the root route.
 * Responsibility: Assemblies widgets.
 */
export default function Home() {
  return (
    <main>
      <HomeHero />
    </main>
  );
}
