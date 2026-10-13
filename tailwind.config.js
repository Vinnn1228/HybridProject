/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        copper: "#DB9558", // Accent / primary CTA (#DB9558)
        cream: "#FCF9EA", // Warm, soft background (#FCF9EA)
        mossGreen: "#97A87A", // Primary brand / natural green (#97A87A)
        sageGreen: "#A8BBA3", // Secondary / muted accent (#A8BBA3)
        darkGreen: "#2A3426", // Deep text color for readability on cream
        mutedOlive: "#6C7A65", // Secondary text / placeholder
        border: "#DDE4D8", // Soft border
        surface: "#FFFFFF", // Card / Input background
        surfaceSubtle: "#F4F7EE", // Soft tinted container
        error: "#C85A54",
      },
    },
  },
  plugins: [],
};
