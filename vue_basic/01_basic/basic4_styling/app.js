const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  watch: {},
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
  methods: {
    boxSelected(box) {
      switch (box) {
        case 'A':
          this.boxASelected = !this.boxASelected;
          console.log('A');
          break;
        case 'B':
          this.boxBSelected = !this.boxBSelected;
          console.log('B');
          break;
        case 'C':
          this.boxCSelected = !this.boxCSelected;
          console.log('C');
          break;
        default:
          break;
      }
    },
  },
});
app.mount('#styling');
