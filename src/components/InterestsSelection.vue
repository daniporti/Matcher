<template>
    <div class="interests-selection">
      <div class="header">
        <button @click="goBack">←</button>
        <h1>Your interests</h1>
        <button class="skip-btn" @click="skip">Skip</button>
      </div>
      <p>Select a few of your interests and let everyone know what you're passionate about.</p>
      <div class="interests-grid">
        <div v-for="interest in interests" :key="interest" 
             :class="{'selected': selectedInterests.includes(interest)}" 
             @click="toggleInterest(interest)">
          {{ interest }}
        </div>
      </div>
      <button class="continue-btn" :disabled="selectedInterests.length === 0" @click="continue">Continue</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        interests: [
          'Photography', 'Shopping', 'Karaoke', 'Yoga', 'Cooking', 
          'Tennis', 'Run', 'Swimming', 'Art', 'Traveling', 
          'Extreme', 'Music', 'Drink', 'Video games'
        ],
        selectedInterests: [],
      };
    },
    methods: {
      toggleInterest(interest) {
        if (this.selectedInterests.includes(interest)) {
          this.selectedInterests = this.selectedInterests.filter(i => i !== interest);
        } else if (this.selectedInterests.length < 5) {
          this.selectedInterests.push(interest);
        }
      },
      async continue() {
        const userId = this.$route.query.user_id; // Assumindo que o user_id é passado como query param
        try {
          const response = await fetch('http://localhost:3000/api/preferences', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId,
              preferences: this.selectedInterests,
            }),
          });
          if (response.ok) {
            this.$router.push('/next-step'); // Substitua por onde deve redirecionar
          } else {
            console.error('Erro ao salvar preferências');
          }
        } catch (error) {
          console.error('Erro ao conectar com o servidor', error);
        }
      },
      goBack() {
        this.$router.go(-1);
      },
      skip() {
        this.$router.push('/next-step'); // Substitua por onde deve redirecionar
      },
    },
  };
  </script>
  
  <style scoped>
  .interests-selection {
    padding: 20px;
    text-align: center;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .interests-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .interests-grid div {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }
  .interests-grid .selected {
    background-color: #ff5a5f;
    color: white;
  }
  .continue-btn {
    margin-top: 20px;
    background-color: #ff5a5f;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .skip-btn {
    color: #ff5a5f;
    background: none;
    border: none;
    cursor: pointer;
  }
  </style>
  