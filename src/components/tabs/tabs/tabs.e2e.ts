import { newE2EPage } from '@stencil/core/testing';

describe('bs-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-tabs></bs-tabs>');

    const element = await page.find('bs-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
