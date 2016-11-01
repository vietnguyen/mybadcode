const ljf = require( "load-json-file" );
const wjf = require( "write-json-file" );

const oul3 = ljf.sync( "./data/vnProv.json" );
var o={features:[]
};


oul3.features.forEach(function(features){
	///change the uid to region north JzKStMojAGA, central SgkhNupCR4x, highland bJ55F4lb3WJ, south T6shP0GyRuQ
  if(features.properties.parent=='T6shP0GyRuQ'){
   console.log(features.id);
    o.features.push(features);

  }
});
/// change the outputfile name based on the region
wjf.sync( "./data/southregionmap.json", o, {indent: 2} );