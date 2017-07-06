// Rebuild two homepage nav links for prettier scrolling.

function removeCharacterAtIndex(value, index) {
  return value.substring(0, index) + value.substring(index + 1);
}

// Work link:

var input = $( ".navbar-nav .page-scroll:eq( 0 )" ).attr( "href" );
var newAnchor = (removeCharacterAtIndex(input, 0));

$( ".navbar-nav .page-scroll:eq( 0 )").attr( "href", newAnchor);

// Writing link:

input = $( ".navbar-nav .page-scroll:eq( 1 )" ).attr( "href" );
newAnchor = (removeCharacterAtIndex(input, 0));

$( ".navbar-nav .page-scroll:eq( 1 )").attr( "href", newAnchor);

var test = $( ".navbar-nav .page-scroll").attr( "href" );
console.log(test);