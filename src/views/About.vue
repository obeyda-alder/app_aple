<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="alert alert-primary" role="alert">
        A simple primary alert with
        <a href="#" class="alert-link">an example link</a>. Give it a click if
        you like.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "About",
      pageDescription: "This Is About Page",
    };
  },
  name: "about",
};
</script>
