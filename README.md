# Kalapi

Let's say you are learning Express and I asked you create a simple without-database website using Express. What possibly you will build? Your application will have an `app.js`, `public` folder which will contains public assets and `views` folder with needed templates. You can do it by hand or you can have Kalapi.

Kalapi is _yet another simple express generator with ejs_.

_We already have `express-generator`, why we need this?_ This generator is created as an intermediate step of learning Express and using `express-generator`. You will start with plain Express, you understand all the details process and then you will use Kalapi. Once you familiar with Kalapi, you will find the limitation of it and then will move on to `express-generator`.

## Installation

For GNU/Linux and MacOS users,

```bash
$ sudo npm install kalapi -g
```

For Windows users,

```bash
> npm install kalapi -g
```

After successful installation, you will get `kalapi` command. Running version command will confirm the installation.

```bash
$ kalapi --version

  You are using v0.0.1 of Kalapi
```

## Getting Started

Once you have `kalapi` on your local machine, using it to scaffolding your project is quite easy. Just write `kalapi` followed by the name of project.

```bash
$ kalapi project
```

This will create `project` project/folder in current working directory with following folders and files inside of it.

```
project/
├── public/
│   ├── css/
│   │    └── main.css   
│   └── js/
│        └── main.css
├── views/
│   ├── footer.ejs
│   ├── head.ejs
│   └── index.ejs
└── app.js
└── package.json
```

Finally, you need to install project dependencies and you are ready to go.

```
$ cd project
$ npm install
$ npm start
```

Your web server is ready and listening at `http://localhost:3000`.

## License

```
Copyright (c) 2019 Kiran Chauhan (https://chauhankiran.github.io)

Kalapi is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Kalapi is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Kalapi. If not, see <https://www.gnu.org/licenses/>.
```
