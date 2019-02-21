# LuminaTechTask

This is a simple Angular test app and NodeJS router.

API used is https://github.com/OpenTreeOfLife/germinator/wiki/Synthetic-tree-API-v3

### Prerequisites

LuminaTechTaskRouter needs node.js v9.8.0

LuminaTechTaskApp needs Angular 6.1.10

### Installing LuminaTechTaskRouter

With npm and node.js v9.8.0 installed. In directory where LuminaTechTaskRouter is stored.

Install:
```
    npm install
```

Tun: 
```
    $ npm start
```

### Installing LuminaTechTaskApp

With npm, Angular 6.1.10 and Google Chrome installed. In directory where LuminaTechTaskApp is stored.

* If LuminaTechTaskRouter is deployed in other port than 3000, it should be updated in 'THREE_OF_LIFE_API_BASE_URL' param of /LuminaTechTaskApp/src/app/common/constants.ts

Install:
```
    $ npm install
```

Run:
```
    $ ng serve -o
```

A new page will be open.

## Running the tests

With npm, Angular 6.1.10 and Google Chrome installed. In directory where LuminaTechTaskApp is stored.

Run the tests: 
    $ ng test

## Authors

* **Pedro Calero** - *Initial work* - (https://github.com/pcalero/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
