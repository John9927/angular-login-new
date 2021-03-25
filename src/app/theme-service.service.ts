import { Injectable, OnInit } from '@angular/core';

const temi = {
  light:'dark',
  dark: 'light'
}

const mappaColori = {
  light: {
    background: '#F6F4F3',
    backgroundColorCard: '#C2B8B2',
    text: '#204B57',
    borderInput: '#125E8A',
    border: '#197BBD',
    social: '#6E9AB8'
  },
  dark: {
    background: '#031211',
    backgroundColorCard: '#191919',
    text: 'white',
    borderInput: '#3498db',
    border: '#2ecc71',
    social: '#f1f1f1'
  }
}

@Injectable({
  providedIn: 'root'
})

export class ThemeServiceService implements OnInit {

  root: any;
  light: any;
  dark: any;
  temaCorrente: 'light';

  constructor() { }

  ngOnInit() {
  }

  setColor() {
    this.root = document.documentElement;
    this.light = document.getElementById('icon-light')
    this.light.addEventListener("click", () => { this.root.style.setProperty('--background', mappaColori.light.background);})
    this.light.addEventListener("click", () => { this.root.style.setProperty('--backgroundColorCard', mappaColori.light.backgroundColorCard);})
    this.light.addEventListener("click", () => { this.root.style.setProperty('--text', mappaColori.light.text);})
    this.light.addEventListener("click", () => { this.root.style.setProperty('--borderInput', mappaColori.light.borderInput);})
    this.light.addEventListener("click", () => { this.root.style.setProperty('--border', mappaColori.light.border);})
    this.light.addEventListener("click", () => { this.root.style.setProperty('--social', mappaColori.light.social);})
  }

  setColorDark() {
    this.root = document.documentElement;
    this.dark = document.getElementById('icon-dark')
    this.dark.addEventListener("click", () => { this.root.style.setProperty('--background', mappaColori.dark.background);})
    this.dark.addEventListener("click", () => { this.root.style.setProperty('--backgroundColorCard', mappaColori.dark.backgroundColorCard);})
    this.dark.addEventListener("click", () => { this.root.style.setProperty('--text', mappaColori.dark.text);})
    this.dark.addEventListener("click", () => { this.root.style.setProperty('--borderInput', mappaColori.dark.borderInput);})
    this.dark.addEventListener("click", () => { this.root.style.setProperty('--border', mappaColori.dark.border);})
    this.dark.addEventListener("click", () => { this.root.style.setProperty('--social', mappaColori.dark.social);})
  }
}
