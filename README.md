# Bankdata Server

![Read more](./pitch.png)

**Welcome!** This is the source code repo for the Bankdata Server. 

**Bankdata helps aggregate your personal banking data from a wide range of banks and financial institutions and feed that data into Microsoft Excel.** We hope this will facilitate and encourage users to utilize a multitude of financial actors for savings, mortages, transaction accounts, et al. [To sign up and download the excel add-in please visit this link.](https://beckmanstrandberg.se/bankdata)

The long-term mission and _raison d'être_ behind this is the exploration and creation of intelligent and independent personal finance tools to enable you and me to live richer lives. The guiding principle for achieveing this is the combination of **smart software**, **open data**, and **a great community**.

I believe a project like this needs to be properly aligned and clear in incentives; that's why the server is open source.

Testing has been done with swedish banks, but Bankdata integrates with a third-party provider that provides data for many european countries.

This repo is the code we use to run our Heroku server. [Here's the repo for the Microsoft Excel Add-in](https://github.com/pbeck/bankdata-excel-add-in)


## Disclaimer

The use of or participation in this software project shall not in any form be considered financial or legal advice.


## Local Development

### Prerequisites

Before getting started you should have the following installed and running. Also remember to disable CORS-testing for local development.

- [X] Tink account - [Tink](https://tink.com)
- [X] Heroku account - [Heroku](https://heroku.com)
- [X] Yarn - [instructions](https://yarnpkg.com/en/docs/install)
- [X] Vue CLI 3 - [instructions](https://cli.vuejs.org/guide/installation.html)
- [X] Python 3 - [instructions](https://wiki.python.org/moin/BeginnersGuide)
- [X] Pipenv - [instructions](https://pipenv.readthedocs.io/en/latest/install/#installing-pipenv)

Setup `.env.local` with:

```
export TINK_CLIENT_ID='id'
export TINK_CLIENT_SECRET='secret'
```

## Setup

```
$ git clone https://github.com/pbeck/bankdata-server
$ cd bankdata-server
$ yarn install
$ pipenv install --dev && pipenv shell
$ source .env.local
$ python manage.py migrate
```

## Running Development Servers

Run these concurrently

__Django Backend__
```
$ python manage.py runserver
```

__Vue Dev Server__
```
$ yarn serve
```

## License and Copyright

Licensed under the MIT License. Copyright (c) Pelle Beckman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Included Open Source Projects

Django & Vue Heroku backend code based on [django-vue-template](https://github.com/gtalarico/django-vue-template) copyright (c) 2018 Gui Talarico