import { Component, Host, h, State } from '@stencil/core';

type TabNumber = 1 | 2 | 3;

@Component({
    tag: 'bs-tabs',
    styleUrl: 'tabs.scss',
    shadow: true
})
export class Tabs {

    @State() private selectedTab: TabNumber = 1;

    render() {
        return (
            <Host>
                <button onClick={this.onTabSelect.bind(this, 1)}>Tab 1</button>
                <button onClick={this.onTabSelect.bind(this, 2)}>Tab 2</button>
                <button onClick={this.onTabSelect.bind(this, 3)}>Tab 1</button>
                {
                    this.selectedTab === 1 ? <slot name="tab-1"></slot> :
                        this.selectedTab === 2 ? <slot name="tab-2"></slot> :
                            this.selectedTab === 3 ? <slot name="tab-3"></slot> : null
                }
            </Host>
        );
    }

    private onTabSelect(tabNumber: TabNumber): void {
        this.selectedTab = tabNumber;
    }

}
