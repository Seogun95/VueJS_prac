const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      courseGoal: 'vueJS에 대해서 알아봅시다.',
      vueLink: 'https://seons-dev.tistory.com',
      bindHtml:
        '<h1>태그명을 포함해서 <mark>index</mark>에 출력 가능합니다.</h1>',
      bad: '더 공부하세요',
      good: '대단한 실력인걸요!',
    };
  },
  methods: {
    howMuchILearn() {
      let randomValue = Math.random();
      if (randomValue < 0.5) {
        return this.bad;
      } else {
        return this.good;
      }
    },
  },
});
app.mount('#user-goal');
