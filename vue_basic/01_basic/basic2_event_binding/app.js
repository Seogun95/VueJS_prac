const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmName: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter > 0 && (this.counter -= num);
    },
    reset() {
      this.counter = 10;
    },
    setName(e, someValue) {
      this.name = e.target.value + ' ' + someValue;
    },
    setSignupName(e) {
      this.confirmName = e.target.value;
    },

    submit() {
      alert(this.confirmName);
    },
  },
});
app.mount('#events');
