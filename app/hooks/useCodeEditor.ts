import { useEffect, useRef, useState } from "react";
import { markdown } from "@codemirror/lang-markdown";
import type { ViewUpdate } from "@codemirror/view";
import { EditorView, keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { EditorState } from "@codemirror/state";
import { basicSetup } from "codemirror";
import { oneDark } from "@codemirror/theme-one-dark";

type OnChange = (value: string, viewUpdate: ViewUpdate) => void;

function onUpdate(onChange: OnChange) {
  return EditorView.updateListener.of((viewUpdate: ViewUpdate) => {
    if (viewUpdate.docChanged) {
      const doc = viewUpdate.state.doc;
      const value = doc.toString();
      onChange(value, viewUpdate);
    }
  });
}

export default function useCodeEditor({ value, onChange, extensions = [] }) {
  const ref = useRef<Element>(null);
  const [view, setView] = useState<EditorView>();

  useEffect(() => {
    const _view = new EditorView({
      state: EditorState.create({
        doc: "a",
        extensions: [
          basicSetup,
          oneDark,
          keymap.of([indentWithTab]),
          markdown(),
          onUpdate(onChange),
          ...extensions,
        ],
      }),
      parent: ref.current || undefined,
    });

    setView(_view);

    /**
     * Make sure to destroy the codemirror instance
     * when our components are unmounted.
     */
    return () => {
      _view.destroy();
      setView(undefined);
    };
  }, []);

  // useEffect(() => {
  //   if (view) {
  //     const editorValue = view.state.doc.toString();

  //     if (value !== editorValue) {
  //       view.dispatch({
  //         changes: {
  //           from: 0,
  //           to: editorValue.length,
  //           insert: value || "",
  //         },
  //       });
  //     }
  //   }
  // }, [value, view]);

  return ref;
}
