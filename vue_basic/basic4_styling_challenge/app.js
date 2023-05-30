const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      inputClass: '',
      styleInput: '',
      isHidden: true,
    };
  },
  computed: {
    user1OrUser2() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        isVisible: this.isHidden,
        isHidden: !this.isHidden,
      };
    },
  },
  methods: {
    userDynamicStyle(e) {
      this.styleInput = e.target.value;
    },
    toggle() {
      this.isHidden = !this.isHidden;
    },
  },
});
app.mount('#assignment');
