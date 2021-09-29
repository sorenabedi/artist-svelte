import Fragment from 'svelte-fragment-component';
import { tick } from 'svelte';
import { jest } from '@jest/globals';

global.Jest = jest;
global.tick = tick;
global.Fragment = Fragment;
