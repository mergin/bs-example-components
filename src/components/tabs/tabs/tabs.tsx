import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'bs-tabs',
    styleUrl: 'tabs.scss',
    shadow: true
})
export class Tabs {

    render() {
        return (
            <Host>
                <h2>Tab 1</h2>
                <slot name="tab-1"></slot>

                <h2>Tab 2</h2>
                <slot name="tab-2"></slot>

                <h2>Tab 1</h2>
                <slot name="tab-3"></slot>
            </Host>
        );
    }

}
