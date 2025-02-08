import { defineConfig } from 'orval'

export default defineConfig({
  backend: {
    output: {
      client: 'zod',
      mode: 'single',
      target: './src/api/types.ts',
    },
    input: {
      target: 'http://127.0.0.1:8000/openapi.json',
    },
  },
})
