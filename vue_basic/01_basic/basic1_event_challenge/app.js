const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      myName: '김선중',
      myAge: 28,
      myImg:
        'https://velog.velcdn.com/images/corner3499/post/0c310773-dfb0-4baf-b996-6270372ccc76/image.jpeg',
    };
  },
  methods: {
    after_five_years() {
      return this.myAge + 5;
    },
    favoriteNum() {
      return Math.random().toFixed(1);
    },
  },
});
app.mount('#assignment');
