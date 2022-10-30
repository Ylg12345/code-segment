import './index.css';

;((doc) => {

  const app = doc.querySelector('#app');

  const h1 = doc.createElement('h1');

  h1.textContent = 'Home';

  app.appendChild(h1);

})(document);