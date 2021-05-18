import { build } from "https://deno.land/x/esbuild@v0.11.23/mod.js";
import { cache } from "https://raw.githubusercontent.com/cumet04/esbuild-plugin-cache/master/deno/mod.ts";

const importmap = {
  imports: {},
}

await build({
  entryPoints: ['main.tsx'],
  bundle: true,
  outfile: 'out.js',
  plugins: [cache({importmap, directory: './.esbuild-plugin-cache'})],
});
Deno.exit();
