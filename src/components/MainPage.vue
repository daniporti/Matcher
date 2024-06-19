<template>
    <div class="main-page">
      <h1>Discover</h1>
      <div class="user-card">
        <img :src="currentUser.foto" alt="Profile Picture" />
        <h2>{{ currentUser.nome }} {{ currentUser.sobrenome }}, {{ currentUser.idade }}</h2>
        <p>{{ currentUser.profissao }}</p>
      </div>
      <div class="action-buttons">
        <button @click="dislike">❌</button>
        <button @click="like">❤️</button>
        <button @click="superLike">⭐</button>
      </div>
      <div class="navigation-buttons">
        <button @click="goToMainPage">Discover</button>
        <button @click="goToMatches">Matches</button>
        <button @click="goToProfile">Profile</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentUser: {
          nome: 'Jessica',
          sobrenome: 'Parker',
          idade: 23,
          profissao: 'Professional model',
          foto: 'path_to_image'
        },
        // Usuário logado (deve ser definido com base na autenticação)
        loggedUserId: 1,
      };
    },
    methods: {
      async like() {
        await this.sendLike(false);
      },
      async superLike() {
        await this.sendLike(true);
      },
      async sendLike(superLike) {
        try {
          const response = await fetch('http://localhost:3000/api/like', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: this.loggedUserId,
              likedUserId: this.currentUser.id,
              superLike,
            }),
          });
          const data = await response.json();
          if (data.match) {
            alert('It\'s a match!');
          }
          // Aqui você deve adicionar lógica para carregar o próximo usuário
        } catch (error) {
          console.error('Erro ao processar like', error);
        }
      },
      dislike() {
        // Adicionar lógica para registrar um dislike e carregar o próximo usuário
      },
      goToMainPage() {
        this.$router.push('/main');
      },
      goToMatches() {
        this.$router.push('/matches');
      },
      goToProfile() {
        this.$router.push('/profile');
      },
    },
  };
  </script>
  
  <style scoped>
  .main-page {
    text-align: center;
    padding: 20px;
  }
  .user-card {
    margin-bottom: 20px;
  }
  .user-card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .action-buttons button {
    margin: 10px;
    font-size: 24px;
    cursor: pointer;
  }
  .navigation-buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  .navigation-buttons button {
    cursor: pointer;
  }
  </style>
  