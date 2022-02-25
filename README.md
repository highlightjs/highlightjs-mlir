# MLIR grammar file for highlight.js

For more about highlight.js, see https://highlightjs.org/

For more about MLIR, see https://mlir.llvm.org/

### Static website or simple usage

Load the module after loading Highlight.js.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" charset="UTF-8"
  src="/path/to/highlightjs-mlir/dist/mlir.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```
