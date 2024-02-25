import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "/favicon.ico",
      title: "Harmonic Software",
      description: "Harmonic software is a trusted software agency for the age of AI.",
      logo: {
        light: "./src/assets/logo/harmonic-logo-light.svg",
        dark: "./src/assets/logo/harmonic-logo-dark.svg",
      },
      social: {
        linkedin: "https://www.linkedin.com/company/harmonic-software-llc/",
      },
      sidebar: [
        {
          label: "Info",
          items: [{ label: "About", link: "/info/about/" }],
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
