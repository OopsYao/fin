import React from 'react';
import useScript from '../../utils/useScript';
import MarkdownIt from 'markdown-it';
import markdownItHighlight from 'markdown-it-highlight';
import implicitFigures from 'markdown-it-implicit-figures';
import mk from '@iktakahiro/markdown-it-katex'; // Match 0.11.1 KaTeX css and support Chinese
import markdownItAttrs from 'markdown-it-attrs';
import cjkBreaks from 'markdown-it-cjk-breaks';

import 'highlight.js/styles/nord.css';
import styles from './.module.css';

const md = new MarkdownIt({
    html: true,
})
    .use(markdownItAttrs)
    .use(markdownItHighlight)
    .use(implicitFigures, {
        figcaption: true
    })
    .use(mk)
    .use(cjkBreaks);
// When rendering table, wrap in div container to make overflow scroll
// See https://github.com/markdown-it/markdown-it/issues/544
md.renderer.rules.table_open = (tokens, idx, options, _, self) =>
    `<div class='table-wrapper'>${self.renderToken(tokens, idx, options)}`;
md.renderer.rules.table_close = (tokens, idx, options, _, self) =>
    `${self.renderToken(tokens, idx, options)}</div>`;


export default props => {
    // Copy KaTeX
    useScript('https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/copy-tex.min.js');
    return (
        <div>
            <link rel='stylesheet' href='https://cdn.bootcdn.net/ajax/libs/KaTeX/0.11.1/katex.min.css' />
            <link href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/copy-tex.css" rel="stylesheet" type="text/css" />
            <div className={styles.post} dangerouslySetInnerHTML={{ __html: md.render(props.post) }} />
        </div>
    )
};