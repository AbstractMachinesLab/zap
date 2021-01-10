Object.assign(window.search, {"doc_urls":["introduction.html#introduction","introduction.html#features","introduction.html#philosophy","introduction.html#goals","introduction.html#comparisons","introduction.html#zap-and-rebar3","introduction.html#zap-and-mix","getting-started.html#getting-started","installation.html#installation","first-steps.html#first-steps","how-zap-works.html#how-zap-works","guides/index.html#guides","guides/rebar3.html#migrating-from-rebar3","examples/index.html#examples","examples/hello-world.html#hello-world","ref/index.html#reference","ref/cli.html#zap-cli","ref/cli/default.html#zap","ref/cli/build.html#zap-build-target","ref/cli/cache.html#zap-cache","ref/cli/depgraph.html#zap-depgraph","ref/cli/rules.html#zap-rules","ref/cli/target.html#zap-target","ref/cli/toolchain.html#zap-toolchain","ref/cli/workspace.html#zap-workspace","ref/workspace.html#workspace","ref/rules.html#rules","ref/rules/js_library.html#js_library","ref/rules/erlang_library.html#erlang_library","ref/rules/caramel_library.html#caramel_library","ref/rules/lam_binary.html#lam_binary","ref/toolchains.html#toolchains","ref/toolchains/erlang.html#clojerl","ref/toolchains/caramel.html#caramel","ref/toolchains/deno.html#deno","contrib/index.html#contributing","contrib/building.html#building-from-source","contrib/styleguide.html#style-guide","contrib/architecture.html#architecutre"],"index":{"documentStore":{"docInfo":{"0":{"body":11,"breadcrumbs":1,"title":1},"1":{"body":22,"breadcrumbs":1,"title":1},"10":{"body":0,"breadcrumbs":4,"title":2},"11":{"body":0,"breadcrumbs":1,"title":1},"12":{"body":0,"breadcrumbs":3,"title":2},"13":{"body":0,"breadcrumbs":1,"title":1},"14":{"body":0,"breadcrumbs":3,"title":2},"15":{"body":0,"breadcrumbs":1,"title":1},"16":{"body":0,"breadcrumbs":3,"title":2},"17":{"body":0,"breadcrumbs":4,"title":1},"18":{"body":0,"breadcrumbs":6,"title":3},"19":{"body":0,"breadcrumbs":5,"title":2},"2":{"body":31,"breadcrumbs":1,"title":1},"20":{"body":0,"breadcrumbs":5,"title":2},"21":{"body":0,"breadcrumbs":5,"title":2},"22":{"body":0,"breadcrumbs":5,"title":2},"23":{"body":0,"breadcrumbs":5,"title":2},"24":{"body":0,"breadcrumbs":5,"title":2},"25":{"body":0,"breadcrumbs":2,"title":1},"26":{"body":0,"breadcrumbs":2,"title":1},"27":{"body":0,"breadcrumbs":3,"title":1},"28":{"body":0,"breadcrumbs":3,"title":1},"29":{"body":0,"breadcrumbs":3,"title":1},"3":{"body":31,"breadcrumbs":1,"title":1},"30":{"body":0,"breadcrumbs":3,"title":1},"31":{"body":0,"breadcrumbs":2,"title":1},"32":{"body":0,"breadcrumbs":3,"title":1},"33":{"body":0,"breadcrumbs":3,"title":1},"34":{"body":0,"breadcrumbs":3,"title":1},"35":{"body":0,"breadcrumbs":1,"title":1},"36":{"body":0,"breadcrumbs":3,"title":2},"37":{"body":0,"breadcrumbs":3,"title":2},"38":{"body":0,"breadcrumbs":2,"title":1},"4":{"body":0,"breadcrumbs":1,"title":1},"5":{"body":0,"breadcrumbs":2,"title":2},"6":{"body":0,"breadcrumbs":2,"title":2},"7":{"body":0,"breadcrumbs":2,"title":2},"8":{"body":0,"breadcrumbs":3,"title":1},"9":{"body":0,"breadcrumbs":4,"title":2}},"docs":{"0":{"body":"⚡ Zap is a build system built for the modern polyglot teams. It's built on Deno and Rust.","breadcrumbs":"Introduction","id":"0","title":"Introduction"},"1":{"body":"Fast by default — never wait on work that didn't need to be done. Built to be Extended — write new rules and toolchains in Javascript. Automatic Toolchains — manage language installations per project.","breadcrumbs":"Features","id":"1","title":"Features"},"10":{"body":"","breadcrumbs":"Getting Started » How Zap Works","id":"10","title":"How Zap Works"},"11":{"body":"","breadcrumbs":"Guides","id":"11","title":"Guides"},"12":{"body":"","breadcrumbs":"Guides » Migrating from Rebar3","id":"12","title":"Migrating from Rebar3"},"13":{"body":"","breadcrumbs":"Examples","id":"13","title":"Examples"},"14":{"body":"","breadcrumbs":"Examples » Hello World","id":"14","title":"Hello World"},"15":{"body":"","breadcrumbs":"Reference","id":"15","title":"Reference"},"16":{"body":"","breadcrumbs":"Reference » Zap CLI","id":"16","title":"Zap CLI"},"17":{"body":"","breadcrumbs":"Reference » Zap CLI » zap","id":"17","title":"zap"},"18":{"body":"","breadcrumbs":"Reference » Zap CLI » zap build [target]","id":"18","title":"zap build [target]"},"19":{"body":"","breadcrumbs":"Reference » Zap CLI » zap cache","id":"19","title":"zap cache"},"2":{"body":"Zap aims to make working with polyglot monorepos productive and easy. Monorepos are great for large polyglot codebases, but the tooling to work efficiently with them is either ecosystem specific (Dune, Lerna), or requires a large effort upfront (Bazel, Pants, Buck). Zap aims to be a drop-in solution.","breadcrumbs":"Philosophy","id":"2","title":"Philosophy"},"20":{"body":"","breadcrumbs":"Reference » Zap CLI » zap depgraph","id":"20","title":"zap depgraph"},"21":{"body":"","breadcrumbs":"Reference » Zap CLI » zap rules","id":"21","title":"zap rules"},"22":{"body":"","breadcrumbs":"Reference » Zap CLI » zap target","id":"22","title":"zap target"},"23":{"body":"","breadcrumbs":"Reference » Zap CLI » zap toolchain","id":"23","title":"zap toolchain"},"24":{"body":"","breadcrumbs":"Reference » Zap CLI » zap workspace","id":"24","title":"zap workspace"},"25":{"body":"","breadcrumbs":"Reference » Workspace","id":"25","title":"Workspace"},"26":{"body":"","breadcrumbs":"Reference » Rules","id":"26","title":"Rules"},"27":{"body":"","breadcrumbs":"Reference » Rules » js_library","id":"27","title":"js_library"},"28":{"body":"","breadcrumbs":"Reference » Rules » erlang_library","id":"28","title":"erlang_library"},"29":{"body":"","breadcrumbs":"Reference » Rules » caramel_library","id":"29","title":"caramel_library"},"3":{"body":"Only ship a single executable (zap) Provide a simple, fast, and unified experience for polyglot monorepos: manage language and dependency versions per project build, test, and distribute polyglot projects Never hear \"it works on my machine\" again Extending it with Toolchains and Rules should be easy","breadcrumbs":"Goals","id":"3","title":"Goals"},"30":{"body":"","breadcrumbs":"Reference » Rules » lam_binary","id":"30","title":"lam_binary"},"31":{"body":"","breadcrumbs":"Reference » Toolchains","id":"31","title":"Toolchains"},"32":{"body":"","breadcrumbs":"Reference » Toolchains » clojerl","id":"32","title":"clojerl"},"33":{"body":"","breadcrumbs":"Reference » Toolchains » caramel","id":"33","title":"caramel"},"34":{"body":"","breadcrumbs":"Reference » Toolchains » deno","id":"34","title":"deno"},"35":{"body":"","breadcrumbs":"Contributing","id":"35","title":"Contributing"},"36":{"body":"","breadcrumbs":"Contributing » Building from Source","id":"36","title":"Building from Source"},"37":{"body":"","breadcrumbs":"Contributing » Style guide","id":"37","title":"Style guide"},"38":{"body":"","breadcrumbs":"Contributing » Architecutre","id":"38","title":"Architecutre"},"4":{"body":"","breadcrumbs":"Comparisons","id":"4","title":"Comparisons"},"5":{"body":"","breadcrumbs":"Zap and rebar3","id":"5","title":"Zap and rebar3"},"6":{"body":"","breadcrumbs":"Zap and mix","id":"6","title":"Zap and mix"},"7":{"body":"","breadcrumbs":"Getting Started","id":"7","title":"Getting Started"},"8":{"body":"","breadcrumbs":"Getting Started » Installation","id":"8","title":"Installation"},"9":{"body":"","breadcrumbs":"Getting Started » First steps","id":"9","title":"First steps"}},"length":39,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"38":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"b":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":4,"docs":{"0":{"tf":1.0},"18":{"tf":1.0},"3":{"tf":1.0},"36":{"tf":1.0}}},"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}}}},"c":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"19":{"tf":1.0}}}},"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"29":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":1,"docs":{"33":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"16":{"tf":1.0}}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"32":{"tf":1.0}}}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"35":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"o":{"df":2,"docs":{"0":{"tf":1.0},"34":{"tf":1.0}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":1,"docs":{"20":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"i":{"d":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"_":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"28":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"13":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"f":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"11":{"tf":1.0},"37":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"14":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"27":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"m":{"_":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"30":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"n":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}}},"x":{"df":1,"docs":{"6":{"tf":1.0}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}}},"w":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"y":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}}}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"b":{"a":{"df":0,"docs":{},"r":{"3":{"df":2,"docs":{"12":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"15":{"tf":1.0}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":4,"docs":{"1":{"tf":1.0},"21":{"tf":1.0},"26":{"tf":1.0},"3":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"36":{"tf":1.0}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.0}}}},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"37":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"18":{"tf":1.0},"22":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":4,"docs":{"1":{"tf":1.4142135623730951},"23":{"tf":1.0},"3":{"tf":1.0},"31":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":1,"docs":{"2":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":4,"docs":{"1":{"tf":1.0},"10":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.0}},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":2,"docs":{"24":{"tf":1.0},"25":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"l":{"d":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"z":{"a":{"df":0,"docs":{},"p":{"df":15,"docs":{"0":{"tf":1.0},"10":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0},"18":{"tf":1.0},"19":{"tf":1.0},"2":{"tf":1.4142135623730951},"20":{"tf":1.0},"21":{"tf":1.0},"22":{"tf":1.0},"23":{"tf":1.0},"24":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"breadcrumbs":{"root":{"a":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"38":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"b":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":4,"docs":{"0":{"tf":1.0},"18":{"tf":1.4142135623730951},"3":{"tf":1.0},"36":{"tf":1.4142135623730951}}},"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}}}},"c":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"29":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":1,"docs":{"33":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":9,"docs":{"16":{"tf":1.4142135623730951},"17":{"tf":1.0},"18":{"tf":1.0},"19":{"tf":1.0},"20":{"tf":1.0},"21":{"tf":1.0},"22":{"tf":1.0},"23":{"tf":1.0},"24":{"tf":1.0}}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"32":{"tf":1.4142135623730951}}}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":4,"docs":{"35":{"tf":1.4142135623730951},"36":{"tf":1.0},"37":{"tf":1.0},"38":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"o":{"df":2,"docs":{"0":{"tf":1.0},"34":{"tf":1.4142135623730951}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":1,"docs":{"20":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}},"i":{"d":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"_":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"28":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"f":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":4,"docs":{"10":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.0},"9":{"tf":1.0}}}},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"i":{"d":{"df":3,"docs":{"11":{"tf":1.4142135623730951},"12":{"tf":1.0},"37":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"14":{"tf":1.4142135623730951}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"27":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"m":{"_":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"30":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"n":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"x":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}}},"w":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"y":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}}}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"b":{"a":{"df":0,"docs":{},"r":{"3":{"df":2,"docs":{"12":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":20,"docs":{"15":{"tf":1.4142135623730951},"16":{"tf":1.0},"17":{"tf":1.0},"18":{"tf":1.0},"19":{"tf":1.0},"20":{"tf":1.0},"21":{"tf":1.0},"22":{"tf":1.0},"23":{"tf":1.0},"24":{"tf":1.0},"25":{"tf":1.0},"26":{"tf":1.0},"27":{"tf":1.0},"28":{"tf":1.0},"29":{"tf":1.0},"30":{"tf":1.0},"31":{"tf":1.0},"32":{"tf":1.0},"33":{"tf":1.0},"34":{"tf":1.0}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":8,"docs":{"1":{"tf":1.0},"21":{"tf":1.4142135623730951},"26":{"tf":1.4142135623730951},"27":{"tf":1.0},"28":{"tf":1.0},"29":{"tf":1.0},"3":{"tf":1.0},"30":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"36":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":4,"docs":{"10":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"37":{"tf":1.4142135623730951}}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"18":{"tf":1.4142135623730951},"22":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":7,"docs":{"1":{"tf":1.4142135623730951},"23":{"tf":1.4142135623730951},"3":{"tf":1.0},"31":{"tf":1.4142135623730951},"32":{"tf":1.0},"33":{"tf":1.0},"34":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":1,"docs":{"2":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":4,"docs":{"1":{"tf":1.0},"10":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951},"3":{"tf":1.0}},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":2,"docs":{"24":{"tf":1.4142135623730951},"25":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"l":{"d":{"df":1,"docs":{"14":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"z":{"a":{"df":0,"docs":{},"p":{"df":15,"docs":{"0":{"tf":1.0},"10":{"tf":1.4142135623730951},"16":{"tf":1.4142135623730951},"17":{"tf":1.7320508075688772},"18":{"tf":1.7320508075688772},"19":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951},"20":{"tf":1.7320508075688772},"21":{"tf":1.7320508075688772},"22":{"tf":1.7320508075688772},"23":{"tf":1.7320508075688772},"24":{"tf":1.7320508075688772},"3":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"title":{"root":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"38":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":2,"docs":{"18":{"tf":1.0},"36":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"19":{"tf":1.0}}}},"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"29":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":1,"docs":{"33":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"16":{"tf":1.0}}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"32":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"35":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"34":{"tf":1.0}}}},"p":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":1,"docs":{"20":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"_":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"28":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"13":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"11":{"tf":1.0},"37":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"14":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"j":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"27":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"m":{"_":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"30":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}}},"x":{"df":1,"docs":{"6":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}}},"r":{"df":0,"docs":{},"e":{"b":{"a":{"df":0,"docs":{},"r":{"3":{"df":2,"docs":{"12":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":2,"docs":{"21":{"tf":1.0},"26":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"36":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.0}}}},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"37":{"tf":1.0}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"18":{"tf":1.0},"22":{"tf":1.0}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"23":{"tf":1.0},"31":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"10":{"tf":1.0}},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":2,"docs":{"24":{"tf":1.0},"25":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"l":{"d":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}}}}},"z":{"a":{"df":0,"docs":{},"p":{"df":12,"docs":{"10":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0},"18":{"tf":1.0},"19":{"tf":1.0},"20":{"tf":1.0},"21":{"tf":1.0},"22":{"tf":1.0},"23":{"tf":1.0},"24":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});