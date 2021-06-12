const iconMenu = document.querySelector(".menu__icon"),
  menuBody = document.querySelector(".menu__body"),
  menuList = document.querySelector(".menu__list");
iconMenu &&
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock"),
      iconMenu.classList.toggle("_active"),
      menuBody.classList.toggle("_active"),
      menuList.classList.toggle("_active");
  });
const rowArrow = document.querySelector(".row--skills-block"),
  spoilerBlock = document.querySelector(".spoiler-wrap");
rowArrow &&
  rowArrow.addEventListener("click", function (e) {
    rowArrow.classList.toggle("_active"),
      spoilerBlock.classList.toggle("_active");
  });
const menuLinks = document.querySelectorAll(".menu-links[data-goto]");
if (menuLinks.length > 0) {
  function onMenuLinkClick(e) {
    const o = e.target;
    if (o.dataset.goto && document.querySelector(o.dataset.goto)) {
      const t =
        document.querySelector(o.dataset.goto).getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;
      iconMenu.classList.contains("_active") &&
        (document.body.classList.remove("_lock"),
        iconMenu.classList.remove("_active"),
        menuBody.classList.remove("_active"),
        menuList.classList.remove("_active")),
        window.scrollTo({ top: t, behavior: "smooth" }),
        e.preventDefault();
    }
  }
  menuLinks.forEach((e) => {
    e.addEventListener("click", onMenuLinkClick);
  });
}
