
<template>
  <div class="section">    
    <div class="container">
      <div class="notification is-warning is-light" v-if="errors && errors.length">
        <button class="delete"></button>
        <p v-for="error of errors" v-bind:key="error">{{ error }}</p>
      </div>
        <h4 class="title is-4">Transaktioner</h4>

        <b-table :data="transactions.results" :columns="columns"></b-table>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      transactions: {},
      columns: [
                {
                    field: 'transaction.date',
                    label: 'Date',
                },
                
                {
                    field: 'transaction.description',
                    label: 'Description',
                },
                {
                    field: 'transaction.amount',
                    label: 'Amount',
                },
                {
                    field: 'transaction.currencyDenominatedAmount.currencyCode',
                    label: 'Currency',
                    centered: true
                }
            ],
      errors: []
    }
  },
  methods: {
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
        
      }).catch(e => {
        this.errors.push(e);
      })
    },
    mounted() {
      /*
      const plugin = document.createElement("script");
      plugin.setAttribute(
        "src",
        "//appsforoffice.microsoft.com/lib/1.1/hosted/office.js"
      );
      plugin.async = true;
      document.head.appendChild(plugin);
      */
    },
  }
</script>