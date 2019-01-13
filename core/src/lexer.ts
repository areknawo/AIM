import Token from "./token";

export interface GrammarStruct {
  id: string;
  match: string;
}

export default class Lexer {
  public tokens: Token[] = [];
  public column: number = 1;
  public line: number = 1;
  public data: string = "";
  public grammar: GrammarStruct[] = [
    {
      id: "newline",
      match: "\\n"
    },
    {
      id: "whitespace",
      match: "\\s"
    }
  ];
  private index: number = 0;
  private expr: string = "";
  private regex?: RegExp;

  /**
   * Creates regexp from loaded grammar.
   */
  private getRegex() {
    if (!this.regex) {
      this.regex = new RegExp(this.expr, "gmu");
      console.log(this.regex);
    }
    this.regex.lastIndex = this.index;
    return this.regex;
  }
  /**
   * Loads additional grammar definition for lexing
   * @param def Definition object for lexer
   */
  public loadDefinition(def: GrammarStruct) {
    if (this.expr.length > 0) this.expr += "|";
    this.expr += `(${def.match})`;
    this.regex = undefined;
    this.grammar.push(def);

    return this;
  }
  /**
   * Loads whole grammar (list of definitions).
   * @param grammar Arrays of grammar definitions.
   */
  public loadGrammar(grammar: GrammarStruct[]) {
    for (const def of grammar) {
      this.loadDefinition(def);
    }

    return this;
  }
  /**
   * Loads more data/text for the lexer.
   * @param text - Text for lexer.
   */
  public loadData(data: string) {
    this.data += data;

    return this;
  }
  /**
   * Returns next processed token.
   */
  public next() {
    const regex = this.getRegex();
    const match = regex.exec(this.data);
    if (match) {
      const length = match[0].length;
      const token = this.grammar[match.indexOf(match[0], 1) - 1];
      const id = token.id;
      this.index += length;
      this.tokens.push(
        new Token(
          {
            column: this.column,
            line: this.line,
            value: match[0],
            length,
            id
          },
          this
        )
      );
      if (id === "newline") {
        this.column = 1;
        this.line++;
      } else if (id === "whitespace") {
        this.column++;
      } else {
        this.column += length;
      }

      return this.tokens[this.tokens.length - 1];
    }
  }
  /**
   * Processes all text data and returns processed tokens.
   */
  public processAll() {
    for (let i = 0; i < Infinity; i++) {
      const token = this.next();
      if (!token) break;
    }

    return this.tokens;
  }

  /**
   * Updates and sorts tokens.
   */
  public update() {
    this.tokens = this.tokens
      .filter(token => {
        return token.value && token.value !== "";
      })
      .sort((a, b) => {
        const line = a.line - b.line;
        const column = a.column - b.column;
        return line === 0 ? column : line;
      })
      .map((token, index, tokens) => {
        if (index > 0) {
          const previous = tokens[index - 1];
          if (previous.id === "newline") {
            return token.moveTo(previous.line + 1, 1, false);
          }
          return token.moveTo(
            previous.line,
            previous.column + previous.length,
            false
          );
        } else {
          return token.moveTo(1, 1, false);
        }
      });

    return this;
  }
  /**
   * Cleans and empties lexer data and tokens.
   */
  public empty() {
    this.data = "";
    this.line = 1;
    this.column = 1;
    this.index = 0;
    this.tokens = [];

    return this;
  }
}
