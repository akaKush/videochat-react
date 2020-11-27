import React from 'react';
import './BrowserUnsupported.css';

export default function BrowserUnsupported() {
  return (
    <p class="browser-unsupported">
      Aquesta versió del teu navegador no és compatible amb aquesta demo.
      <br />
      Per més informació, visiti&nbsp;
      <a href="https://help.daily.co/en/articles/3179421-what-browser-version-does-daily-co-require">
        aquesta pàgina
      </a>
      &nbsp;per més ajuda en quines versions del navegador són compatibles.
    </p>
  );
}
