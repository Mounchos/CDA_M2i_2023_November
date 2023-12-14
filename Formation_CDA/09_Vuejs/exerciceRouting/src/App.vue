<script setup>
import { ref } from 'vue'
import CustomerCard from './components/CustomerCard.vue'

const customers = ref([
  { id: 1, name: 'John Smith', email: 'jsmith@test.com', phone: '123456789' },
  { id: 2, name: 'Thomas Pierre', email: 'thomas@test.com', phone: '987654321'},
  { id: 3, name: 'Tyrion', email: 'tyrion@test.com', phone: '123412345' }
])

const customerDetails = ref({})

const showDetails = (id) => {
  switch(id) {
    case 1:
      customerDetails.value = {"id": 1,
	"name": "John Smith",
	"email": "jsmith@test.com",
	"phone": "123456789",
	"city": "bangalore",
	"state": "karnataka",
	"country": "India",
	"organization": "Company 1",
	"jobProfile": "Software Developer",
	"additionalInfo": "Ce client a acheté de nombreux produits auparavant et est un client de haute valeur"}
      break;
    case 2:
      customerDetails.value = {"id": 2,
	"name": "Thomas Pierre",
	"email": "thomas@test.com",
	"phone": "987654321",
	"city": "Lille",
	"state": "Nord",
	"country": "France",
	"organization": "Company 2",
	"jobProfile": "Software Developer",
	"additionalInfo": "Achète des produits rarement."}
      break;
    case 3:
      customerDetails.value = {"id": 3,
	"name": "Tyrion",
	"email": "tyrion@test.com",
	"phone": "123412345",
	"city": "Porto",
	"state": "Sulo",
	"country": "Portugal",
	"organization": "Company 3",
	"jobProfile": "Software Developer",
	"additionalInfo": "Achète généralement beaucoup de produits."}
      break;
  }
}
</script>

<template>
  <div>
    <CustomerCard v-for="customer in customers" :key="customer.id" :customer="customer" :details="customerDetails" @click="showDetails(customer.id)" />
  </div>
</template>

