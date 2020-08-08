import React, {
    useMemo,
    useState,
} from "react";
import {
    createEditor,
    Transforms,
    Editor,
    Text,
    Node,
} from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const EditorHelper = {
    ...Editor,
    isBoldMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.bold === true,
            universal: true,
        });
        return !!match
    },
    toggleBoldMark(editor) {
        const isActive = this.isBoldMarkActive(editor);
        // Get selected text
        const { selection } = editor;
        const [frag] = Node.fragment(editor, selection);
        const [[{ text }]] = Node.texts(frag);

        // TODO Promotion needed, this func can not deal with complicated cases
        const toggleFormat = text => {
            if (isActive) {
                if (/\*\*.*\*\*/.test(text)) {
                    return text.substring(2, text.length - 2)
                } else {
                    return text
                }
            } else {
                return `**${text}**`
            }
        }

        Transforms.insertText(
            editor,
            toggleFormat(text)
        );
        Transforms.setNodes(
            editor,
            { bold: isActive ? null : true },
            { match: n => Text.isText(n), split: true }
        );
    }
}

const myEditor = () => {
    const editor = useMemo(() => withReact(createEditor()), [])
    // Add the initial value when setting up our state.
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ])
    return (
        <Slate
            editor={editor}
            value={value}
            onChange={newValue => setValue(newValue)}
        >
            <Editable
                onKeyDown={evt => {
                    if (!evt.ctrlKey) { return }
                    switch (evt.key) {
                        case 'b':
                            evt.preventDefault();
                            EditorHelper.toggleBoldMark(editor);
                            break;
                        default:
                            break;
                    }
                }}
            />
        </Slate>
    )
}

export default myEditor;