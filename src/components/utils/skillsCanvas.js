import React from 'react';
import './skillsCanvas.css';

const skillsCanvas = () => (
  <div className="skills-canvas">
    <canvas width="500" height="500" id="myCanvas">
      <ul>
        <li><a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML 5</a></li>
        <li>
          <a data-weight="25" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS 3</a>
        </li>
        <li><a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a></li>
        <li>
          <a
            data-weight="24"
            href="https://en.wikipedia.org/wiki/Representational_state_transfer"
            target="_blank"
          >
            REST
          </a>
        </li>
        <li><a data-weight="21" href="https://en.wikipedia.org/wiki/Ajax_(programming)" target="_blank">AJAX</a></li>
        <li><a data-weight="14" href="https://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a></li>
        <li><a data-weight="13" href="https://en.wikipedia.org/wiki/XML" target="_blank">XML</a></li>
        <li><a data-weight="27" href="https://en.wikipedia.org/wiki/AngularJS" target="_blank">Angular JS</a></li>
        <li><a data-weight="26" href="https://en.wikipedia.org/wiki/WordPress" target="_blank">Wordpress</a></li>
        <li><a data-weight="22" href="https://en.wikipedia.org/wiki/PHP" target="_blank">PHP</a></li>
        <li><a data-weight="22" href="https://en.wikipedia.org/wiki/MySQL" target="_blank">MySQL</a></li>
        <li><a data-weight="21" href="https://en.wikipedia.org/wiki/Node.js" target="_blank">Node JS</a></li>
        <li><a data-weight="17" href="https://en.wikipedia.org/wiki/Git" target="_blank">Git</a></li>
        <li><a data-weight="17" href="https://en.wikipedia.org/wiki/Underscore.jst" target="_blank">_underscore</a></li>
        <li><a data-weight="17" href="http://handlebarsjs.com/" target="_blank">Handlebars.js</a></li>
        <li><a data-weight="20" href="https://vuejs.org/" target="_blank">Vue.js</a></li>
        <li>
          <a
            data-weight="23"
            href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
            target="_blank"
          >
            Bootstrap
          </a>
        </li>
        <li>
          <a data-weight="15" href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank">SASS</a>
        </li>
        <li><a data-weight="20" href="https://en.wikipedia.org/wiki/Responsive_web_design" target="_blank">RWD</a></li>
        <li><a data-weight="19" href="https://en.wikipedia.org/wiki/JQuery" target="_blank">jQuery</a></li>
        <li><a data-weight="19" href="http://mongoosejs.com/" target="_blank">Mongo DB</a></li>
        <li><a data-weight="19" href="https://karma-runner.github.io/1.0/index.html" target="_blank">Karma</a></li>
        <li><a data-weight="19" href="http://gulpjs.com/" target="_blank">Gulp</a></li>
        <li><a data-weight="19" href="https://www.npmjs.com/" target="_blank">npm</a></li>
        <li><a data-weight="19" href="https://bower.io/" target="_blank">Bower</a></li>
        <li><a data-weight="19" href="https://en.wikipedia.org/wiki/BEM" target="_blank">BEM</a></li>
        <li><a data-weight="19" href="https://en.wikipedia.org/wiki/Magento" target="_blank">Magento</a></li>
        <li><a data-weight="13" href="https://en.wikipedia.org/wiki/Drupal" target="_blank">Drupal</a></li>
        <li>
          <a data-weight="14" href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)" target="_blank">Lamp</a>
        </li>
        <li><a data-weight="19" href="https://en.wikipedia.org/wiki/Canvas_element" target="_blank">Canvas</a></li>
      </ul>
    </canvas>
  </div>
);
export default skillsCanvas;
