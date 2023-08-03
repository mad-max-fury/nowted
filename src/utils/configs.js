export const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
  ],
};
export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
export const styles = {
  control: (provided, state) => ({
    ...provided,
    height: "42px",
    borderRadius: "5px",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    backgroundColor: "transparent", // Remove background color
    outline: "none", // Remove outline
    border: "none", // Remove border
    boxShadow: state.isFocused ? "none" : "none", // Remove boxShadow
    cursor: "pointer",
    color: "white", // Set the text color to white
  }),
  option: (provided, state) => ({
    ...provided,
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: state.isDisabled
      ? "#333"
      : state.isSelected
      ? "#4d4af5"
      : state.isFocused
      ? "#a7a6f3"
      : "#333",
    color: state.isSelected ? "white" : state.isFocused ? "white" : null, // Set the option container background to #333
  }),
};
