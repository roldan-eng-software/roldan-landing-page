const githubPagesUrl = "https://roldan-eng-software.github.io/roldan-page/";
const vercelUrl = "https://roldan-landing.vercel.app/";

function withTrailingSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

export const siteUrl = withTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.GITHUB_PAGES === "true" ? githubPagesUrl : vercelUrl)
);
