document.addEventListener("DOMContentLoaded", function (event) {
  var thumbnailElement = document.getElementById("smart_thumbnail");
  var thumbnailElement2 = document.getElementById("smart_thumbnail_2");

  thumbnailElement.addEventListener("click", function () {
    if (thumbnailElement.className === "small") {
      thumbnailElement.className = "smart_thumbnail";
    } else {
      thumbnailElement.className = "small";
    }
  });

  thumbnailElement2.addEventListener("click", function () {
    if (thumbnailElement2.className === "small") {
      thumbnailElement2.className = "smart_thumbnail_2";
    } else {
      thumbnailElement2.className = "small";
    }
  });
});
