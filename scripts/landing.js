var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point) {
                        
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0) rotate(360deg)";
    point.style.msTransform = "scaleX(1) translateY(0) rotate(360deg)";
    point.style.WebkitTransform = "scaleX(1) translateY(0) rotate(360deg)";                   
    }

var animatePoints = function(points) {
 
/*    for (i=0;i<points.length;i++){       
        revealPoint(i);                       
        } */
    forEach(points, revealPoint);
                     
}; 

window.onload = function() {
    
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
        }
    
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
    window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);   
            }
        });
    
}