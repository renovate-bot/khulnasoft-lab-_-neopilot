import { defineWorkspace } from 'vitest/config'
import { config } from 'dotenv'

const env = config()
export default defineWorkspace([
  {
    test: {
      include: ['tests/**/*.test.ts'],
      exclude: ['tests/runtimes/**', 'tests/integration/**'],
      isolate: false, // for projects that don't rely on side effects, disabling isolation will improve the speed of the tests
      globals: false,
      testTimeout: 30_000,
      environment: 'node',
      bail: 0,
      server: {},
      deps: {
        interopDefault: true,
      },
      env: {
        ...(process.env as Record<string, string>),
        ...env.parsed,
      },
    },
  },
  {
    test: {
      include: ['tests/runtimes/browser/**/*.{test,spec}.tsx'],
      browser: {
        enabled: true,
        headless: true,
        instances: [{ browser: 'chromium' }],
        provider: 'playwright',
        // https://playwright.dev
      },
      provide: {
        NEOPILOT_API_KEY: process.env.NEOPILOT_API_KEY || env.parsed?.NEOPILOT_API_KEY,
        NEOPILOT_DOMAIN: process.env.NEOPILOT_DOMAIN || env.parsed?.NEOPILOT_DOMAIN,
      },
    },
  },
  {
    test: {
      include: ['tests/runtimes/edge/**/*.{test,spec}.ts'],
      name: 'node',
      environment: 'edge-runtime',
    },
  },
  {
    test: {
      include: ['tests/integration/**/*.test.ts'],
      globals: false,
      testTimeout: 60_000,
      environment: 'node',
    },
  },
])
