import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home page', () => {
  it('renders the main landing page sections and contact actions', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /desenvolvimento fullstack para landing pages/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'Sobre' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Tecnologias' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Projetos em Destaque' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Serviços' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Entre em Contato' })).toBeInTheDocument();

    expect(screen.getAllByRole('link', { name: 'Solicitar orçamento' })[0]).toHaveAttribute(
      'href',
      expect.stringContaining('wa.me'),
    );
    expect(screen.getByRole('link', { name: 'Falar por e-mail' })).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:roldan.eng.software@gmail.com'),
    );
    expect(screen.getByRole('link', { name: 'Ver referências por WhatsApp' })).toHaveAttribute(
      'href',
      expect.stringContaining('refer%C3%AAncias+de+projetos'),
    );
  });
});
