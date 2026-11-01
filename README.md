# Minimal BootLab button

Supersedes the native BootLab integration. The user requested restoring the original ficha and adding only a button linking to the separate BootLab page.

Assemble the deployment from `deployment-source-manifest.json` plus `vercel.json` and `scripts/add-bootlab-link.mjs`. All original production source files are reused by immutable SHA. The build script adds one link to the existing Alrededor del fuego project data and scoped button styles. This makes the button available in both the original dialog and the original standalone ficha. It does not replace routes, components, navigation or page layouts.

The `/bootlab-santacruz` project-level rewrite stays enabled, serving the existing separate landing page from `https://luisalbornoz-site.vercel.app/bootlab-santacruz/index.html`.

The full current source is retained in Vercel. The older GitHub main and Sites checkout must not replace it. This branch is a versioned patch, not a standalone application.
