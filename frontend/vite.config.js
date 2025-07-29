import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(), // Add the plugin here
  ],
  server: {
    port: 3000, // Specify the port for the Vite development server
    open: true, // Automatically open the browser when the server starts
  },
});
