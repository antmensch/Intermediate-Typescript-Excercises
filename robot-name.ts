export class Robot {
  
  private _name: string;

  constructor() {
    this._name = '';
  }

  public get name(): string {
    if (this._name === '') {
      do {
        this._name = this.getRandomLetter() + this.getRandomLetter() + this.getRandomNumber() + this.getRandomNumber() +this.getRandomNumber();
      } while(Robot._USED_NAMES.has(this._name));
      
      Robot._USED_NAMES.add(this._name);
      return this._name;
    }
    else return this._name;
  }

  private getRandomLetter(): string {
    const ALPHABET: string[] = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    return ALPHABET[Math.floor(Math.random() * 26)];
  }

  private getRandomNumber(): string {
    const NUMBERS: string[] = [...'0123456789'];
    return NUMBERS[Math.floor(Math.random() * 10)]
  }

  private static _USED_NAMES = new Set();

  public resetName(): void {
    this._name = '';
  }

  public static releaseNames(): void {
    Robot._USED_NAMES.clear();
  }
}
