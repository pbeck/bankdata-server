
<template>
  <div class="section">
    
    <div class="container">
        <h4 class="title is-4">Transaktioner</h4>
        <!-- <p>{{this.$route.query}}</p> -->
        <!--<h5 class="title is-5">{{ data }}</h5>-->
        <ul v-if="transactions">
          <li v-for="item in transactions.results" v-bind:key="item" >{{ item.transaction.description }}: {{ item.transaction.amount }}</li>
        </ul>

      <div class="notification is-warning is-light" v-if="errors && errors.length">
        <button class="delete"></button>
        <p v-for="error of errors" v-bind:key="error">{{ error }}</p>
      </div>

      <button @click="insertTable">Insert Table</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      transactions: {
  "count": 110,
  "metrics": {
    "AVG": 15.0,
    "CATEGORIES": {
      "0e1bade6a7e3459eb794f27b7ba4cea0": 1.0
    },
    "COUNT": 110,
    "NET": 1288.45,
    "SUM": 1650.0
  },
  "net": 1288.45,
  "periodAmounts": [
    {
      "key": "string",
      "value": 0
    }
  ],
  "query": {
    "accounts": [
      "87fa44ec11c4426e889a963add92b69e"
    ],
    "categories": [
      "953c4eda24554a61a9653a479e70fc96"
    ],
    "endDate": 1455740874875,
    "externalIds": [
      "953c4eda24554a61a9653a479e70fc96"
    ],
    "includeUpcoming": false,
    "limit": 20,
    "maxAmount": 68.42,
    "minAmount": -50.49,
    "offset": 20,
    "order": "ASC",
    "queryString": "Food this week",
    "sort": "DATE",
    "startDate": 1455740874875
  },
  "results": [
    {
      "transaction": {
        "accountId": "3fe2d96efacd4dc5994404a950f238a9",
        "amount": 34.5,
        "categoryId": "0e1bade6a7e3459eb794f27b7ba4cea0",
        "categoryType": "EXPENSES",
        "currencyDenominatedAmount": {
          "currencyCode": "EUR",
          "scale": 2,
          "unscaledValue": 1050
        },
        "currencyDenominatedOriginalAmount": {
          "currencyCode": "EUR",
          "scale": 2,
          "unscaledValue": 1050
        },
        "date": 1455740874875,
        "description": "Transaktion Nummer 2",
        "dispensableAmount": 0,
        "id": "79c6c9c27d6e42489e888e08d27205a1",
        "lastModified": 1455740874875,
        "notes": "Delicious #cake #wedding",
        "originalAmount": 34.5,
        "originalDate": 1455740874875,
        "originalDescription": "Stadium Sergelg Stockholm",
        "partnerPayload": {},
        "parts": [
          {
            "amount": 34.5,
            "categoryId": "0e1bade6a7e3459eb794f27b7ba4cea0",
            "counterpartDescription": "Stadium Sergelg Stockholm",
            "counterpartId": "79c6c9c27d6e42489e888e08d27205a1",
            "counterpartTransactionAmount": 10.0,
            "counterpartTransactionId": "d030a7b0840547428aa2fd07026e9a77",
            "date": 1455740874875,
            "id": "7303ff128531463bbed358bbf9e23f31",
            "lastModified": 1455740874875
          }
        ],
        "payload": {},
        "pending": false,
        "timestamp": 1464543093494,
        "type": "CREDIT_CARD",
        "upcoming": false,
        "userId": "d9f134ee2eb44846a4e02990ecc8d32e",
        "userModified": false
      },
      "type": "TRANSACTION"
    },
    {
      "transaction": {
        "accountId": "3fe2d96efacd4dc5994404a950f238a9",
        "amount": 34.5,
        "categoryId": "0e1bade6a7e3459eb794f27b7ba4cea0",
        "categoryType": "EXPENSES",
        "currencyDenominatedAmount": {
          "currencyCode": "EUR",
          "scale": 2,
          "unscaledValue": 1050
        },
        "currencyDenominatedOriginalAmount": {
          "currencyCode": "EUR",
          "scale": 2,
          "unscaledValue": 1050
        },
        "date": 1455740874875,
        "description": "Stadium Sergelg Stockholm",
        "dispensableAmount": 0,
        "id": "79c6c9c27d6e42489e888e08d27205a1",
        "lastModified": 1455740874875,
        "notes": "Delicious #cake #wedding",
        "originalAmount": 34.5,
        "originalDate": 1455740874875,
        "originalDescription": "Stadium Sergelg Stockholm",
        "partnerPayload": {},
        "parts": [
          {
            "amount": 34.5,
            "categoryId": "0e1bade6a7e3459eb794f27b7ba4cea0",
            "counterpartDescription": "Stadium Sergelg Stockholm",
            "counterpartId": "79c6c9c27d6e42489e888e08d27205a1",
            "counterpartTransactionAmount": 10.0,
            "counterpartTransactionId": "d030a7b0840547428aa2fd07026e9a77",
            "date": 1455740874875,
            "id": "7303ff128531463bbed358bbf9e23f31",
            "lastModified": 1455740874875
          }
        ],
        "payload": {},
        "pending": false,
        "timestamp": 1464543093494,
        "type": "CREDIT_CARD",
        "upcoming": false,
        "userId": "d9f134ee2eb44846a4e02990ecc8d32e",
        "userModified": false
      },
      "type": "TRANSACTION"
    }
  ]
},
      errors: []
    }
  },
  methods: {
    insertTable() {
        window.Excel.run(async context => {
          var currentWorksheet = context.workbook.worksheets.getActiveWorksheet();
          var expensesTable = currentWorksheet.tables.add("A1:B1", true /*hasHeaders*/);
          expensesTable.name = "ExpensesTable";
          
          expensesTable.getHeaderRowRange().values =
              [["Description", "Amount"]];
          
          for(let item of this.transactions.results) {
            expensesTable.rows.add(null , [
              [item.transaction.description, item.transaction.amount]
            ]);
          }

          
          /*
         expensesTable.getHeaderRowRange().values =
              [["Date", "Merchant", "Category", "Amount"]];

          expensesTable.rows.add(null, [
              ["1/1/2017", "The Phone Company", "Communications", "120"],
              ["1/2/2017", "Northwind Electric Cars", "Transportation", "142.33"],
              ["1/5/2017", "Best For You Organics Company", "Groceries", "27.9"],
              ["1/10/2017", "Coho Vineyard", "Restaurant", "33"],
              ["1/11/2017", "Bellows College", "Education", "350.1"],
              ["1/15/2017", "Trey Research", "Other", "135"],
              ["1/15/2017", "Best For You Organics Company", "Groceries", "97.88"]
          ]);
          */

          //expensesTable.columns.getItemAt(2).getRange().numberFormat = [['\u20AC#,##0.00']];
          expensesTable.getRange().format.autofitColumns();
          expensesTable.getRange().format.autofitRows();
        });
      }
  },
  created() {
      const transmogrify_url = (process.env.NODE_ENV == 'production') ?
        'https://legendary-octo-winner.herokuapp.com/api/transmogrify/' :
        'http://localhost:8000/api/transmogrify/';

      axios({method: 'post',
        url: transmogrify_url,
        data: {
          code: this.$route.query.code
        }
      }).then(response => {
        this.transactions = response.data;
        // eslint-disable-next-line
        console.log(this.transactions);
      }).catch(e => {
        this.errors.push(e);
      })
    },
    mounted() {
      const plugin = document.createElement("script");
      plugin.setAttribute(
        "src",
        "//appsforoffice.microsoft.com/lib/1.1/hosted/office.js"
      );
      plugin.async = true;
      document.head.appendChild(plugin);
    },
  }
</script>