import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'bs-card-rectangle',
    styleUrl: 'card-rectangle.scss',
    assetsDirs: ['assets'],
    shadow: true
})
export class CardRectangle {

    @Prop() cardtitle: string = 'Título';
    @Prop() subtitle: string = 'Subtítulo';
    @Prop() buttontext: string = 'Texto botón';
    @Prop() image: string = 'example-car.png';
    @Prop() imageurl: string = 'https://as1.ftcdn.net/jpg/02/44/83/32/500_F_244833214_bBmRijbyEmtKrm7Q5zdcMc4ks3tpTmVu.jpg';

    render() {
        return (
            <Host>
                {/* left */}
                <div class="item">
                    <h2>{this.cardtitle}</h2>
                    <p>{this.subtitle}</p>
                    <button onClick={this.buttonHandler}>{this.buttontext}</button>
                </div>

                {/* right */}
                <div class="item">
                    {/* <img src={getAssetPath(`./assets/${this.image}`)} alt="" /> */}
                    <img src={this.imageurl} alt="" />
                </div>
            </Host>
        );
    }

    private buttonHandler(): void {
        alert('Button clicked');
    }

}
