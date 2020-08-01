import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
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
    return (<>
        THIS IS AN EDTIOR
        <Editor editorState={editorState} onChange={setEditorState} />
    </>)
};

export default WysiwygWithErrors;