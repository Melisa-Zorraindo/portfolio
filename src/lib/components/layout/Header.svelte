<header class="header">
  <input class="side-menu" type="checkbox" id="side-menu"/>
  <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
  <nav class="nav">
      <ul class="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a> </li>
          <li><a href="/contact">Contact</a></li>
          <li class="last-li">
            <input type="text" name="" id="" placeholder="Search...">
          </li>
      </ul>
  </nav>
</header>

<style>
  .nav{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f3f3f3;
    box-shadow: 1px 1px 5px 0px #c9c9c9;
    overflow: hidden;
    z-index: 100;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6rem;
    gap: 5rem;
  }

  .menu a{
    display: block;
  }

  .menu .last-li {
    display: none;
  }

  .nav{
    max-height: 0;
    transition: max-height .5s ease-out;
  }

  .hamb{
    cursor: pointer;
    padding: 40px 20px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 120;
  }

  .hamb-line {
    background: black;
    display: block;
    height: 2px;
    position: relative;
    width: 24px;
  }

  .hamb-line::before,
  .hamb-line::after{
    background: black;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }

  .hamb-line::before{
    top: 5px;
  }

  .hamb-line::after{
    top: -5px;
  }

  .side-menu {
    display: none;
  }

  .side-menu:checked ~ nav{
    max-height: 100%;
  }

  .side-menu:checked ~ .hamb .hamb-line {
    background: transparent;
  }

  .side-menu:checked ~ .hamb .hamb-line::before {
    transform: rotate(-45deg);
    top:0;
  }

  .side-menu:checked ~ .hamb .hamb-line::after {
    transform: rotate(45deg);
    top:0;
  }

  @media (min-width: 800px) {
    .nav{
      box-shadow: none;
      margin-top: 1rem;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      position: relative;
      top: 0;
      max-height: none;
    }

    .menu {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0;
      gap: 0;
    }

    .menu li {
      border-left: 1px solid black;
      padding: .6rem 1.5rem;
    }

    .menu .last-li {
      display: block;
      border-right: 1px solid black;
    }

    .hamb{
      display: none;
    }

    input {
      border: none;
      font-family: 'Source Code Pro', monospace;
      font-size: 1rem;
      background-color: #f3f3f3;
      color: inherit;
      width: 100%;
    }

    input:focus {
      outline: none;
    }
  }
</style>

<!-- <style>
  nav {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin: 1rem auto 0;
    width: 100%;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding-left: 0;
  }

  li {
    border-left: 1px solid black;
    padding: 0.5rem 1.5rem;
  }

  .last-li {
    border-right: 1px solid black;
  }

  a {
    color: inherit;
  }

  input {
    border: none;
    font-family: 'Source Code Pro', monospace;
    font-size: 1rem;
    background-color: #f3f3f3;
    color: inherit;
    width: 100%;
  }

  input:focus {
    outline: none;
  }
</style> -->