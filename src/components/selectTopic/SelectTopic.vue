<template>
  <div class="select-topic d-flex flex-column">
    <h1 class="title">Select topic</h1>
    <p class="text">Featured Category</p>
    <div class="quiz-titles d-flex flex-column justify-content-evenly">
      <div class="quiz-list d-flex justify-content-evenly">
        <div class="quiz-item">
          <img src="@/assets/picsum.jpg" alt="quiz" />
          <p>History</p>
        </div>
        <div class="quiz-item">
          <img src="@/assets/picsum.jpg" alt="quiz" />
          <p>History</p>
        </div>
        <div class="quiz-item">
          <img src="@/assets/picsum.jpg" alt="quiz" />
          <p>History</p>
        </div>
        <div class="quiz-item">
          <img src="@/assets/picsum.jpg" alt="quiz" />
          <p>History</p>
        </div>
      </div>
      <div class="quiz-list d-flex justify-content-evenly">
        <div class="quiz-item">
          <img src="@/assets/picsum.jpg" alt="quiz" />
          <p>History</p>
        </div>
        <div class="quiz-item">
          <img src="@/assets/picsum.jpg" alt="quiz" />
          <p>History</p>
        </div>
        <div class="quiz-item">
          <img src="@/assets/picsum.jpg" alt="quiz" />
          <p>History</p>
        </div>
        <div class="quiz-item">
          <img src="@/assets/picsum.jpg" alt="quiz" />
          <p>History</p>
        </div>
      </div>
      <div class="quiz-list d-flex justify-content-evenly">
        <div class="quiz-item">
          <img src="@/assets/picsum.jpg" alt="quiz" />
          <p>History</p>
        </div>
        <div class="quiz-item">
          <img src="@/assets/picsum.jpg" alt="quiz" />
          <p>History</p>
        </div>
        <div class="quiz-item">
          <img src="@/assets/picsum.jpg" alt="quiz" />
          <p>History</p>
        </div>
        <div class="quiz-item">
          <img src="@/assets/picsum.jpg" alt="quiz" />
          <p>History</p>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-active right-btn d-flex justify-content-center">
      <p>More</p>
    </button>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.select-topic {
  width: 1080px;
  height: 890px;
  background-color: #ffffff;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 30px;
  font-family: 'Poppins';
  font-style: normal;
  color: #696f79;
}

.select-topic > .title {
  font-weight: 700;
  font-size: 33px;
  line-height: 50px;
  margin-top: 24px;
  margin-left: 40px;
}

.select-topic > .text {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin-top: 7px;
  margin-left: 40px;
  margin-bottom: 25px;
}

.quiz-titles {
  height: 600px;
}
.quiz-titles > .quiz-list > .quiz-item > img {
  position: relative;
  width: 235px;
  height: 172px;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 30px;
}

.quiz-titles > .quiz-list > .quiz-item > p {
  position: absolute;
  margin-top: -40px;
  margin-left: 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
}
.btn-active {
  background-color: #8692a6;
}
.right-btn {
  margin-left: calc(77%);
  margin-top: 50px;
  width: 212px;
}
</style>
