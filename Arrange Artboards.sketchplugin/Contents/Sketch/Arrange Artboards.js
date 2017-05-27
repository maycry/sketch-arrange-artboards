// Arrange Artboards Plugin
/*
  Author: Ken Moore
  Layout all artboards neatly in a grid with user-specified number of rows.
*/

var arrangeArtboards = function(context) {
  // set doc and selection to work around the Sketch 3.4 - 3.4.2 bug
  // where plugins often target a non-foreground document
  var doc = NSDocumentController.sharedDocumentController().currentDocument() || NSDocumentController.sharedDocumentController().documents().firstObject()

  var page = [doc currentPage];
  var artboards = [page artboards];
  var count = [artboards count];
  var x = 0;
  var y = 0;

  for (var i = count-1; i >= 0; i--) {
    var artboard = [artboards objectAtIndex: i];
    var frame = [artboard frame];

    frame.x = x;
    frame.y = y;

    x += [frame width] + 100;
  }
}
