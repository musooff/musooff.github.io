
var selectProjects = function(tab, category){

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("project-contents");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("work-menu")[0];
    var spans = tablinks.getElementsByTagName("span");
    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].getElementsByTagName("a")[0].className = ""
    }

	document.getElementById(category).style.display = "block";
    tab.currentTarget.className = "active";
};

var sendCustomEmail = function() {
    var name = document.getElementById('input-name').value;
    var email = document.getElementById('input-email').value;
    var subject = document.getElementById('input-subject').value;
    var message = document.getElementById('input-message').value;

    var link = "mailto:musooff@gmail.com"
         + "?cc=" + email
         + "&subject=" + subject
         + "&body=" + message
         + "\n\nSincerely,\n"+name
    ;
    
    window.open(link)

}