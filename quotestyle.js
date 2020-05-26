var quoteStyle  = `.quoteback-container {
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  text-rendering: optimizeLegibility;
  border: 1px solid #C2DFE3;
  border-radius: 8px;
  margin-bottom: 25px;
  max-width: 800px;
  background-color: white;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease; }
  .quoteback-container:hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.15);
    border: 1px solid #9DB8BF; }
  .quoteback-container .quoteback-parent {
    overflow: hidden;
    position: relative;
    width: 100%;
    box-sizing: border-box; }
    .quoteback-container .quoteback-parent .quoteback-parent-text {
      padding: 15px;
      color: #5C6D73;
      z-index: 40; }
    .quoteback-container .quoteback-parent .quoteback-content {
      font-family: -apple-system, system-ui, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 16px;
      font-weight: 400;
      padding: 15px;
      color: #464A4D;
      line-height: 150%; }
  .quoteback-container .quoteback-head {
    border-top: 1px solid #C2DFE3;
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: stretch;
    padding-left: 15px;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease; }
    .quoteback-container .quoteback-head .quoteback-avatar {
      border-radius: 100%;
      border: 1px solid #C2DFE3;
      width: 42px;
      height: 42px;
      min-width: 42px !important;
      margin: 12px 0px;
      position: relative; }
      .quoteback-container .quoteback-head .quoteback-avatar .mini-favicon {
        width: 22px;
        height: 22px;
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0; }
    .quoteback-container .quoteback-head .quoteback-metadata {
      min-width: 0px;
      display: flex;
      flex-shrink: 1;
      align-items: center;
      margin-left: 10px; }
    .quoteback-container .quoteback-head .metadata-inner {
      font-size: 14px;
      line-height: 1.2;
      color: #9DB8BF;
      max-width: 100%; }
      .quoteback-container .quoteback-head .metadata-inner .quoteback-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 600;
        padding-right: 20px;
        color: #5C6D73; }
      .quoteback-container .quoteback-head .metadata-inner .quoteback-author {
        font-size: 14px;
        line-height: 1.2;
        color: black;
        font-weight: 600;
        margin-bottom: 2px; }
    .quoteback-container .quoteback-head .quoteback-backlink {
      margin-left: auto;
      display: flex;
      flex-shrink: 1;
      align-items: center;
      width: 81px;
      min-width: 81px !important;
      padding: 0px 15px !important;
      border-left: 1px solid #C2DFE3; }
      .quoteback-container .quoteback-head .quoteback-backlink .quoteback-arrow {
        border: none !important;
        font-family: inherit !important;
        font-size: 14px !important;
        color: #9DB8BF !important;
        text-decoration: none !important;
        -webkit-transition: opacity 0.1s ease;
        -moz-transition: opacity 0.1s ease;
        -ms-transition: opacity 0.1s ease;
        -o-transition: opacity 0.1s ease;
        transition: opacity 0.1s ease; }
        .quoteback-container .quoteback-head .quoteback-backlink .quoteback-arrow:hover {
          opacity: .5 !important; }
        .quoteback-container .quoteback-head .quoteback-backlink .quoteback-arrow:visited {
          text-decoration: none !important; }

.editable:focus {
  outline: none; }
.editable:after {
  margin-left: 10px;
  content: url('${chrome.runtime.getURL("images/editicon.svg")}'); }

.quoteback-content a {
  color: #464A4D;
  -webkit-transition: opacity 0.2s ease;
  -moz-transition: opacity 0.2s ease;
  -ms-transition: opacity 0.2s ease;
  -o-transition: opacity 0.2s ease;
  transition: opacity 0.2s ease; }
  .quoteback-content a:hover {
    opacity: .5; }
.quoteback-content p {
  margin-block-start: 0px;
  margin-block-end: .5em; }
  .quoteback-content p:last-of-type {
    margin-block-end: 0px; }
.quoteback-content img {
  width: 100%;
  height: auto;
  margin: .5em 0em; }
.quoteback-content blockquote {
  border-left: 2px solid #C2DFE3;
  padding-left: .75em;
  margin-inline-start: 1em;
  color: #5C6D73; }
.quoteback-content ol, .quoteback-content ul {
  margin-block-start: .5em;
  margin-block-end: .5em; }
.quoteback-content h1, .quoteback-content h2, .quoteback-content h3 {
  margin-block-start: .5em;
  margin-block-end: .5em; }


`