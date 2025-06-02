document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-image");
  let currentIndex = 0;

  function showNextImage() {
    // 現在の画像を非表示に
    images[currentIndex].classList.remove("active");

    // 次のインデックスを計算（ループ）
    currentIndex = (currentIndex + 1) % images.length;

    // 次の画像を表示
    images[currentIndex].classList.add("active");
  }

  // 5秒ごとに画像を切り替える
  setInterval(showNextImage, 5000);
});