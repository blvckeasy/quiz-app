<template>
  <div class="d-flex flex-column justify-content-between div">
    <!-- main buttons -->
    <div>
      <button type="button" class="container btn btn-active">
        <i class="col-4 fa-solid fa-house"></i>
        <p class="col-8">Dashboard</p>
      </button>
      <button type="button" class="container btn">
        <i class="col-4 fa-solid fa-headphones"></i>
        <p class="col-8">Support</p>
      </button>
      <button type="button" class="container btn">
        <i class="col-4 fa-solid fa-bell"></i>
        <p class="col-8">Notification</p>
      </button>
    </div>
    <!-- under buttons -->
    <div>
      <button type="button" class="container btn">
        <i class="col-4 fa-solid fa-right-from-bracket fa-rotate-180"></i>
        <p class="col-8">Log Out</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.div {
  height: 890px;
}
.btn {
  width: 271px;
  height: 64px;
  border-radius: 30px;
  margin-right: 5px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #696f79;
  margin: 10px 22px;
}
.btn-active {
  background-color: #8692a6;
  color: #ffffff;
}

button i {
  justify-self: flex-start;
}

button p {
  justify-self: center;
  text-align: center;
  width: 114px;
  margin: 17px 0px;
}
</style>
