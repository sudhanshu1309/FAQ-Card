const showAns = (id) => {
  const ansId = document.getElementById(id);
  quesId = document.getElementById("q" + ansId.id[1]);
  imageId = document.getElementById("i" + ansId.id[1]);
  ansId.style.marginTop = 0;
  if (ansId.style.display === "none") {
    ansId.style.display = "block";
    quesId.classList.add("bold");
    imageId.classList.add("rotate");
  } else {
    ansId.style.display = "none";
    quesId.classList.remove("bold");
    imageId.classList.remove("rotate");
  }
};
