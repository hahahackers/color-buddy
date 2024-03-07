import { makeAutoObservable } from 'mobx';
import tinycolor from 'tinycolor2';

const INITIAL_COLOR = tinycolor('deadbeef');

export class ColorStore {
  hex = INITIAL_COLOR.toHex8();

  r = INITIAL_COLOR.toRgb().r.toString();
  g = INITIAL_COLOR.toRgb().g.toString();
  b = INITIAL_COLOR.toRgb().b.toString();
  a = INITIAL_COLOR.toRgb().a.toString();

  setHex(hex: string) {
    this.hex = hex;

    const color = tinycolor(hex);
    const rgb = color.toRgb();

    this.r = rgb.r.toString();
    this.g = rgb.g.toString();
    this.b = rgb.b.toString();
    this.a = rgb.a.toString();
  }

  setR(r: string) {
    this.r = r;
    const color = tinycolor({ r: Number(r), g: Number(this.g), b: Number(this.b), a: Number(this.a) });
    this.hex = this.a == '1' ? color.toHex() : color.toHex8();
  }
  setG(g: string) {
    this.g = g;
    const color = tinycolor({ r: Number(this.r), g: Number(g), b: Number(this.b), a: Number(this.a) });
    this.hex = this.a == '1' ? color.toHex() : color.toHex8();
  }
  setB(b: string) {
    this.b = b;
    const color = tinycolor({ r: Number(this.r), g: Number(this.g), b: Number(b), a: Number(this.a) });
    this.hex = this.a == '1' ? color.toHex() : color.toHex8();
  }
  setA(a: string) {
    this.a = a;
    const color = tinycolor({ r: Number(this.r), g: Number(this.g), b: Number(this.b), a: Number(a) });
    this.hex = this.a == '1' ? color.toHex() : color.toHex8();
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const color = new ColorStore();
