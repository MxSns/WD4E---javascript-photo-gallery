window.onload = function() {
  const images = document.querySelectorAll(".images img");
  let i = 0;

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      i = (i + 1) % images.length;
      upDate(images[i]);
    }
  });

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', function() {
      upDate(this);
    });
    images[i].addEventListener('mouseout', function() {
      unDo();
    });
    images[i].addEventListener('focus', function() {
      upDate(this);
    });
    images[i].addEventListener('blur', function() {
      unDo();
    });
  }
  function upDate(previewPic) {
    console.log(previewPic.src);
    document.querySelector("#image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.querySelector("#image").innerHTML = previewPic.alt;
  }
  function unDo() {
    document.querySelector("#image").style.backgroundImage = "none";
    document.querySelector("#image").innerHTML = "Hover over an image to display it here";
  }
};

