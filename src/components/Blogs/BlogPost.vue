<template>
  <div class="post-box">
    <span class="post-views">{{ views }}</span>
    <h2 class="post-title">{{ title | upperCase }}</h2>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">{{ content | shorterText(20, '"more"') }}</p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author">{{ author | revers }}</span>
      </div>
      <div class="col-sm-6">
        <span class="post-category">{{ category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "date", "content", "category", "author"],
  name: "BlogPost",
};
</script>
<style scoped lang="scss">
.post-box {
  background: rgb(0 123 255 / 15%);
  box-shadow: 0 0 3px;
  position: relative;
  margin-bottom: 20px;
}
.post-box::after {
  content: " ";
  width: 100%;
  height: 3px;
  background: #1f1f24;
  display: block;
  margin: 10px 0;
  position: absolute;
}
.post-views {
  position: absolute;
  right: 18px;
  background: #2b8a74ad;
  color: #fff;
  font-weight: bold;
  padding: 3px;
  border-radius: 5px;
  margin: 6px 0;
}
.post-title {
  padding-right: 165px;
  box-shadow: 8px 19px 12px #5f5f5f;
  margin: 0 auto;
  width: 70%;
  color: #fff;
  background: #343a4070;
}
.post-date {
  display: block;
  margin: 7px;
  padding: 4px;
  color: #33333385;
  font-size: 12px;
  text-align: left;
  padding-left: 104px;
}
.post-content {
  background: #333344a8;
  color: #f8f9fa;
  box-shadow: -8px -3px 26px #bd213094;
}
.post-author {
  background: #bd2130c7;
  padding: 5px 12px;
  border-radius: 5px;
  color: #dee2e6;
  font-size: 13px;
  text-align: left;
  float: left;
  margin: 0 25px;
}
.post-category {
  background: #bd2130c7;
  padding: 5px 12px;
  border-radius: 5px;
  color: #dee2e6;
  font-size: 13px;
  text-align: right;
  float: right;
  margin: 0 25px;
}
</style>
