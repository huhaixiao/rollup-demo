// src/main.js
import { version } from '../package.json';
import foo, { world } from './utils/foo';

export function main() {
	console.log('version ' + version);
	console.log(foo);
	console.log(world);
}
