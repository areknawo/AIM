import { GrammarStruct } from "./lexer";
// Predefine some matches
const mutatorStart = "(?:\\b|^)";
const mutatorEnd = "(?:\\b|$)";
const typeStart = "(?:[|#]|\\b|^)";
const typeEnd = "(?:\\||\\b|$)";
const stringAnchor = "['\"`]";
const staticValueStart = mutatorStart;
const staticValueEnd = mutatorEnd;
// Define language tokens
const grammar: GrammarStruct[] = [
  // Basics
  {
    id: "newline",
    match: "\\n"
  },
  {
    id: "whitespace",
    match: "\\s"
  },
  // Comments
  {
    id: "single_line_comment_begin",
    match: ">>>"
  },
  {
    id: "multi_line_comment_begin",
    match: ">>"
  },
  {
    id: "multi_line_comment_end",
    match: "<<"
  },
  // Static Values
  {
    id: "integer",
    match: `${staticValueStart}(?:0d)?-?(?:[1-9]\\d*|0)(?:e-?[1-9]\\d*)?${staticValueEnd}`
  },
  {
    id: "float",
    match: `${staticValueStart}(?:0d)?(?:(?:-?\\d+)|\\.)(?:(?:\\.\\d+)|\\d+)e?(?:-?\\d+)${staticValueEnd}`
  },
  {
    id: "binary",
    match: `${staticValueStart}0b[01]+${staticValueEnd}`
  },
  {
    id: "octal",
    match: `${staticValueStart}0o[0-7]+${staticValueEnd}`
  },
  {
    id: "hex",
    match: `${staticValueStart}0o[0-9A-Fa-f]+${staticValueEnd}`
  },
  {
    id: "bool",
    match: `${staticValueStart}(?:true|false)${staticValueEnd}`
  },
  {
    id: "char",
    match: `(?<=(?:${staticValueStart}${stringAnchor})|[\\x00-\\x7F])[\\x00-\\x7F](?=(?:[\\x00-\\x7F]+)?${stringAnchor}${staticValueEnd})`
  },
  {
    id: "uchar",
    match: `(?<=(?:${staticValueStart}${stringAnchor})|[\\u{0}-\\u{FFFFF}])[\\u{0}-\\u{FFFFF}](?=(?:[\\u{0}-\\u{FFFFF}]+)?${stringAnchor}${staticValueEnd})`
  },
  // Modifiers
  {
    id: "directive_modifier",
    match: "@"
  },
  {
    id: "context_modifier",
    match: "\\.\\."
  },
  {
    id: "multiplication_modifier",
    match: "\\*"
  },
  {
    id: "equality_modifier",
    match: "=="
  },
  {
    id: "type_modifier",
    match: "#"
  },
  {
    id: "access_modifier",
    match: "\\."
  },
  {
    id: "alternative_modifier",
    match: "\\|"
  },
  {
    id: "bind_modifier",
    match: "=>"
  },
  {
    id: "escape_modifier",
    match: "\\$"
  },
  {
    id: "addition_modifier",
    match: "\\+"
  },
  {
    id: "increasement_modifier",
    match: "\\+\\+"
  },
  {
    id: "substitution_modifier",
    match: "-"
  },
  {
    id: "decreasement_modifier",
    match: "--"
  },
  {
    id: "subdivision_modifier",
    match: "\\/"
  },
  {
    id: "power_modifier",
    match: "\\^"
  },
  {
    id: "modulo_modifier",
    match: "%"
  },
  {
    id: "negation_modifier",
    match: "!"
  },
  {
    id: "assignment_modifier",
    match: "="
  },
  {
    id: "join_modifier",
    match: "&"
  },
  {
    id: "spread_modifier",
    match: "\\.\\.\\."
  },
  {
    id: "question_modifier",
    match: "\\?"
  },
  // Mutators
  {
    id: "public_mutator",
    match: `${mutatorStart}public${mutatorEnd}`
  },
  {
    id: "protected_mutator",
    match: `${mutatorStart}protected${mutatorEnd}`
  },
  {
    id: "private_mutator",
    match: `${mutatorStart}private${mutatorEnd}`
  },
  {
    id: "static_mutator",
    match: `${mutatorStart}static${mutatorEnd}`
  },
  {
    id: "dynamic_mutator",
    match: `${mutatorStart}dynamic${mutatorEnd}`
  },
  {
    id: "save_mutator",
    match: `${mutatorStart}save${mutatorEnd}`
  },
  // Types
  {
    id: "int8_type",
    match: `${typeStart}int8${typeEnd}`
  },
  {
    id: "uint8_type",
    match: `${typeStart}uint8${typeEnd}`
  },
  {
    id: "int16_type",
    match: `${typeStart}int16${typeEnd}`
  },
  {
    id: "uint16_type",
    match: `${typeStart}uint16${typeEnd}`
  },
  {
    id: "int32_type",
    match: `${typeStart}int32${typeEnd}`
  },
  {
    id: "uint32_type",
    match: `${typeStart}uint32${typeEnd}`
  },
  {
    id: "int64_type",
    match: `${typeStart}int64${typeEnd}`
  },
  {
    id: "uint64_type",
    match: `${typeStart}uint64${typeEnd}`
  },
  {
    id: "float32_type",
    match: `${typeStart}float32${typeEnd}`
  },
  {
    id: "float64_type",
    match: `${typeStart}float64${typeEnd}`
  },
  {
    id: "bool_type",
    match: `${typeStart}bool${typeEnd}`
  },
  {
    id: "char_type",
    match: `${typeStart}char${typeEnd}`
  },
  {
    id: "uchar_type",
    match: `${typeStart}uchar${typeEnd}`
  },
  {
    id: "string_type",
    match: `${typeStart}string${typeEnd}`
  },
  // Advanced Types
  {
    id: "codeblock_type",
    match: `${typeStart}codeblock${typeEnd}`
  },
  {
    id: "receiver_type",
    match: `${typeStart}receiver${typeEnd}`
  },
  {
    id: "runner_type",
    match: `${typeStart}runner${typeEnd}`
  },
  // Anchors and brackets
  {
    id: "string_anchor",
    match: stringAnchor
  },
  {
    id: "curly_brackets_begin",
    match: "\\{"
  },
  {
    id: "comma",
    match: ","
  },
  {
    id: "curly_brackets_end",
    match: "\\}"
  },
  {
    id: "square_brackets_begin",
    match: "\\["
  },
  {
    id: "square_brackets_end",
    match: "\\]"
  },
  {
    id: "round_brackets_begin",
    match: "\\("
  },
  {
    id: "round_brackets_end",
    match: "\\)"
  },
  {
    id: "angle_brackets_begin",
    match: "<"
  },
  {
    id: "angle_brackets_end",
    match: ">"
  },
  // Identifier
  {
    id: "identifier",
    match: "\\w+"
  }
];
export default grammar;
