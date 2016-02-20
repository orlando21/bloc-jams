                 var animatePoints = function() {
                     
                    var revealPoint = function(index) {
                        
                        points[index].style.opacity = 1;
                        points[index].style.transform = "scaleX(1) translateY(0) rotate(360deg)";
                        points[index].style.msTransform = "scaleX(1) translateY(0) rotate(360deg)";
                        points[index].style.WebkitTransform = "scaleX(1) translateY(0) rotate(360deg)"; 
                        
                    }

 
                 /*var revealFirstPoint = function() {
                     points[0].style.opacity = 1;
                     points[0].style.transform = "scaleX(1) translateY(0) rotate(360deg)";
                     points[0].style.msTransform = "scaleX(1) translateY(0) rotate(360deg)";
                     points[0].style.WebkitTransform = "scaleX(1) translateY(0) rotate(360deg)";
                 };
 
                 var revealSecondPoint = function() {
                     points[1].style.opacity = 1;
                     points[1].style.transform = "scaleX(1) translateY(0) rotate(360deg)";
                     points[1].style.msTransform = "scaleX(1) translateY(0) rotate(360deg)";
                     points[1].style.WebkitTransform = "scaleX(1) translateY(0) rotate(360deg)";
                 };
 
                 var revealThirdPoint = function() {
                     points[2].style.opacity = 1;
                     points[2].style.transform = "scaleX(1) translateY(0) rotate(360deg)";
                     points[2].style.msTransform = "scaleX(1) translateY(0) rotate(360deg)";
                     points[2].style.WebkitTransform = "scaleX(1) translateY(0) rotate(360deg)";
                 };
 
                 revealFirstPoint();
                 revealSecondPoint();
                 revealThirdPoint();*/
                 
                var points = document.getElementsByClassName('point');
                     
                for (i=0;i<points.length;i++){       
                    revealPoint(i);                       
                }
            
                     
             }; 