<template>
  <div class="home">
    <div class="container mt-2 mb-2" style="width: 400px">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item">
            <img
              src="../assets/images/pexels-photo-1796628.jpeg"
              class="d-block w-50"
              alt="..."
            />
          </div>
          <div class="carousel-item active">
            <img
              src="../assets/images/pexels-photo-7089743.jpeg"
              class="d-block w-50"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/images/pexels-photo-7292958.jpeg"
              class="d-block w-50"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
