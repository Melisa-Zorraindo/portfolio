<footer>
  <ul>
    <li>
      <address>
        <a href="mailto:melisa.zorraindo@gmail.com">melisa.zorraindo@gmail.com</a>
      </address>
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
    background-color: var(--dark);
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding-left: 0;
  }

  li {
    padding: 0.5rem 1.5rem;
  }

  .last-li {
    display: none;
  }

  a {
    color: var(--light);
    text-decoration: none;
    font-family: 'Inter-Light', sans-serif;
  }

  address {
    font-style: normal;
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

  @media (width >= 400px) {
    li {
      border-right: none;
    }

    .last-li {
      border-right: 1px solid var(--dark);
      display: flex;
      gap: 1rem;
    }
  }
</style>