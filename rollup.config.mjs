// rollup.config.mjs
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    cache: false,
    /**
     * https://rollupjs.org/configuration-options/#maxparallelfileops
     * default 20
     * Without a limit or with a high enough value, builds can fail with an "EMFILE: too many open files"
     */
    mmaxParallelFileOps: 20,
    input: 'src/main.ts',
    output: [{
        dir: 'dist',
        /**
         * https://rollupjs.org/configuration-options/#output-format
         */
        format: 'es',
        /**
         * https://rollupjs.org/configuration-options/#output-entryfilenames
         */
        entryFileNames: '[name]-[format]-[hash].ts',
        chunkFileNames: '[name]-[format]-[hash].ts',
        /**
         * https://rollupjs.org/configuration-options/#output-preservemodules
         */
        preserveModules: true,
        exports: 'named',
    },
        // {
        //     file: 'bundle.min.js',
        //     format: 'iife',
        //     name: 'version',
        //     plugins: [terser()]
        // }
    ],
    plugins: [
        nodeResolve({
            extensions: ['.ts'],
        }),
        typescript(),
        json(),
    ],
};