import { localStore } from './localStore';
import { writable } from 'svelte/store';

export const username = localStore('username', 'code breaker');
export const adventureLevel = localStore('level', '1');
export const adventureCode = localStore('code', 'start');
export const adventureCodes = localStore('adventure_codes', JSON.stringify({ 1: 'start' }));

export const user = writable<any>(null);

// Sync username
user.subscribe(u => {
   if (u && u.user_metadata?.username) {
      username.set(u.user_metadata.username);
   } else if (u && u.email) {
      username.set(u.email);
   }
});