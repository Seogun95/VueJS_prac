const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      todoList: [],
      listValue: '',
      isHidden: true,
    };
  },
  watch: {},
  computed: {
    isToggle() {
      return {
        visible: this.isHidden,
        hide: !this.isHidden,
      };
    },
  },
  methods: {
    addList() {
      if (this.listValue) {
        this.todoList.push(this.listValue);
        this.listValue = '';
        this.$refs.listRef.focus();
      }
    },
    remove(index) {
      this.todoList.splice(index, 1);
    },
    toggleContainer() {
      this.isHidden = !this.isHidden;
    },
  },
  mounted() {
    this.$refs.listRef.focus();
  },
});
app.mount('#assignment');
