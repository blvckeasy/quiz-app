<template>
  <div class="dashboard">
    <div class="header d-flex justify-content-between">
      <h1 class="title">History Quiz</h1>
      <p class="timer">Timer: 29:09 Mins</p>
    </div>
    <p class="description">Answer the question below</p>
    <div class="question d-flex">
      <img src="@/assets/picsum.jpg" alt="question image" />
      <div class="question-text">
        <h1 class="question-number">Question 1/5</h1>
        <p class="question-description">
          Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, as
          part of a protest against a bus company that refused to employ black
          and Asian drivers in which UK city?
        </p>
      </div>
    </div>
    <h2>Choose answer</h2>
    <div class="answer-list d-flex flex-column">
      <div class="answer-item d-flex">
        <input type="radio" name="answer-option" value="a" />
        <label for="a">London</label>
      </div>
      <div class="answer-item">
        <input type="radio" name="answer-option" value="b" />
        <label for="b">Edinburgh</label>
      </div>
      <div class="answer-item">
        <input type="radio" name="answer-option" value="c" />
        <label for="c">Liverpool</label>
      </div>
      <div class="answer-item">
        <input type="radio" name="answer-option" value="d" />
        <label for="d">Canary Wharf</label>
      </div>
    </div>
    <button type="button" class="btn btn-active right-btn d-flex justify-content-center">
      <p>Next</p>
    </button>
  </div>
</template>
<script>
export default {}
</script>
<style src="./answerQuestion.css"></style>
