const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      firstInputValue: '',
      firstInitVale: '',
      secondInputValue: '',
      secondInitVale: '',
    };
  },
  methods: {
    btnClick() {
      alert('깨꽁');
      this.firstFocus();
    },
    firstInputSubmit(e) {
      this.firstInputValue = e.target.value;
    },
    secondInputSubmit(e) {
      this.secondInputValue = e.target.value;
      this.secondInitVale = '';
      this.$refs.secondFocus.focus();
    },
    firstFocus() {
      this.$refs.firstFocus.focus();
    },
  },
  mounted() {
    this.firstFocus();
  },
});
app.mount('#assignment');
