<template>
  <div class="container">
    <div class="row">
      <div class="title col-6">
        <img src="@/assets/book.jpg" alt="book" />
        <div class="description">
          <h1>``</h1>
          <p>
            Those people who develop the ability to continuously acquire new and
            better forms of knowledge that they can apply to their work and to
            their lives will be the movers and shakers in our society for the
            indefinite future
            <br /><br />
            Brian Tracy
          </p>
          <div class="shape"></div>
        </div>
      </div>
      <div class="auth col-6">
        <button class="btn back-btn">
          <i class="fa-solid fa-chevron-left fa-sm" style="color: #8692a6"></i>
          <p>Back</p>
        </button>
        <form class="d-flex flex-column">
          <h1>Login to your Account</h1>
          <p>with your registered Email Address</p>
          <hr />
          <label for="email">Email address*</label>
          <input
            type="text"
            name="email"
            placeholder="Enter email address"
          /><br />
          <label for="password">Enter password*</label>
          <input type="text" name="password" placeholder="Password" /><br />
          <div class="d-flex flex-row align-items-center">
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> I have a boat</label><br /><br />
          </div>
          <button type="button" class="btn">Login</button>
          <div class="line d-flex">
            <hr width="100">
            <p>or</p>
            <hr width="100">
          </div>
          <button class="btn">
            <img src="@/assets/google.png" alt="google" width="24" height="24">
            <p>Login with Google</p>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style src="./login.css" scoped></style>
