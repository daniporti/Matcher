<template>
    <div>
      <Carousel />
      <div class="content">
        <h1>Algorithm</h1>
        <p>Users going through a vetting process to ensure you never match with bots.</p>
        <button class="create-account-btn" @click="createAccount">Create an account</button>
        <p>Already have an account? <router-link to="/sign-in">Sign In</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    methods: {
      createAccount() {
        this.$router.push({
          path: '/profile-details',
          query: {
            email: 'user@example.com', // Adicione o email coletado
            senha: 'password123',      // Adicione a senha coletada
            sexo: 'male',              // Adicione o sexo coletado
          },
        });
      },
    },
  };
  </script>
  
  <style>
  .content {
    padding: 20px;
  }
  
  h1 {
    color: #ff5a5f;
    font-weight: 500;
  }
  
  p {
    color: #4a4a4a;
    margin: 10px 0;
  }
  
  .create-account-btn {
    background-color: #ff5a5f;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px 0;
  }
  
  a {
    color: #ff5a5f;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
