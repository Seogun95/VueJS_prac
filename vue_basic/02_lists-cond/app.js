const { createApp } = Vue;

const test = [
  {
    name: '선중',
    age: 29,
  },
  {
    name: '미진',
    age: 21,
  },
  {
    name: '희진',
    age: 31,
  },
  {
    name: '시욱',
    age: 29,
  },
  {
    name: '은광',
    age: 26,
  },
];

const app = createApp({
  data() {
    return { goals: [], listValue: '', test };
  },
  watch: {},
  computed: {},
  methods: {
    addGoals() {
      if (this.listValue) {
        this.goals.push(this.listValue);
        this.listValue = '';
        this.$refs.goalRef.focus();
      }
    },
    removeGoals(index) {
      this.goals.splice(index, 1);
    },
  },
  mounted() {
    this.$refs.goalRef.focus();
  },
});
app.mount('#user-goals');
