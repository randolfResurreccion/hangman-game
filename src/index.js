import _ from 'lodash';
import './style.css';
import iconImg from './assets/img/favicon.png';

const header = () => {
    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.href = iconImg;

    return newLink
}

const component = () => {
    
    // main div
    const wrapper = document.createElement('div')

    // puzzle div
    const puzzleDiv = document.createElement('div');
    puzzleDiv.id = 'puzzle';
    puzzleDiv.classList.add('puzzle');
    wrapper.appendChild(puzzleDiv);

    // p tag for puzzle guesses
    const newParagraph = document.createElement('p');
    newParagraph.id = 'guesses';
    wrapper.appendChild(newParagraph);

    // Reset Button
    const btn = document.createElement('button');
    btn.innerHTML = 'Reset';
    btn.id = 'reset';
    btn.classList.add('button')
    wrapper.appendChild(btn);

    return wrapper;
}

document.head.appendChild(header());
document.body.appendChild(component());