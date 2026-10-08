# williamguo.dev

Will Guo's personal site. Plain HTML and CSS, no build step.

```
index.html   the whole page
styles.css   styles
images/      photos (WebP, max 1400px), favicon, social preview
_headers     cache rules for Cloudflare Pages
```

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (Cloudflare Pages)

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git, and pick this repo.
2. Production branch: `master`. Framework preset: None. Build command: leave empty. Build output directory: `/`.
3. After the first deploy, open the project's Custom domains tab and add `williamguo.dev` (and `www.williamguo.dev` if you want it).
   The domain is registered at Porkbun. Pages only serves a root domain like `williamguo.dev` when Cloudflare runs its DNS, so add the domain as a site in Cloudflare and switch the nameservers at Porkbun to the two Cloudflare gives you. The registration itself can stay at Porkbun.

Every push to `master` redeploys automatically.

## History

The 2015–2018 PHP site and the unused Create React App scaffold were removed in the rebuild; both are still in git history before that commit.
