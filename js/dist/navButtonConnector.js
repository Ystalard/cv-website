window.addEventListener('load', function (event) {
    var nav = document.querySelector("nav");
    if (nav != null) {
        var rightElements = nav.querySelectorAll("div.rightConnector");
        rightElements.forEach(function (rightConnector) {
            var a = window.getComputedStyle(nav).getPropertyValue('--offsetCenter');
            var b = window.getComputedStyle(nav).getPropertyValue('--radius');
            var angle = window.getComputedStyle(nav).getPropertyValue('--angle');
            rightConnector.style.transform = "translate(40em)";
            // rightConnector.clientWidth = alKashi(a.substring(1,a.length -2),b.substring(1,b.length -2),angle.substring(1,angle.length -3));
        });
    }
});
function alKashi_b_edge(a, c, beta) {
    return Math.sqrt(a * a + c * c - 2 * a * c * Math.cos(beta));
}
function alKashi_alpha_angle(a, b, c) {
    return Math.acos((b * b + c * c - a * a) / (b * c));
}
function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}
function getValue(property) {
    return property.search;
}
function getUnit(property) {
}
