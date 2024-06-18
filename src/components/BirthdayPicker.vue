<template>
    <div class="birthday-picker">
      <h1>Profile details</h1>
      <datepicker
        v-model="selectedDate"
        :typeable="true"
        format="yyyy-MM-dd"
        :language="customLanguage"
      ></datepicker>
      <button @click="saveBirthday">Save</button>
    </div>
  </template>
  
  <script>
  import Datepicker from 'vue-datepicker';
  
  export default {
    components: {
      Datepicker,
    },
    data() {
      return {
        selectedDate: null,
        customLanguage: {
          // Customize the language for the datepicker
          days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          months: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December',
          ],
          pickers: ['next 7 days', 'prev 7 days'],
          placeholder: {
            date: 'Select a date',
            dateRange: 'Select a date range',
          },
        },
      };
    },
    methods: {
      saveBirthday() {
        if (this.selectedDate) {
          // Salvar a data de aniversário no banco de dados
          console.log('Data de aniversário selecionada:', this.selectedDate);
          // Implemente a lógica de salvamento no banco de dados aqui
          this.$router.go(-1); // Voltar para a página anterior
        } else {
          alert('Por favor, selecione uma data de aniversário');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .birthday-picker {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    color: #ff5a5f;
    font-weight: 500;
  }
  button {
    background-color: #ff5a5f;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  </style>
  