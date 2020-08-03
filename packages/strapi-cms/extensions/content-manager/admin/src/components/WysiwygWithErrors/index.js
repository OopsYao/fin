import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const WysiwygWithErrors = ({
    inputDescription,
    errors = [],
    label,
    name,
    noErrorsDescription = false,
    onChange, // : ({ target: { name, value } }) => {} 保存这个值至该field
    value,
}) => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const onBoldClick = e => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };
    return (<div>
        <button onClick={onBoldClick}>Bold</button>
        <Editor editorState={editorState} onChange={setEditorState} />
    </div>)
};

export default WysiwygWithErrors;