import { LitElement, html, css } from 'lit-element';
import { SimpleLoadingAnimationMixin } from './SimpleLoadingAnimationMixin.js';

export class SimpleLoadingAnimationWithText extends SimpleLoadingAnimationMixin(LitElement) {
    static get styles() {
        return css`
            .app-loading {
                width: 100%;
                text-align: center;
                font-family: AvenirNextLTPro-Demi, Helvetica, Arial, sans-serif;
                font-size: 18px;
                color: #4d4d4d;
            }
            @-webkit-keyframes blink {
                0%,
                100% {
                    opacity: 0.2;
                }
                20% {
                    opacity: 1;
                }
            }
            @keyframes blink {
                0%,
                100% {
                    opacity: 0.2;
                }
                20% {
                    opacity: 1;
                }
            }
            .app-loading div span {
                -webkit-animation-name: blink;
                animation-name: blink;
                -webkit-animation-duration: 1.4s;
                animation-duration: 1.4s;
                -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }
            .app-loading div span:nth-child(2) {
                -webkit-animation-delay: 0.2s;
                animation-delay: 0.2s;
            }
            .app-loading div span:nth-child(3) {
                -webkit-animation-delay: 0.4s;
                animation-delay: 0.4s;
            }
        `;
    }

    render() {
        return html`<div class="app-loading">
            <div>${this.text}<span>.</span><span>.</span><span>.</span></div>
        </div>`;
    }
}
