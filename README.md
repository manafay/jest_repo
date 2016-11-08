# es5-starter

Simple Javascript project for ES6 development using [eslint](http://eslint.org/) for linting, [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) for default eslint configuration, [babel](https://babeljs.io) for ES6 transpilation, [webpack](http://webpack.github.io/docs/) for module bundling and  [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) as live reloading static http server.

## Usage

1. Install [nodejs](https://nodejs.org/en/). I highly recommend using [nvm](https://github.com/creationix/nvm). If you are on mac or ubuntu, you could use the following command to install nodejs. It's from my [lean-dotfiles](https://gitlab.com/seartipy/lean-dotfiles) configuration.

  On Mac
        curl -L j.mp/srtpldf > ~/setup && bash ~/setup nodefaults web

  On Ubuntu
        wget -qO- j.mp/srtpldf > ~/setup && bash ~/setup nodefaults web

  Then Install yarn

        npm install -g yarn

2. Clone this repository and install npm packages. Make sure you have [git](https://git-scm.com/) installed.

        git clone https://gitlab.com/pervezfunctor/es6-starter.git
        cd es5-starter
        yarn install

3. Start server

        npm start

  Now you can edit `src/index.js` in any editor and see your changes in browser immediately. You could use `npm test` to run tests and `npm lint` for linting all files in `src` folder.

4. Setup your editor

  If you use `atom`, install `atom packages`

        apm install file-icons platformio-ide-terminal project-manager last-cursor-position atom-beautify linter language-babel emmet autoclose-html atom-ternjs linter-eslint linter-jsonlint atom-typescript linter-tslint

  If you use `visual studio code`, install `visual studio code extensions`

        code --install-extension EditorConfig.EditorConfig
        code --install-extension dbaeumer.vscode-eslint
        code --install-extension msjsdiag.debugger-for-chrome     

## License

MIT
