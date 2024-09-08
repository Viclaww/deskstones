import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor() {
  const quillRef = useRef(null);

  // Function to insert the uploaded image URL into the editor
  const insertToEditor = (url) => {
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection();
    editor.insertEmbed(range.index, "image", url); // Insert the image at the current cursor position
  };

  const insertLoadingPlaceholder = () => {
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection();
    const index = range ? range.index : editor.getLength();

    // Insert the loading text
    editor.insertText(index, "Uploading...");
    return index; // Return the index of the placeholder for replacement later
  };

  // Function to upload the image to the server
  const saveToServer = (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const index = insertLoadingPlaceholder(); // Insert a loading placeholder while the image is being uploaded
    const editor = quillRef.current.getEditor();

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:1000/image/upload", true); // Adjust your upload URL
    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        editor.insertText(index, `Uploading... ${Math.round(progress)}%`); // Update the progress in the editor
      }
    };
    xhr.onload = () => {
      if (xhr.status === 201) {
        const url = JSON.parse(xhr.responseText).data.url; // Parse the image URL from the server response
        console.log("Image uploaded successfully. URL:", url);
        editor.deleteText(index, 10); // Remove the loading text
        insertToEditor(url); // Insert the image into the editor
      } else {
        console.error(
          "Failed to upload image. Server responded with status:",
          xhr.status
        );
      }
    };
    xhr.onerror = () => {
      console.error("Error occurred while uploading the image.");
    };
    xhr.send(formData);
  };

  // Function to handle the image selection and upload
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      if (file && /^image\//.test(file.type)) {
        saveToServer(file); // Proceed with the image upload if the file is an image
      } else {
        console.warn("Only image files are allowed.");
      }
    };
  };

  // Quill editor toolbar configuration with custom image handler
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote", "code"],
        [{ align: ["right", "center", "justify"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"], // Image button in toolbar
      ],
      handlers: {
        image: imageHandler, // Custom image handler
      },
    },
  };

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      ref={quillRef}
      placeholder="Enter your content here..."
    />
  );
}

export default Editor;
