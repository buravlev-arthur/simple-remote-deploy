import _ from 'lodash';
import './style.css';
import Icon from './webpack.png';

const component = () => {
  const element = document.createElement('div');

  const text = _.join(['Hello,', 'World', '!'], ' ');
  const p = document.createElement('p');
  p.innerHTML = text;

  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(p);
  element.appendChild(myIcon);

  return element;
};

document.body.appendChild(component());
