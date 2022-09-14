window.addEventListener('load', (event) => {
    var nav = document.querySelector("nav");
    if(nav != null){
      var elements = nav.querySelectorAll("div.connector");
      elements.forEach(function(connector){
          var a = window.getComputedStyle(nav).getPropertyValue('--offsetCenter');
          var b = window.getComputedStyle(nav).getPropertyValue('--radius');
          var button = connector.nextElementSibling
          var angle = window.getComputedStyle(button).getPropertyValue('--angle');
          
          var gamma = 180 - Math.abs(getValue(angle))
          var c = alKashi_c_edge(getValue(a),getValue(b),degrees_to_radians(gamma))
          var beta = alKashi_beta_angle(getValue(a),getValue(b),c)
          var betaDegree = radians_to_degrees(beta)

          var heightConnector = window.getComputedStyle(connector).getPropertyValue('--height');
          
          if (angleOutSide_0_PI(getValue(angle))){
            betaDegree = -betaDegree
          }

          var translation = getValue(heightConnector)/2
          var menuWidth = window.getComputedStyle(nav).getPropertyValue('--menuWidth');
          var buttonWidth = window.getComputedStyle(button).getPropertyValue('--buttonWidth');
          var finalTranslation = getValue(menuWidth)/2 + (c-getValue(menuWidth)/2 - getValue(buttonWidth)/2)/2
          var transformation = "rotate(" + betaDegree + "deg) translateY(-"+ translation + getUnit(heightConnector)+") translateX("+ finalTranslation + getUnit(menuWidth) +")"
          
          connector.style.transform = transformation
          
          var borderSize = window.getComputedStyle(connector).getPropertyValue('--borderSize');
          connector.style.setProperty("--width",c - getValue(menuWidth)/2 -getValue(buttonWidth)/2 + 2*getValue(borderSize) + getUnit(menuWidth));
        });
    }
  });

function angleOutSide_0_PI(angle){
  var radian = degrees_to_radians(angle)
  var normalizedRadian = radian % (2*Math.PI)
  if (0 <= normalizedRadian && normalizedRadian <= Math.PI ) return false
  return true
}

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
  return parameter.match(/(-?\d+)([a-zA-Z]+)/)[1]
}

function getUnit(parameter){
  return parameter.match(/(\d+)([a-zA-Z]+)/)[2]
}