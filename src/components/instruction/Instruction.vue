<template>
  <div class="instruction-desktop d-flex flex-column">
    <h1>History Quiz</h1>
    <p class="extension">Read the following instructions</p>
    <div class="info d-flex flex-row">
      <img src="@/assets/picsum.jpg" alt="toggle" />
      <div class="quiz-info d-flex justify-content-around">
        <div class="quiz-titles">
          <p>Date</p>
          <p>Time Limit:</p>
          <p>Attempts:</p>
          <p>Points:</p>
        </div>
        <div class="quiz-utils">
          <p>28/07/2021</p>
          <p>30 Mins</p>
          <p>Once</p>
          <p>200 Points</p>
        </div>
      </div>
    </div>
    <h2 class="instruction">Instructions</h2>
    <div class="description">
      <p>
        This quiz consists of 5 multiple-choice questions. To be successful with
        the quizzes, it’s important to conversant with the topics. Keep the
        following in mind:
      </p>
      <p>
        Timing - You need to complete each of your attempts in one sitting, as
        you are allotted 30 minutes to each attempt. Answers - You may review
        your answer-choices and compare them to the correct answers after your
        final attempt.
      </p>
      <p>
        To start, click the "Start" button. When finished, click the "Submit "
        button.
      </p>
    </div>
    <button type="button" class="btn btn-active right-btn d-flex justify-content-center">
      <p>Start</p>
    </button>
  </div>
</template>
<script>
export default {}
</script>
<style src="./instruction.css" scoped></style>
