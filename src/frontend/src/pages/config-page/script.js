      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#22c55e",
              "background-light": "#f6f8f7",
              "background-dark": "#122017", // Overriding base background to match the dark theme requirement while staying in palette
              "accent-orange": "#f97316",
              "accent-dark-green": "#346751",
              "accent-red": "#C84B31",
              "accent-cream": "#ECDBBA",
              "neutral-gray": "#a1a1aa",
            },
            fontFamily: {
              "display": ["Inter", "sans-serif"],
            },
            borderRadius: {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px",
            },
          },
        },
      }