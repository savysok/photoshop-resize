var defaultRulerUnits = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;
var defaultTypeUnits = preferences.TypeUnits;
preferences.typeUnits = TypeUnits.PIXELS
var sb = activeDocument.selection.bounds;
var dpi = 300;
var dimX = sb[2]-sb[0];
var Xperc = dimX/400; //change the "400" to whatever dimension (in pixels) you want
var Width = activeDocument.width;
var Height = activeDocument.height;
var NewWidth = Width/Xperc;
var NewHeight = Height/Xperc;
activeDocument.resizeImage(NewWidth, NewHeight,dpi,ResampleMethod.BICUBIC);
preferences.rulerUnits = defaultRulerUnits;
preferences.TypeUnits = defaultTypeUnits;
