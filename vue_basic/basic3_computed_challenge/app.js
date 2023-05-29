const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    result() {
      if (this.count > 36) {
        return 'Too much!';
      } else if (this.count === 36) {
        return this.count;
      } else {
        return 'Not there yet';
      }
    },
  },
  methods: {
    addCounter(value) {
      this.count += value;
      this.debouncedReset();
    },
    resetCount() {
      this.count = 0;
    },
  },
  created() {
    this.debouncedReset = _.debounce(this.resetCount, 5000);
  },
});

app.mount('#assignment');
