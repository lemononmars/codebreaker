import { vi } from 'vitest';

vi.mock('$env/dynamic/public', () => ({
  env: {
    PUBLIC_SUPABASE_URL: 'https://test.supabase.co',
    PUBLIC_SUPABASE_ANON_KEY: 'test-key',
  }
}));

// Mock process.env just in case some part of Vite/Vitest relies on it
process.env.VITE_SUPABASE_URL = 'https://test.supabase.co';
process.env.VITE_SUPABASE_ANON_KEY = 'test-key';
process.env.VITE_DISCORD_WEBHOOK_ID = 'test-webhook-id';
process.env.VITE_DISCORD_WEBHOOK_TOKEN = 'test-webhook-token';

Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_SUPABASE_URL: 'https://test.supabase.co',
    VITE_SUPABASE_ANON_KEY: 'test-key',
    VITE_DISCORD_WEBHOOK_ID: 'test-webhook-id',
    VITE_DISCORD_WEBHOOK_TOKEN: 'test-webhook-token'
  }
});
