import { render, screen } from '@testing-library/react';
import ProjectsSection from '../_components/ProjectsSection';
import {
  portfolioProjects,
  projectScreenshotDefaults,
  validatePortfolioProject,
} from '@/lib/portfolio';

describe('portfolio projects', () => {
  it('keeps all configured projects valid for stable rendering', () => {
    expect(portfolioProjects).toHaveLength(5);

    for (const project of portfolioProjects) {
      expect(validatePortfolioProject(project)).toBe(true);
      expect(project.screenshot.width).toBeGreaterThan(0);
      expect(project.screenshot.height).toBeGreaterThan(0);
    }
  });

  it('renders names, descriptions, links and image alt text', () => {
    render(<ProjectsSection />);

    for (const project of portfolioProjects) {
      expect(screen.getByRole('heading', { name: project.name })).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
      expect(
        screen
          .getAllByRole('link', { name: project.linkLabel })
          .some((link) => link.getAttribute('href') === project.url),
      ).toBe(true);
      expect(screen.getByAltText(project.screenshot.alt)).toBeInTheDocument();
    }
  });

  it('defines screenshot capture defaults for consistent first-page thumbnails', () => {
    expect(projectScreenshotDefaults.outputDir).toBe('public/projects');
    expect(projectScreenshotDefaults.viewportWidth).toBe(1440);
    expect(projectScreenshotDefaults.viewportHeight).toBe(1000);
  });
});
