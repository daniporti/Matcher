<template>
  <div class="carousel">
    <div class="carousel-track-container">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="carousel-slide">
          <img :src="require(`@/assets/images/${image}`)" :alt="'Slide ' + (index + 1)">
        </div>
      </div>
    </div>
    <div class="carousel-nav">
      <span v-for="(image, index) in images" :key="index" @click="goToSlide(index)" :class="{'active': index === currentSlide}"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ['girl1.png', 'girl2.png', 'girl3.png'],
      currentSlide: 0
    };
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index;
    }
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  max-width: 400px;
  margin: auto;
}
.carousel-track-container {
  overflow: hidden;
  border-radius: 10px;
}
.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}
.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
}
.carousel-slide img {
  width: 100%;
  display: block;
}
.carousel-nav {
  text-align: center;
  margin-top: 10px;
}
.carousel-nav span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 5px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
}
.carousel-nav span.active {
  background-color: #ff5a5f;
}
</style>
