---
name: answer-checker
description: Guidelines and patterns for implementing interactive answer checking inputs with DaisyUI input-group structure in Svelte.
---

# Answer Checker Skill Guide

## Component Overview
Use the `AnswerChecker` component (`src/lib/components/AnswerChecker.svelte`) whenever rendering text or number inputs paired with a submit button for exercise or puzzle answer checking.

## Usage Pattern

```svelte
<script lang="ts">
  import AnswerChecker from '$lib/components/AnswerChecker.svelte';

  let userAnswer = '';

  function handleCheck() {
    console.log('Submitted:', userAnswer);
  }
</script>

<AnswerChecker
  bind:value={userAnswer}
  placeholder="พิมพ์คำตอบที่นี่..."
  buttonText="ตรวจคำตอบ"
  btnClass="bg-amber-500 hover:bg-amber-400 text-slate-950"
  on:submit={handleCheck}
/>
```

## Key Rules
1. **Input Group Wrapper**: Always wrap `<input>` and `<button>` inside a DaisyUI `<div class="input-group">` container inside `<form class="form-control">`.
2. **Dark Background Guarantee**: Inputs must enforce `style="background-color: #020617 !important; color: #f8fafc !important;"` to prevent DaisyUI theme overrides.
3. **Responsive Sizing**: Support `size="sm"`, `size="md"`, or `size="lg"`.
