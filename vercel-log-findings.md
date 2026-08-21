# Vercel Build-Log Findings

## Crops 1–2

The log shows that dependency installation completed and Vercel ran `pnpm run build`. The Vite production build began successfully and transformed 1,617 modules.

The visible messages are warnings that `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID` are undefined in `index.html`, followed by a notice that the corresponding analytics script cannot be bundled without `type="module"`. No build-stopping error is visible in these crops.

## Crops 3–4

The later crops repeat the same warning lines and do not show a failure, non-zero exit status, deployment output-directory issue, or a browser runtime error. The supplied screenshot ends before the Vercel deployment summary, so it cannot establish whether the deployment was ultimately published or what content Vercel served.
