<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project rules

- All site copy, products, projects, team and contact details live in `src/content/site.ts`; values in `[brackets]` are placeholders rendered via `<Field>` as "TBC". Why: client info is incomplete and must be easy to replace.
- Enquiries are inserted from the browser into the `enquiries` table (anon insert-only RLS, no reads). Why: simple public form with no admin UI yet.
- Animations use IntersectionObserver + CSS utilities in `src/styles.css`, no animation libraries. Why: performance and restraint.
