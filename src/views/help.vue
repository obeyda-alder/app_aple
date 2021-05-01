<template>
  <div class="help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="toggle">
      <form action="" class="form">
        <input :type="type" class="input" />
        <i :class="classes" @click="togglepro" class="eye"></i>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Help",
      pageDescription: "This Is Help Page",
      type: "password",
      classes: "fas fa-eye",
    };
  },
  methods: {
    togglepro: function () {
      this.type = this.type === "password" ? "text" : "password";
      this.classes =
        this.classes === "fas fa-eye" ? "fas fa-eye-slash" : "fas fa-eye";
    },
  },
  name: "help",
};
</script>
<style scoped>
.toggle {
  width: 241px;
  position: relative;
}
.form {
  background-color: #fff;
  box-shadow: 0 0 10px #111;
  width: 241px;
  border-radius: 15px;
  margin: 0 auto;
  padding: 3px;
}
.input {
  border: none;
  background-color: #dc3545;
  color: rgba(93, 38, 38, 0.89);
  padding: 8px 8px;
}
.input:focus {
  outline: none;
}
.eye {
  position: absolute;
  right: 23px;
  top: 11px;
  cursor: pointer;
  color: #3ca596;
}
</style>
