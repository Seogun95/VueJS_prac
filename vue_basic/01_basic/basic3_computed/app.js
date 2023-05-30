const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      } else if (value < 0) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    setName(e) {
      this.name = e.target.value;
    },
  },
});
app.mount('#events');
