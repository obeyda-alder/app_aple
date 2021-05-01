<template>
  <div class="header">
    <div class="container">
      <div class="logo">Obeyda App</div>
      <ul>
        <router-link to="/" tag="li" exact>
          <a>Home</a>
        </router-link>
        <router-link to="/about" tag="li">
          <a>About</a>
        </router-link>
        <router-link to="/blog" tag="li">
          <a>Blog</a>
        </router-link>
        <router-link to="/help" tag="li" replace>
          <a>Help</a>
        </router-link>
        <router-link to="/serves" tag="li" replace>
          <a>serves</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Appheader",
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;
  .logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 200px;
  }
  ul {
    float: right;
    width: calc(100% - 300px);
    text-align: right;
    margin-right: 50px;
    margin: 0;
    li {
      padding: 20px;
      display: inline-block;
      font-size: 18px;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
