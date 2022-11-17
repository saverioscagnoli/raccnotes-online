import { useHotkeys } from "react-hotkeys-hook";

const b = "**type here**";
const i = "*type here*";
const c = "<center>type here</center>";
const m = "\n$$\ntype here\n$$";
const pb = "\n<div class='pagebreak'></div>\n";

export class Utils {
  text: string;
  setText: (text: string) => void;
  build: () => HTMLTextAreaElement;

  constructor(text: string, setText: () => void) {
    this.text = text;
    this.setText = setText;
    this.build = () => document.getElementById("input") as HTMLTextAreaElement;
    this.shortcuts();
  }

  public bold() {
    const area = this.build();
    area.value += b;
    this.setText(this.text + b);
    area.selectionEnd -= 2;
    area.focus();
    area.setSelectionRange(area.selectionEnd - 9, area.selectionEnd);
  }

  public italic() {
    const area = this.build();
    area.value += i;
    this.setText(this.text + i);
    area.selectionEnd -= 1;
    area.focus();
    area.setSelectionRange(area.selectionEnd - 9, area.selectionEnd);
  }

  public center() {
    const area = this.build();
    area.value += c;
    this.setText(this.text + c);
    area.selectionEnd -= 9;
    area.focus();
    area.setSelectionRange(area.selectionEnd - 9, area.selectionEnd);
  }

  public math() {
    const area = this.build();
    area.value += m;
    this.setText(this.text + m);
    area.selectionEnd -= 3;
    area.focus();
    area.setSelectionRange(area.selectionEnd - 9, area.selectionEnd);
  }

  public pageBreak() {
    const area = this.build();
    area.value += pb;
    this.setText(this.text + pb);
    area.focus();
  }

  public clear() {
    this.build().value = "";
    this.setText("");
  }

  public shortcuts() {
    this._newShortcut("ctrl", "b", () => this.bold());
    this._newShortcut("meta", "b", () => this.bold());
    this._newShortcut("ctrl", "i", () => this.italic());
    this._newShortcut("meta", "i", () => this.italic());
    this._newShortcut("ctrl", "l", () => this.center());
    this._newShortcut("meta", "l", () => this.center());
    this._newShortcut("ctrl", "m", () => this.math());
    this._newShortcut("meta", "m", () => this.math());
    this._newShortcut("ctrl", "p", () => this.pageBreak());
    this._newShortcut("meta", "p", () => this.pageBreak());
  }

  private _newShortcut(mainKey: string, key: string, exe: () => void) {
    return useHotkeys(
      `${mainKey}+${key}`,
      (evt) => {
        evt.preventDefault();
        evt.stopImmediatePropagation();
        exe();
      },
      { enableOnFormTags: ["TEXTAREA"] }
    );
  }
}
