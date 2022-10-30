import './index.css';

;((doc) => {

  const app = doc.querySelector('#app');

  const h1 = doc.createElement('h1');

  h1.textContent = 'About';

  app.appendChild(h1);

})(document);