<template>
  <div class="row" id="create-todo-element">
    <div class="col-12 form-group">
      <input type="text"
        v-model="textInput"
        class="form-control"
        v-on:keyup.enter="create"
        placeholder="Hi, I'm a vue element!"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      id: 1,
      textInput: ""
    }
  },
  methods: {
    create() {
      axios.post("/todo", {
        id: this.id,
        title: this.textInput.slice(),
        completed: false
      }).then(() => {
        this.id += 1
        this.$emit('created')
        this.textInput = ""
      })
    }
  }
}
</script>

<style scoped>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
</style>
