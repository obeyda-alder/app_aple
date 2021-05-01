<template>
  <div class="blog">
    <div class="container mb-2">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">{{ title | upperCase}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ author }}</h6>
          <p class="card-text">{{ category }}</p>
          <a href="#" class="card-link">{{ date }}</a>
          <a href="#" class="card-link">{{ views }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "date", "category", "author"],
  name: "BlogSide",
};
</script>