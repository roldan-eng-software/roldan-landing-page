import { render, screen } from '@testing-library/react';
import Home from '../page';
import { contactChannels } from '@/lib/site';

describe('Home page', () => {
  it('renders the refreshed landing page sections and fullstack positioning', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /interfaces com gosto de produto/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /fullstack para negócios/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /tecnologia aparece no resultado/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /projetos que mostram gosto/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /do primeiro clique/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /vamos transformar sua ideia/i })).toBeInTheDocument();
  });

  it('renders primary contact actions from centralized channels', () => {
    render(<Home />);

    expect(screen.getAllByRole('link', { name: /solicitar orçamento/i })[0]).toHaveAttribute(
      'href',
      contactChannels.whatsapp.href,
    );
    expect(screen.getByRole('link', { name: /enviar briefing por e-mail/i })).toHaveAttribute(
      'href',
      contactChannels.email.href,
    );
    expect(screen.getByRole('link', { name: /ver trabalhos/i })).toHaveAttribute('href', '#projects');
  });
});
