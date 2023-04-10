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
        <div class="main d-flex flex-column">
          <div class="list d-flex">
            <div class="item">
              <i
                class="fa-sharp fa-solid fa-medal fa-2xl size"
                style="color: #ffdb29"
              ></i>
              <p>Comeback</p>
            </div>
            <div class="item">
              <i class="fa-solid fa-star fa-2xl size" style="color: #ffdb29"></i>
              <p>Winner</p>
            </div>
            <div class="item">
              <i
                class="fa-solid fa-face-smile-beam fa-2xl size"
                style="color: #ffdb29"
              ></i>
              <p>Lucky</p>
            </div>
          </div>
          <hr class="line" />
          <p>View All</p>
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

<script src="./dashboard.js"></script>
<style src="./dashboard.css"></style>
