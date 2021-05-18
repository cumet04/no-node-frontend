import { serve } from "https://deno.land/x/esbuild@v0.11.23/mod.js";
import { cache } from "https://raw.githubusercontent.com/cumet04/esbuild-plugin-cache/master/deno/mod.ts";

const importmap = {
  imports: {},
}

await serve({
  servedir: 'dist',
},
{
  entryPoints: ['src/main.tsx'],
  bundle: true,
  outfile: 'dist/out.js',
  plugins: [cache({importmap, directory: './.esbuild-plugin-cache'})],
}).then(server => {
  console.log(`serve on port ${server.port}`);
});
