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