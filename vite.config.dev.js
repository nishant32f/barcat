import { defineConfig } from 'vite';
import { createBarCatConfig } from './vite-plugins/vite-plugin-arcify-extension.js';

export default defineConfig(createBarCatConfig({ isDev: true })); 