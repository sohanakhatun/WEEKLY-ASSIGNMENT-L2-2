document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  const textSide = document.querySelector(".text-side");
  const slider = document.getElementById("slider");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  let currentIndex = 0;

  // Sample JSON data
  const jsonData = {
    carousel: [
      {
        text1: "Exquisite Watches",
        text2: "Gold Luxury, Choose Us",
        desc: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        price: "$499.99",
        image: "assets/Watches.png",
        ambient_colors: ["#F4A764", "#FFDEC2"],
        icons: [
          "assets/Vector (1).png",
          "assets/youtube.png",
          "assets/Vector.png",
        ],
      },
      {
        text1: "Dainty Timepieces",
        text2: "Silver Luxury, Choose Us",

        desc: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        price: "$469.00",
        image: "assets/Watches (1).png",
        ambient_colors: ["#ADB0B0", "#E1E1E1"],
        icons: [
          "assets/Vector (1).png",
          "assets/youtube.png",
          "assets/Vector.png",
        ],
      },
      {
        text1: "Elegant Timepieces ",
        text2: "Choose Luxury, Choose Us",

        desc: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        price: "$529.00",
        image: "assets/Watches (2).png",
        ambient_colors: ["#30A357", "#75E39A"],
        icons: [
          "assets/Vector (1).png",
          "assets/youtube.png",
          "assets/Vector.png",
        ],
      },
      {
        text1: "Refined Timepieces",
        text2: "Choose Luxury, Choose Us",

        desc: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        price: "$599.00",
        image: "assets/Watches (3).png",
        ambient_colors: ["#F24F4F", "#FFA895"],
        icons: [
          "assets/Vector.png",
          "assets/Vector (1).png",
          "assets/youtube.png",
        ],
      },
    ],
  };

  function updateBackgroundGradient() {
    const currentData = jsonData.carousel[currentIndex];
    const gradient = `linear-gradient(to bottom, ${currentData.ambient_colors[0]}, ${currentData.ambient_colors[1]})`;
    body.style.background = gradient;
  }

  function updateNavbar() {
    const currentData = jsonData.carousel[currentIndex];
  }

  function updateTextSide() {
    const currentData = jsonData.carousel[currentIndex];
    let text = currentData.text2;
    let chooseUsIndex = text.indexOf("Choose Us");
    let firstPart = text.substring(0, chooseUsIndex);
    let chooseUsPart = text.substring(chooseUsIndex, chooseUsIndex + 9);
    let lastPart = text.substring(chooseUsIndex + 9);

    let coloredText = `${firstPart}<span style="color: black;">${chooseUsPart}</span>${lastPart}`;
    textSide.innerHTML = `
    <h2 class="sofia-font">${currentData.text1}</h2>
    <h2 class="sofia-font">${coloredText}</h2>
  
    <p>${currentData.desc}</p>
    <p class="price">${currentData.price}</p>
    <div class="icons">  ${currentData.icons
      .map((icon) => {
        return `<div class="icons-item">
          <img src="${icon}" />
      </div>`;
      })
      .join("")}</div>`;
  }

  function updateSlider() {
    slider.innerHTML = "";
    const currentData = jsonData.carousel[currentIndex];
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.innerHTML = `
      <img src="${currentData.image}" alt="${currentData.text1}" class="watch-img">
    `;
    slider.appendChild(slide);
  }

  function showPrevSlide() {
    currentIndex =
      currentIndex === 0 ? jsonData.carousel.length - 1 : currentIndex - 1;
    updateSlider();
    updateNavbar();
    updateTextSide();
    updateBackgroundGradient();
  }

  function showNextSlide() {
    currentIndex =
      currentIndex === jsonData.carousel.length - 1 ? 0 : currentIndex + 1;
    updateSlider();
    updateNavbar();
    updateTextSide();
    updateBackgroundGradient();
  }

  prevBtn.addEventListener("click", showPrevSlide);
  nextBtn.addEventListener("click", showNextSlide);

  updateBackgroundGradient();
  updateNavbar();
  updateTextSide();
  updateSlider();
});

document.addEventListener("DOMContentLoaded", function () {
  const watchImg = document.querySelector(".watch-img");
  watchImg.addEventListener("load", function () {
    watchImg.style.animation = "none";
  });
});
