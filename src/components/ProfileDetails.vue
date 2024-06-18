<template>
    <div class="profile-details">
      <h1>Profile details</h1>
      <div class="profile-image">
        <img :src="image" alt="Profile" />
        <input type="file" @change="onFileChange" />
      </div>
      <form @submit.prevent="submitForm">
        <input v-model="firstName" placeholder="First name" required />
        <input v-model="lastName" placeholder="Last name" required />
        <button type="button" @click="openBirthdayPicker">Choose birthday date</button>
        <button type="submit">Confirm</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        image: '',
      };
    },
    methods: {
      onFileChange(e) {
        const file = e.target.files[0];
        this.image = URL.createObjectURL(file);
      },
      openBirthdayPicker() {
        this.$router.push('/birthday-picker');
      },
      async submitForm() {
        const user = {
          email: this.$route.query.email,
          senha: this.$route.query.senha,
          nome: this.firstName,
          sobrenome: this.lastName,
          // data_nascimento será definido após a seleção
          sexo: this.$route.query.sexo,
        };
        try {
          const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          });
          if (response.ok) {
            this.$router.push('/next-step'); // Redirecione para a próxima etapa do cadastro
          } else {
            console.error('Erro ao registrar usuário');
          }
        } catch (error) {
          console.error('Erro ao conectar com o servidor', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .profile-details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile-image {
    position: relative;
  }
  .profile-image img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  .profile-image input[type="file"] {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 24px;
    opacity: 0;
    cursor: pointer;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  input {
    margin: 10px 0;
    padding: 10px;
    width: 80%;
    max-width: 300px;
    border: 1px solid #ddd;
    border-radius: 5px;
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
  