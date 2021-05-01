<template>
  <div class="about">
    <input
      type="text"
      placeholder="Type Your Data To convert Slug"
      v-model="input"
      @change="convertdata()"
    />
    <div class="data">{{ output }}</div>

    <div class="switch-color">
      <ul>
        <li data-color="#2980b9" @click="switchColor"></li>
        <li data-color="#1abc9c" @click="switchColor"></li>
        <li data-color="#9b59b6" @click="switchColor"></li>
        <li data-color="#e74c3c" @click="switchColor"></li>
        <li data-color="#d35400" @click="switchColor"></li>
      </ul>
      <div class="color">
        <p :style="{ background: color }">change color</p>
        <p :style="{ background: color }">change color</p>
        <p :style="{ background: color }">change color</p>
        <p :style="{ background: color }">change color</p>
        <p :style="{ background: color }">change color</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      input: "",
      output: "",
      color: "#2980b9",
    };
  },
  methods: {
    convertdata: function () {
      var theSlug = this.input.toLowerCase();
      theSlug = theSlug.replace(/\s+/g, "-");
      theSlug = theSlug.replace(/&/g, "-and-");
      this.output = theSlug;
    },
    switchColor: function (event) {
      this.color = event.target.getAttribute("data-color");

      if (localStorage.color) {
        localStorage.remove();
        this.color = localStorage.color;
      }
    },
  },
  watch: {
    color(newColor) {
      localStorage.color = newColor;
    },
  },
  name: "serves",
};
</script>

<style scoped>
.data {
  display: block;
  background-color: rgb(156, 52, 52);
  color: #fff;
  text-align: center;
  margin: 5px 589px;
  width: 189px;
}
ul {
  list-style: none;
}
ul li:nth-child(1) {
  padding: 10px;
  display: inline-block;
  background: #2980b9;
  margin: 0 5px;
  cursor: pointer;
}
ul li:nth-child(2) {
  padding: 10px;
  display: inline-block;
  background: #1abc9c;
  margin: 0 5px;
  cursor: pointer;
}
ul li:nth-child(3) {
  padding: 10px;
  display: inline-block;
  background: #9b59b6;
  margin: 0 5px;
  cursor: pointer;
}
ul li:nth-child(4) {
  padding: 10px;
  display: inline-block;
  background: #e74c3c;
  margin: 0 5px;
  cursor: pointer;
}
ul li:nth-child(5) {
  padding: 10px;
  display: inline-block;
  background: #d35400;
  margin: 0 5px;
  cursor: pointer;
}
.color {
  display: block;
  margin: 10px 10px;
  background: rgb(134, 144, 144);
}
</style>
