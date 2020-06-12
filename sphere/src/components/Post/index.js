import React from 'react';
import MarkdownIt from 'markdown-it';
import markdownItHighlight from 'markdown-it-highlight';
import implicitFigures from 'markdown-it-implicit-figures';
import mk from '@iktakahiro/markdown-it-katex'; // Match 0.11.1 KaTeX css and support Chinese

import 'highlight.js/styles/nord.css';
import styles from './.module.css';

const md = new MarkdownIt()
    .use(markdownItHighlight)
    .use(implicitFigures, {
        figcaption: true
    })
    .use(mk);
// When rendering table, wrap in div container to make overflow scroll
// See https://github.com/markdown-it/markdown-it/issues/544
md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
    return `<div class='table-wrapper'>` + self.renderToken(tokens, idx, options);
};
md.renderer.rules.table_close = function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options) + `</div>`
};
export default props => (
    <div>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css' />
        <div className={styles.post} dangerouslySetInnerHTML={{ __html: md.render(props.post) }} />
    </div>
)
