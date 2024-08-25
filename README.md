# Vitest를 설치하기

```bash
pnpm add -D vitest
```

# Vitest 설정하기

```ts
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
});
```

# React Testing library

```bash
pnpm add -D @testing-library/react @testing-library/dom @testing-library/user-event @testing-library/jest-dom @types/react @types/react-dom
```

## Setup

```ts
//vitest.setup.ts
import "@testing-library/jest-dom/vitest"; // matcher를 확장
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});
```
