---
name: svelte-rules
description: Mandatory rules and constraints for Svelte syntax and DaisyUI styling, including {@const} placement and DaisyUI semantic pair classes.
---

# Svelte & UI Syntax Guidelines

## Strict Placement of `{@const}` Tags
In Svelte (v3/v4), local constants declared with `{@const}` MUST be placed as **immediate children** of supported block structures:
- `{#if ...}` / `{:else if ...}` / `{:else}`
- `{#each ...}`
- `{:then ...}` / `{:catch ...}`
- `<svelte:fragment>`
- Component tags

### ❌ Incorrect Usage
Never place `{@const}` inside standard HTML elements (`<div>`, `<span>`, `<g>`, etc.):
```svelte
{#each items as item}
    <div>
        {@const isValid = item.status === 'ok'} <!-- ERROR: {@const} must be an immediate child of block -->
        <span>{item.name}</span>
    </div>
{/each}
```

### ✅ Correct Usage
Place `{@const}` directly under the block statement:
```svelte
{#each items as item}
    {@const isValid = item.status === 'ok'}
    <div>
        <span>{item.name}</span>
    </div>
{/each}
```

---

## DaisyUI Semantic Pair Classes
Always pair background colors with their corresponding DaisyUI semantic content text color classes to guarantee contrast and theme readability:
- `btn-warning` paired with `text-warning-content` (or `btn btn-warning`)
- `btn-primary` paired with `text-primary-content`
- `btn-secondary` paired with `text-secondary-content`
- `btn-accent` paired with `text-accent-content`
- `bg-base-200` / `bg-base-300` paired with `text-base-content`

### Rule
Avoid mixing arbitrary background utilities (e.g., `bg-amber-400`) with ad-hoc text colors. Always use DaisyUI semantic pair classes.
