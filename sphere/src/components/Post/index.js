import React from 'react';
import MarkdownIt from 'markdown-it';
import markdownItHighlight from 'markdown-it-highlight';
import implicitFigures from 'markdown-it-implicit-figures';

import 'highlight.js/styles/nord.css';
import styles from './.module.css';

const md = new MarkdownIt()
    .use(markdownItHighlight)
    .use(implicitFigures, {
        figcaption: true
    });
// When rendering table, wrap in div container to make overflow scroll
// See https://github.com/markdown-it/markdown-it/issues/544
md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
    return `<div class='table-wrapper'>` + self.renderToken(tokens, idx, options);
};
md.renderer.rules.table_close = function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options) + `</div>`
};
export default props => (
    <div className={styles.post} dangerouslySetInnerHTML={{ __html: md.render(props.post) }} />
)
