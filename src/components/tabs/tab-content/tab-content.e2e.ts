import { newE2EPage } from '@stencil/core/testing';

describe('bs-tab-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-tab-content></bs-tab-content>');

    const element = await page.find('bs-tab-content');
    expect(element).toHaveClass('hydrated');
  });
});
