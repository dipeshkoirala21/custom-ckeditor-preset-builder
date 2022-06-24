import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Styles from "@ckeditor/ckeditor5-style/src/style.js";
import GeneralHtmlSupport from "@ckeditor/ckeditor5-html-support/src/generalhtmlsupport";

const headingConfig = {
  options: [
    { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
    {
      model: "heading1",
      view: "h2",
      title: "Heading 1",
      class: "ck-heading_heading1",
    },
    {
      model: "heading2",
      view: "h3",
      title: "Heading 2",
      class: "ck-heading_heading2",
    },
    {
      model: "heading3",
      view: "h4",
      title: "Heading 3",
      class: "ck-heading_heading3",
    },
    {
      model: "heading4",
      view: "h5",
      title: "Heading 4",
      class: "ck-heading_heading4",
    },
    {
      model: "heading5",
      view: "h6",
      title: "Heading 5",
      class: "ck-heading_heading5",
    },
    {
      model: "heading6",
      view: "h7",
      title: "Heading 6",
      class: "ck-heading_heading6",
    },
  ],
};

ClassicEditor.create(document.querySelector("#editor"), {
  plugins: [
    Essentials,
    UploadAdapter,
    Paragraph,
    Bold,
    Italic,
    SourceEditing,
    BlockQuote,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    Heading,
    Highlight,
    HorizontalLine,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    List,
    RemoveFormat,
    Strikethrough,
    Table,
    Underline,
    Styles,
  ],
  extraPlugins: [GeneralHtmlSupport],

  toolbar: [
    "sourceEditing",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",
    "|",
    "horizontalLine",
    "removeFormat",
    "strikethrough",
    "blockQuote",
    "heading",
    "fontSize",
    "fontFamily",
    "undo",
    "redo",
    "style",
    "insertTable",
  ],
  heading: headingConfig,
  language: "ja",
  image: {
    styles: [
      // Definitions of block styles.
      {
        name: "Red heading",
        element: "h2",
        classes: ["red-heading"],
      },
      {
        name: "Vibrant code",
        element: "pre",
        classes: ["vibrant-code"],
      },

      // Definitions of text (inline) styles.
      {
        name: "Marker",
        element: "span",
        classes: ["marker"],
      },
      // ...
    ],
  },
})
  .then((editor) => {
    console.log(Array.from(editor.ui.componentFactory.names()));
  })
  .catch((error) => {
    console.error(error.stack);
  });
