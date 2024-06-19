<template>
    <div class="gender-selection">
      <h1>I am a</h1>
      <div class="gender-options">
        <button :class="{ active: selectedGender === 'Woman' }" @click="selectGender('Woman')">Woman</button>
        <button :class="{ active: selectedGender === 'Man' }" @click="selectGender('Man')">Man</button>
        <button :class="{ active: selectedGender === 'Other' }" @click="selectGender('Other')">Choose another</button>
      </div>
      <button class="continue-btn" @click="continue">Continue</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedGender: 'Man',
      };
    },
    methods: {
      selectGender(gender) {
        this.selectedGender = gender;
      },
      async continue() {
        try {
          const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sexo: this.selectedGender }),
          });
          const data = await response.json();
          if (response.ok) {
            this.$router.push({
            path: '/interests-selection',
            query: {
            user_id: this.$route.query.user_id, 
            },
        });
          } else {
            console.error(data.error);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      },
    },
  };
  </script>
  
  <style>
  .gender-selection {
    text-align: center;
    padding: 20px;
  }
  
  .gender-options button {
    background-color: #f0f0f0;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .gender-options button.active {
    background-color: #ff5a5f;
    color: white;
  }
  
  .continue-btn {
    background-color: #ff5a5f;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px 0;
  }
  </style>
  