import logo from './logo.svg'

export default {
  title: 'homepage',
};

const image = {
  src: logo,
  alt: 'logo-libheros',
};


export const logoComponent = () => `<img src=${image.src} alt=${image.alt}/>`;

const darkBlueBtnClass = `
  box-shadow: 0 0 0 2px #1061c0 inset !important;
  border-radius: 10px;
  color: #1061c0 !important;
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: white;
  color: rgba(0,0,0,.6);
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  margin: 0 .25em 0 0;
  padding: .73333333em 1.5em .73333333em;
`

export const secondaryBtn = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.style = darkBlueBtnClass
  btn.innerText = "Je suis professionel de santé";
  btn.addEventListener('click', e => console.log(e));
  return btn
}

const cardClass = `
-webkit-box-flex: 1;
-ms-flex-positive: 1;
flex-grow: 1;
border: 1px solid rgba(34,36,38,.1);
background: 0 0;
margin: 0;
padding: 1em 1em;
-webkit-box-shadow: none;
box-shadow: none;
font-size: 1em;
border-radius: 10px !important;
`

export const card = () => `<div style='${cardClass}'><p>Libheros carte</p></div>`;

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};

const blueButtonStyle = `background-color: #0bbbef;
color: #fff;
text-shadow: none;
background-image: none;
border-radius: 10em;
display: block;
width: 100%;
font-size: 1.4rem;
border: none;
font-weight: 700;
padding: .73333333em .73333333em .73333333em;'`  


export const blueButton = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.style = blueButtonStyle
  btn.innerText = "J'organise mes soins";
  btn.addEventListener('click', e => console.log("J'organise mes soins"));

  return btn
}