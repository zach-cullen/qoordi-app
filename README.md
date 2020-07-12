# Qoordi

Qoordi is an app that helps users coordinate and plan for projects where multiple things need to happen at once by creating a visual interface that represents multiple timelines. It's build with a React & Redux client-side interface and a Ruby on Rails API on the back-end for data persistence and authorization. 

## Video Walk Through: 

[Qoordi App Video Walkthrough](https://youtu.be/vdeoZNp6Ffs)

## Features

#### **Interactive Timeline Interface**
![](https://i.imgur.com/eDoLFju.gif/)

#### **Filtering Projects by Category**
![](https://i.imgur.com/YAcDyLT.gif)

#### **New Project Pop-up Form**
![](https://i.imgur.com/knA0j9m.gif)


## Getting Started / Installing

### Instructions for Mac:

Fork and Clone this repo to your local machine. CD into the api folder and run bundler to install ruby packages.

```
bundle install
```

and spin up a server at localhost:3000 by running:

```
rails s
```

Then cd into the front-end folder and install npm packages by running:

```
npm install
```

Lastly, start the client side app at localhost:3001 by running:

```
npm start
```

## Built With

* [React.js] (https://reactjs.org/) - Front End JavaScript Framework
* [Redux] (https://redux.js.org/) - Front End State Management
* [CreateReactApp] (https://create-react-app.dev/docs/getting-started/) - Initial Configuration
* [RubyOnRails] (https://rubyonrails.org/) - The API

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
