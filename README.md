# BootLab Santa Cruz integration

These three files add a native BootLab page and an exact Alrededor del fuego route that reuses the existing project component with an additional resource link.

The live portfolio source is newer than the earlier Sites/GitHub checkout. `deployment-source-manifest.json` references all 314 unchanged files from the October 22 production deployment by immutable Vercel content SHA. Deployment is assembled from those unchanged files plus these three files. Do not deploy this branch as a standalone application or replace the current portfolio with the older GitHub main branch.

After production promotion, disable the legacy project-level rewrite for `/bootlab-santacruz` so that the native route is served. Existing artwork, global styles, header and footer are reused once.
