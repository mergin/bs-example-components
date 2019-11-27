import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'bs-tab-content',
    styleUrl: 'tab-content.scss',
    shadow: true
})
export class TabContent {

    isSelected: boolean = false;

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
