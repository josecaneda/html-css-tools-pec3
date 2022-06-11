//require('texts');
window.onload = function() {
    const bioSumNeilArmstrong = document.getElementById('biography-summary-neil-armstrong');
    const bioSumBuzzAldrin = document.getElementById('biography-summary-buzz-aldrin');
    const bioSumPeteConrad = document.getElementById('biography-summary-pete-conrad');
    const bioSumAlanLBean = document.getElementById('biography-summary-alan-l-bean');
    const bioSumAlanShepard = document.getElementById('biography-summary-alan-shepard');
    bioSumNeilArmstrong.innerHTML = biographyTextNeilArmstrong.replaceAll('<p>', '').replaceAll('</p>', '');
    bioSumBuzzAldrin.innerHTML = biographyTextBuzzAldrin.replaceAll('<p>', '').replaceAll('</p>', '');
    bioSumPeteConrad.innerHTML = biographyTextPeteConrad.replaceAll('<p>', '').replaceAll('</p>', '');
    bioSumAlanLBean.innerHTML = biographyTextAlanBean.replaceAll('<p>', '').replaceAll('</p>', '');
    bioSumAlanShepard.innerHTML = biographyTextAlanShepard.replaceAll('<p>', '').replaceAll('</p>', '');
};

//# sourceMappingURL=biographies.5f4c9fa8.js.map
