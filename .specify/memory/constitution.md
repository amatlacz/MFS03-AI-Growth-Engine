<!-- 
SYNC IMPACT REPORT - Constitution v1.0.0 Created
- Status: Initial constitution ratified
- Principles Added: 5 (Code Quality, English-Only Documentation, Component Architecture, TypeScript Strict Mode, Simple & Readable Code)
- Sections Added: Code Quality Standards, Documentation & Comments, Development Workflow
- Version: 0.0.0 → 1.0.0 (MINOR: Initial constitution with new principles)
- Templates Updated: None (initial setup)
- Follow-up: Integrate with CLAUDE.md as runtime development guidance
-->

# AI Growth Engine 2.0 Constitution

## Context

This is a teaching project for the **MBA for Startups** program. Students learn to build and ship web products using AI tools with minimal prior programming experience. The codebase MUST maintain the highest standards of quality, clarity, and maintainability to serve as both a learning tool and a production-ready example.

## Core Principles

### I. High Code Quality (NON-NEGOTIABLE)

Every line of code written for this project MUST meet these standards:
- **Readability First**: Code is written for humans, not machines. Simple, clear, single-purpose functions over clever optimizations.
- **No Technical Debt**: Temporary hacks, workarounds, or "fix later" patterns are prohibited. If it cannot be done cleanly, the approach must be reconsidered.
- **Type Safety**: TypeScript `strict` mode is enabled and enforced. No `any` types. All types must be explicit and meaningful.
- **Testing Mindset**: Components and utilities are designed to be independently testable, even if formal tests are not always written.

**Rationale**: Students learn best by studying high-quality code. This project is their reference implementation. Poor code teaches poor habits.

### II. English-Only Documentation & Comments

All documentation, code comments, commit messages, and issue descriptions MUST be in English. No exceptions.
- Every comment MUST explain *why*, not *what*. The code itself shows what it does.
- Comments are used sparingly—only for non-obvious intent, trade-offs, or constraints that the code cannot convey.
- Inline comments narrating obvious code (e.g., "increment counter") are prohibited.
- Commit messages follow conventional format: `<type>: <description>` (e.g., `feat: add coffee menu component`).

**Rationale**: English ensures the codebase is accessible to international developers and students. Clear communication prevents misunderstandings in a teaching context.

### III. Component Architecture

All React components MUST follow these rules:
- **Single Responsibility**: Each component has one clear purpose. If a component does multiple things, split it.
- **Small and Focused**: Components rarely exceed 150 lines. Larger components indicate design issues.
- **Prop-Based Configuration**: Components accept configuration via props, not global state or magic values.
- **Naming Clarity**: Component names are descriptive nouns (e.g., `HeroSection`, `CoffeeMenu`, not `Layout1`, `Comp`).
- **File Organization**: Pages live in `app/`, reusable components in `components/`. One component per file unless logically inseparable.

**Rationale**: Students learn by reading components. Clear structure makes code easy to understand and modify.

### IV. TypeScript Strict Mode

TypeScript `strict: true` is non-negotiable.
- All types are explicit. No implicit `any`.
- Function return types are declared.
- Props interfaces are defined for all components.
- Null checks are mandatory. Use optional chaining (`?.`) and nullish coalescing (`??`) appropriately.

**Rationale**: Type safety catches bugs early. Students learn safer coding habits. Strict mode prevents silent errors.

### V. Simplicity & YAGNI

"You Aren't Gonna Need It" (YAGNI) is a core principle.
- Do not add features, libraries, or abstractions "just in case."
- Prefer built-in solutions (Tailwind classes, Next.js primitives) over external packages.
- Avoid premature optimization. Code clarity trumps micro-optimizations.
- If complexity arises, document the trade-off and its rationale.

**Rationale**: Simplicity is the highest form of sophistication. Students should see best practices, not over-engineered solutions.

## Code Quality Standards

### Styling
- All styling MUST use Tailwind CSS classes. No inline styles, no separate CSS files.
- Use semantic class combinations (e.g., `rounded-xl`, `shadow-lg`, `hover:bg-green-700`).
- Design tokens (colors, spacing) MUST align with project palette and design system.

### File Naming
- Components: PascalCase (e.g., `HeroSection.tsx`, `CoffeeMenu.tsx`)
- Pages: lowercase (e.g., `page.tsx`, `layout.tsx`)
- Utilities: camelCase (e.g., `formatPrice.ts`)

### Performance
- Lazy load components and images where appropriate.
- Use `"use client"` directive only when necessary (client-side interactivity required).
- Avoid unnecessary re-renders. Use functional components with proper dependencies.

## Documentation & Comments

### README & Project Documentation
- Must be comprehensive, clear, and updated with every significant change.
- Include setup instructions, tech stack, deployment process, and development conventions.
- All examples and code snippets MUST be in English.

### Code Comments
- **Good Comment**: Explains *why* a design decision was made or why a non-obvious approach was chosen.
- **Bad Comment**: Narrates what the code does (e.g., "loop through array", "increment counter").
- Comments are rare. Well-named variables and functions should make code self-explanatory.
- Complex algorithms or business logic MUST have comments explaining the approach.

### Commit Messages
- Follow conventional commits: `<type>(<scope>): <description>`
  - Example: `feat(coffee-menu): add product filtering by category`
  - Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`
- Description: imperative mood, lowercase, no period at end.
- If a commit is large, break it into smaller commits. One logical change per commit.

## Development Workflow

### Adding Features
1. **Plan**: Understand requirements. Identify reusable components.
2. **Design**: Sketch component hierarchy and props interface.
3. **Implement**: Write clean, well-typed code. Avoid shortcuts.
4. **Review**: Read your own code as if it were someone else's. Is it clear? Can it be simpler?
5. **Document**: Update README if needed. Add comments only for non-obvious logic.
6. **Commit**: Write a clear, conventional commit message.

### Code Review Checklist
- [ ] Does the code follow the project conventions?
- [ ] Is TypeScript strict mode satisfied? Any `any` types?
- [ ] Are components small, focused, and single-purpose?
- [ ] Is all documentation and comments in English?
- [ ] Are comments explaining *why*, not *what*?
- [ ] Could a student understand this code? Is it clear?
- [ ] Are there any obvious simplifications or refactorings?

## Governance

**This constitution supersedes all informal practices.** When in doubt about how to approach a task, refer to these principles.

### Amendment Process
- Amendments MUST be documented in a commit with message format: `docs: amend constitution to vX.Y.Z (<description>)`
- Version follows semantic versioning:
  - **MAJOR**: Backward-incompatible principle removals or redefinitions.
  - **MINOR**: New principles added or significant expansions.
  - **PATCH**: Clarifications, wording, typo fixes.
- All team members should be informed of constitution changes.

### Compliance
- Every pull request MUST verify compliance with these principles before merge.
- If a PR violates a principle, request changes with explicit reference to the principle.
- If a principle conflicts with a deadline, escalate—do not bypass the principle.

### Runtime Guidance
For day-to-day development questions not covered here, refer to `CLAUDE.md` for AI pair programmer guidance and `README.md` for project setup and conventions.

---

**Version**: 1.0.0 | **Ratified**: 2026-03-11 | **Last Amended**: 2026-03-11
