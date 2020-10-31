/*
Language: MLIR
Author: Jacques Pienaar (jpienaar@google.com)
Description: Textual representation of MLIR
Website: https://mlir.llvm.org/docs/LangRef/
*/

export default function(hljs) {
  var identifier = '([a-zA-Z_][\\w\\d_$.]*)';
  var primitive_types = {
        className: 'keyword',
        variants: [
          { begin: 'i\\d+' },
          { begin: 'f(16|32|64)' },
          { begin: 'bf16' },
        ]
      };

  return {
    name: 'MLIR',
    keywords:
      'func module ' +
      'br cond_br return',
    contains: [
      {
        className: 'keyword',
        variants: [
          { begin: 'i\\d+' },
          { begin: 'f(16|32|64)' },
          { begin: 'bf16' },
        ]
      },
      hljs.C_LINE_COMMENT_MODE,
      {
        className: 'keyword', begin: '\\b(memref<|tensor<|vector)\\b', end: '>',
        contains: [
          'self',
          {
            className: 'number',
            variants: [
              { begin: '\\*' },
              { begin: '[\\?\\dx]+' },
            ]
          },
          primitive_types,
        ]
      },
      // Double quote string
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        variants: [
          // Double-quoted string
          { begin: '"', end: '[^\\\\]"' },
        ],
        relevance: 0
      },
      {
        className: 'title',
        variants: [
          { begin: '@' + identifier },
          { begin: '@\\d+' },
          { begin: '!' + identifier },
          { begin: '!\\d+' + identifier }
        ]
      },
      {
        className: 'symbol',
        variants: [
          { begin: '%' + identifier + '([:#]\\d+)?' },
          { begin: '%\\d+([:#]\\d+)?' },
        ]
      },
      {
        className: 'symbol',
        variants: [
          { begin: '\\^' + identifier },
        ],
      },
      {
        className: 'type',
        variants: [
	  { begin: '!' + identifier },
        ]
      },
      {
        className: 'number',
        variants: [
            { begin: '0[xX][a-fA-F0-9]+' },
            { begin: '-?\\d+(?:[.]\\d+)?(?:[eE][-+]?\\d+(?:[.]\\d+)?)?' }
        ],
        relevance: 0
      },
    ]
  };
}
