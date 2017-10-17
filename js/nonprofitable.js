// Rebuild two nav links for prettier scrolling when at the homepage.

function checkHome () {
    return location.pathname == "/";    
}

//var is_root = location.pathname == "/"; //Equals true if we're at the root

function removeCharacterAtIndex(value, index) {
  return value.substring(0, index) + value.substring(index + 1);
}

if (checkHome()) {
    $( ".navbar-nav .page-scroll:eq( 0 )").attr( "href", "#work");
    $( ".navbar-nav .page-scroll:eq( 1 )").attr( "href", "#writing");
}

// Testing outut:
// var test = $( ".navbar-nav .page-scroll").attr( "href" );
// console.log(test);

//Remove big header cover image and links for post listing pages that aren't the homepage. 
//Only remove .header-content if it is the parent of a .header-content-inner. 
//Remove unused body "front" class. 

if (!checkHome()) {
    $(".header-content .header-content-inner").parent().remove();
    $("body").removeClass("front");
}