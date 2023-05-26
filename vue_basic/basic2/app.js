const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter > 0 && (this.counter -= num);
    },
    setName(e) {
      this.name = e.target.value;
    },
  },
});
app.mount('#events');
