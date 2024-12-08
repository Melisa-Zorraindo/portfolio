<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/projects">Projects</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
    <li class="last-li">
      <input type="text" name="" id="" placeholder="Search...">
    </li>
  </ul>
</nav>

<style>
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
    text-decoration: none;
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
</style>