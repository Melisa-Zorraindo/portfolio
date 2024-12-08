<footer>
  <ul>
    <li>
        Melisa Zorraindo
    </li>
    <li class='last-li'>
      <a href="https://github.com/Melisa-Zorraindo" target="_blank" aria-label="github icon">
        <i class="gh-icon"></i>
      </a>
      <a href="https://www.linkedin.com/in/melisa-zorraindo-81719618b/" target="_blank" aria-label="linkedin icon">
        <i class="li-icon"></i>
      </a>
    </li>
  </ul>
</footer>

<style>
  footer {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
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
    display: flex;
    gap: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .gh-icon {
    background: url('/icons/github-icon.svg');
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    height: 1.25rem;
    width: 1.25rem;
  }

  .li-icon {
    background: url('/icons/linkedin-square-icon.svg');
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    height: 1.25rem;
    width: 1.25rem;
  }
</style>