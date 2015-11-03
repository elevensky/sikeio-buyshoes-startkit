.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: js
js:
	mkdir -p build
	webpack --watch -d js/app.jsx build/app.js --progress --module-bind --module-bind "jsx=babel" --module-bind "js=babel?stage=0"

.PHONY: minjs
minjs:
	mkdir -p build
	webpack --watch -p js/app.jsx bundle/app.js --progress --module-bind --module-bind "jsx=babel" --module-bind "js=babel?stage=0"

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js'

.PHONY: all
all:
	(make css & make js & make server & wait)

.PHONY: clean
clean:
	rm -r bundle