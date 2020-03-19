//create template to use via the component
const template = document.createElement('template');
template.innerHTML = `
<style>
  .user-card {
    width: 600px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    justify-content: center;
    font-family: 'Arial', sans-serif;
    background: #f4f4f4;
    margin-bottom: 20px;
    border-radius: 98px 15px 15px 98px;
    border-bottom: darkorchid 5px solid;
    position: relative;
  }
  .user-card img {
    width: 100%;
    border-radius: 50%;
  }
  .user-card button {
    position: absolute;
    bottom: 20px;
    cursor: pointer;
    background: darkorchid;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
  }
</style>
<div class="user-card">
  <img />
  <div>
    <h2></h2>
    <div class="info">
      <p><slot name="email" /></p>
      <p><slot name="phone" /></p>
    </div>
    <button id="toggle-info">Hide Info</button>
  </div>
</div>`;

//create custom element
class UserCard extends HTMLElement {
  constructor() {
    //call the constructor of HTMLElement
    super();
    //'this' keyword pertains to our custom element
    //encapsulate everything into a component
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    //from now on, use the shadowRoot for our component
    this.shadowRoot.querySelector('h2').innerText = `${this.getAttribute('name')} : ${this.getAttribute('title')}`;
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    this.showInfo = true;
  }
  //button method - toggle
  toggleInfo() {
    const info = this.shadowRoot.querySelector('.info');
    const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

    this.showInfo = !this.showInfo;
    if (this.showInfo) {
      info.style.display = 'block';
      toggleBtn.innerText = 'Hide Info';
    }
    else {
      info.style.display = 'none';
      toggleBtn.innerText = 'Show Info';
    }
  }

  //eventListener for the button
  //in a life cycle method  - connectedCallback
  connectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
  }
  disconnectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').removeEventListener();
  }
}

//define custom element
window.customElements.define('user-card', UserCard);