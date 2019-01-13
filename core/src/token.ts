import Lexer from "./lexer";

interface TokenData {
  value: string;
  id: string;
  line: number;
  column: number;
  length: number;
}
export default class Token implements TokenData {
  public value: string;
  public id: string;
  public line: number;
  public column: number;
  public length: number;
  private lexer: Lexer;
  
  public constructor(params: TokenData, ctx: Lexer) {
    this.lexer = ctx;
    this.set(params, false);
  }
  /**
   * Sets token's value.
   * @param newValue - New value for token.
   * @param update - If lexer should update tokens list.
   */
  public setValue(newValue: string, update = true) {
    this.value = newValue;
    this.length = newValue.length;
    if (update) {
      this.lexer.update();
    }
    return this;
  }
  /**
   * Moves token to given line and column.
   * @param line - Line to move token to.
   * @param column - Column to move token to.
   * @param update - If lexer should update tokens list.
   */
  public moveTo(line?: number, column?: number, update = true) {
    line && (this.line = line);
    column && (this.column = column);
    if (update) {
      this.lexer.update();
    }
    return this;
  }
  /**
   * Moves token by given amount of lines and columns.
   * @param line - Amount of lines to move token by.
   * @param column - Amount of columns to move token by.
   * @param update - If lexer should update tokens list.
   */
  public moveBy(line?: number, column?: number, update = true) {
    line && (this.line += line);
    column && (this.column += column);
    if (update) {
      this.lexer.update();
    }
    return this;
  }
  /**
   * Sets token's data.
   * @param params - Token data.
   * @param update - If lexer should update tokens list.
   */
  public set(params: Partial<TokenData>, update = true) {
    this.value = params.value || this.value;
    this.id = params.id || this.id;
    this.line = params.line || this.line;
    this.column = params.column || this.column;
    this.length = params.length || this.length;
    if (update) {
      this.lexer.update();
    }
    return this;
  }
  /**
   * Removes token from lexer.
   */
  public remove() {
    this.value = undefined;
    this.id = undefined;
    this.line = undefined;
    this.column = undefined;
    this.length = undefined;
    this.lexer.update();
  }
}
