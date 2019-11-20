import { newE2EPage } from '@stencil/core/testing';

describe('bs-card-rectangle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-card-rectangle></bs-card-rectangle>');

    const element = await page.find('bs-card-rectangle');
    expect(element).toHaveClass('hydrated');
  });
});
