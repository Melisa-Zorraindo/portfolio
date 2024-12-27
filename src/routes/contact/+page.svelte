<svelte:head>
	<title>Melisa's portfolio :: Contact</title>
</svelte:head>

<div class="container">
  <h1>Get in touch</h1>
  <address>
    Reach me via email:
    <a href="mailto:melisa.zorraindo@gmail.com">melisa.zorraindo@gmail.com</a>
  </address>
  <p>Prefer not to email? Feel free to use the contact form below instead.</p>
  <form action="" class="form">
    <div class="field">
      <input type="text" name="name" id="name">
      <label for="name">Name</label>
    </div>
    <div class="field">
      <input type="email" name="email" id="email">
      <label for="email">Email</label>
    </div>
    <div class="field">
      <input type="text" name="subject" id="subject">
      <label for="subject">Subject</label>
    </div>
    <textarea name="message" id="message" placeholder="Message" class="message"></textarea>
    <div class="btn-container">
			<div class="corner-border">
    <span class="btn-wrapper">
      <input type="submit" value="Send" class="btn">
    </span>
      </div>
    </div>
  </form>
</div>

<style>
  .container,
  .form,
  .field {
    display: flex;
    flex-direction: column;
  }

  .container {
    padding: 0 2rem;
  }

  address {
    font-style: normal;
  }

  .form {
    margin-top: 2rem;
  }

  .field {
    margin: .25rem 0;
  }

  .field input {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    height: 1.5rem;
    background-color: inherit;
  }

  .field label {
    margin-top: .5rem;
  }

  .message {
    margin-top: 1rem;
    height: 5rem;
    border: 1px solid black;
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
    margin-top: .75rem;
  }

  .btn {
    background-color: black;
    color: white;
    border: none;
    padding: .75rem 2rem;
    font-family: inherit;
  }

  .btn:hover {
    background-color: transparent;
    color: black;
    transition: all .2s ease-in-out;
    cursor: pointer;
  }

  .corner-border {
  position: relative;
  display: inline-block;
}

.corner-border::before,
.corner-border::after {
  content: '';
  position: absolute;
  background-color: #000;
  transition: all 0.5s ease-in-out;
}

.corner-border::before {
  top: 0;
  left: 0;
  width: 0;
  height: 1px;
}

.corner-border::after {
  bottom: 0;
  right: 0;
  width: 0;
  height: 1px;
}

.btn-wrapper {
  position: relative;
  display: inline-block;
}

.btn-wrapper::before,
.btn-wrapper::after {
  content: '';
  position: absolute;
  background-color: #000;
  width: 1px;
  height: 0;
  transition: all 0.6s ease-in-out;
}

.btn-wrapper::before {
  top: 0;
  left: 0;
}

.btn-wrapper::after {
  bottom: 0;
  right: 0;
}

.corner-border:hover::before {
  width: 110%;
}

.corner-border:hover::after {
  width: 110%;
}

.corner-border:hover .btn-wrapper::before {
  height: 120%;
}

.corner-border:hover .btn-wrapper::after {
  height: 120%;
}

@media (width >= 700px) {
    .container {
      margin-top: 4rem;
    }
  }

</style>

