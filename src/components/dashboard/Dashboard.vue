<template>
  <div class="dashboard">
    <div class="header d-flex">
      <img src="@/assets/picsum.jpg" alt="profile image" />
      <div class="info">
        <h1>Oluwatobi Olowu</h1>
        <p>Bonus booster 24lv</p>
        <div class="progress">
          <div class="progress-bar"></div>
        </div>
        <div class="container results">
          <div class="col-4 quiz-passed-result">
            <i class="box fa-solid fa-flag fa-2xl" style="color: #696f79"></i>
            <div class="score">
              <h1>27</h1>
              <p>Quiz Passed</p>
            </div>
          </div>
          <div class="col-4 quiz-passed-result">
            <i class="box fa-solid fa-clock fa-2xl" style="color: #696f79"></i>
            <div class="score">
              <h1>27min</h1>
              <p>Fastest Time</p>
            </div>
          </div>
          <div class="col-4 quiz-passed-result">
            <i
              class="box fa-solid fa-circle-check fa-2xl"
              style="color: #696f79"
            ></i>
            <div class="score">
              <h1>200</h1>
              <p>Correct Answers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="achievements">
        <div class="d-flex title justify-content-space-around">
          <h1>Achievements</h1>
          <div class="progress w-160">
            <div class="progress-bar w-102"></div>
          </div>
        </div>
        <div class="main">
          <!-- somthing -->
        </div>
      </div>
      <div class="featured-category">
        <div class="d-flex title" style="justify-content: space-between">
          <h1>Featured Category</h1>
          <p>View All</p>
        </div>
        <div class="">
          <div class="d-flex f-category-main">
            <div class="photo-title">
              <img src="@/assets/picsum.jpg" alt="img" />
              <p>History</p>
            </div>
            <div class="photo-title">
              <img src="@/assets/picsum.jpg" alt="img" />
              <p>History</p>
            </div>
          </div>
          <div class="d-flex f-category-main">
            <div class="photo-title">
              <img src="@/assets/picsum.jpg" alt="img" />
              <p>History</p>
            </div>
            <div class="photo-title">
              <img src="@/assets/picsum.jpg" alt="img" />
              <p>History</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.dashboard {
  width: 1080px;
  height: 890px;
  background-color: #ffffff;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 30px;
}

.header > img {
  width: 298px;
  height: 258px;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 30px;
  margin: 56px 36px;
}

.progress {
  width: 620px;
  height: 12px;
  background: linear-gradient(0deg, #f5f5f5, #f5f5f5), #f5f5f5;
  border-radius: 30px;
}
.progress-bar {
  width: 435px;
  height: 12px;
  background: linear-gradient(0deg, #c4c4c4, #c4c4c4), #f5f5f5;
  box-shadow: 4px 4px 4px 3px rgba(237, 237, 237, 0.59);
  border-radius: 30px;
}
.quiz-passed-result {
  display: flex;
  margin-top: 44px;
}
.quiz-passed-result > .box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  background: #ffffff;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 15px;
  margin-right: 15px;
}

.quiz-passed-result > .score {
  display: flex;
  flex-direction: column;
}

.score > h1 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  line-height: 44px;
  color: #696f79;
}

.score > p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696f79;
  width: 132px;
}
.info > h1,
p {
  font-family: 'Poppins';
  font-style: normal;
  color: #696f79;
}

.info > h1 {
  font-weight: 700;
  margin-top: 67px;
  font-size: 33px;
  line-height: 50px;
}
.info > p {
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;
  margin-bottom: 32px;
}
.results {
  display: flex;
}
.w-102 {
  width: 102px;
}
.w-160 {
  width: 160px;
}
.achievements,
.featured-category {
  margin-top: 60px;
  margin-left: 17px;
  margin-right: 33px;
  width: 496px;
}
.achievements > .title {
  justify-content: space-between;
  align-items: center;
}
.achievements > .title > h1,
.featured-category > .title > h1,
.featured-category > .title > p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  color: #696f79;
  margin-bottom: 17px;
}

.featured-category > .title > p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696f79;
  margin-top: 7px;
}
.achievements > .main {
  width: 482px;
  height: 380px;
  background: #ffffff;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 30px;
}
.f-category-main > .photo-title > img {
  width: 235px;
  height: 172px;
  background: url(.jpg), #ffffff;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 30px;
  margin-bottom: 32px;
  position: relative;
}
.f-category-main > .photo-title > p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #FFFFFF;
  position: absolute;
  margin-top: -80px;
  margin-left: 15px;
}
.f-category-main {
  justify-content: space-between;
}
</style>
