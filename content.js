  console.log("content.js loaded successfully");


  document.addEventListener(
    "copy",
    (evt) => {
        evt.clipboardData.setData(
            "text/plain",
            "Copy is disabled"
        );
        console.log("Copy listener called");
        evt.preventDefault();
    },
    false
);

document.onpaste = (event) => {
    event.preventDefault();
    console.log("Paste disabledlistener called");
    return false;
  };