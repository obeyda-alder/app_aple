<template>
  <div class="blog">
    <div class="container-fluid">
      <div class="card">
        <img
          src="../assets/images/pexels-photo-7415759.jpeg"
          class="card-img-top"
          alt="..."
          title="hands-girls"
        />
        <div class="card-body">
          <h5 class="card-title">{{ title | upperCase }}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="post col-md-8">
          <Blog-post
            v-for="post in posts"
            :key="post.id"
            :views="post.views"
            :content="post.content"
            :author="post.author"
            :category="post.category"
            :date="post.date"
            :title="post.title"
          />
        </div>
        <div class="post col-md-4">
          <Blog-side
            v-for="post in posts"
            :key="post.id"
            :views="post.views"
            :author="post.author"
            :category="post.category"
            :date="post.date"
            :title="post.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/Blogs/BlogPost.vue";
import BlogSide from "@/components/Blogs/BlogSide.vue";
import Json from "../json/blog-posts.json";

export default {
  data: function () {
    return {
      posts: Json,
      title: "card title",
    };
  },
  name: "blog",
  components: {
    BlogPost,
    BlogSide,
  },
};
</script>
<style scoped>
.container-fluid {
  padding: 0;
}
.card {
  box-shadow: 0 0 10px #000;
}
.card img {
  height: 600px;
  background-size: cover;
}
</style>
