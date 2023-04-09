<template>
  <div class="container-fluid">
    <h1>Quiz Time</h1>
    <i class="icon fa-solid fa-magnifying-glass fa-lg"></i>
    <input type="text" class="search" placeholder="Search..." />
    <button type="button" class="btn btn-secondary">Start Quiz</button>
    <div class="profile">
      <img src="@/assets/picsum.jpg" alt="rasm" />
      <p>Oluwatobi..</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container-fluid {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  width: 1440px;
}

.icon {
  position: absolute;
  top: calc(48%);
  left: calc(27%);
}

.container-fluid h1 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 45px;
  color: #696f79;
  margin-left: 50px;
  width: 200px;
  margin-top: 43px;
  margin-bottom: 45px;
}

.container-fluid input {
  background-color: #fbf9f9;
  width: 356px;
  height: 64px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 30px;
  border: none;
  padding-left: 65px;
  margin-left: 115px;
  margin-top: 33px;
  margin-bottom: 36px;
}

.container-fluid button {
  width: 212px;
  height: 64px;
  background: #8692a6;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  border-radius: 30px;
  border: none;
  margin-left: 180px;
  margin-top: 33px;
  margin-bottom: 36px;
}

.container-fluid .profile {
  display: flex;
  align-items: center;
}
.container-fluid .profile img {
  width: 70px;
  height: 70px;
  background: #ffffff;
  border-radius: 50%;
  margin-left: 134px;
  margin-top: 28px;
  margin-bottom: 35px;
  margin-right: 15px;
}

.container-fluid .profile p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;
  color: #696f79;
  margin-right: 39px;
}

</style>
