import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { basename, join } from "node:path";
import { portfolioProjects, projectScreenshotDefaults } from "../lib/portfolio";

const readyProjects = portfolioProjects.filter(
  (project) => project.status === "ready" && project.screenshot.sourceUrl
);

mkdirSync(projectScreenshotDefaults.outputDir, { recursive: true });

for (const project of readyProjects) {
  const outputPath = join(
    projectScreenshotDefaults.outputDir,
    `${basename(project.screenshot.assetPath).replace(/\.[^.]+$/, "")}.png`
  );

  const args = [
    "playwright",
    "screenshot",
    "--viewport-size",
    `${projectScreenshotDefaults.viewportWidth},${projectScreenshotDefaults.viewportHeight}`,
    "--full-page",
    project.screenshot.sourceUrl,
    outputPath,
  ];

  console.log(`Capturing ${project.name}: ${project.screenshot.sourceUrl}`);
  execFileSync("npx", args, { stdio: "inherit" });
}
