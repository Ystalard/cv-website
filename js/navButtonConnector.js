window.addEventListener('load', (event) => {
    var nav = document.querySelector("nav");
    if(nav != null){
      var rightElements = nav.querySelectorAll("div.rightConnector");
      rightElements.forEach(function(rightConnector){
          var a = window.getComputedStyle(nav).getPropertyValue('--offsetCenter');
          var b = window.getComputedStyle(nav).getPropertyValue('--radius');
          var angle = window.getComputedStyle(nav).getPropertyValue('--angle');
          var heightConnector = window.getComputedStyle(rightConnector).getPropertyValue('--height');
          var gamma = 180 - Math.abs(getValue(angle))
          var c = alKashi_c_edge(getValue(a),getValue(b),degrees_to_radians(gamma))
          var beta = alKashi_beta_angle(getValue(a),getValue(b),c)
          var betaDegree = radians_to_degrees(beta)
          var translation = getValue(heightConnector)/2
          var transformation = "rotate(" + betaDegree + "deg) translateY(-"+ translation + getUnit(heightConnector)+") translateX("+ c/2 +"px)"
          rightConnector.style.width = "48px";
          rightConnector.style.transform = transformation
          
          // rightConnector.clientWidth = alKashi(a.substring(1,a.length -2),b.substring(1,b.length -2),angle.substring(1,angle.length -3));
        });
    }
  });

function alKashi_c_edge(a,b,gamma){
    return Math.sqrt(a*a + b*b - 2*a*b*Math.cos(gamma));
}

function alKashi_beta_angle(a,b,c){
  return Math.acos((a*a + c*c - b*b)/(2*a*c));
}

function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function radians_to_degrees(radians){
  var pi = Math.PI
  return radians * (180/pi)
}

function getValue(parameter){
  return parameter.match(/(\d+)([a-zA-Z]+)/)[1]
}

function getUnit(parameter){
  return parameter.match(/(\d+)([a-zA-Z]+)/)[2]
}