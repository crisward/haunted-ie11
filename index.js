import { component,useState } from '@matthewp/haunted'
import { html } from 'lit-html'

function Counter(el) {
  const [count, setCount] = useState(+el.getAttribute("value") || 0);

  return html`
    <style>
      button{
        line-height:20px;
        border:1px solid #ddd;
        padding:10px;
        margin:30px 5px 5px 5px;
        width:35px;
        font-size:20px;
      }
    </style>
    <div style="border:1px solid #ccc;width:100px;padding:20px;font-size:20px;">
      <div id="count" style="text-align:center">${count}</div>
      <button type="button"  @click=${() => setCount(count + 1)}>&plus;</button>
      <button type="button"  @click=${() => setCount(count - 1)}>&minus;</button>
    </div>
  `;
}

customElements.define('my-counter', component(Counter));