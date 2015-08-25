# Lite mite wrapping basic DOM for Amber Smalltalk

[![Join the chat at https://gitter.im/amber-smalltalk/domite](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/amber-smalltalk/amber-contrib-domite?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Lite mite wrapping basic DOM for Amber Smalltalk

## Getting Started

- Install Amber ([Instructions](http://docs.amber-lang.net/faq.html))
- Do ``amber init``
- ``bower install amber-contrib-domite --save``
- ``grunt devel``
- Start server with `amber serve` and go to `http://localhost:4000/`

This makes modules from `amber/domite` namespace loadable and you can add them
to `imports:` section of your packages, eventually into `deploy.js` / `devel.js`,
though former is preferred because of easier deployment process.

## Contributing

To bring project alive (for example after `git clone`):

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):

Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions
