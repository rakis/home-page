import * as React from 'react';

const Home = () => (
  <div className="home-screen">
    <h1>Hello, World! <span role="img" aria-label="">👋</span></h1>
    <section className="intro">
      My name is Victor Nghe. I&apos;m a{' '}
      <a href="https://www.linkedin.com/in/victornghe">web developer</a> by
      trade, but I dabble in <a href="https://victorcares.wordpress.com/">writing</a>{' '}
      from time to time.
    </section>

    <section className="about-me">
      <h3>Things I&apos;m currently learning:</h3>
      <ul>
        <li>Italian <span role="img" aria-label="">🇮🇹</span></li>
        <li><a href="https://www.rust-lang.org/">Rust</a></li>
      </ul>
      <h3>Things I&apos;d like to see in my lifetime:</h3>
      <ul>
        <li>Affordable Healthcare</li>
        <li>Colonization of Mars</li>
        <li>Faster-than-light Travel</li>
      </ul>
    </section>
  </div>
);

export default Home;
