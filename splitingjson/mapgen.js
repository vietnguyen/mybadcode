const ljf = require( "load-json-file" );
const wjf = require( "write-json-file" );

const oul3 = ljf.sync( "./data/vnProv.json" );


const regions = [
    {
        name: "North",
        id : "JzKStMojAGA",
    },
    {
        name:"Central",
        id: "SgkhNupCR4x"
    },
    {
        name:"Highland",
        id:"bJ55F4lb3WJ"
    },
    {
        name:"South",
        id:"T6shP0GyRuQ"
    }
];


const filterOuByRegion = (oul, region) => {
    let listOu = {};
    listOu.features = oul.features.filter( o => o.properties.parent === region.id );
    return listOu;
};

const exportOuByRegions = (oul, regions) => {
    regions.forEach( r => {
        wjf.sync( `./data/${r.name}RegionMap.json`, filterOuByRegion( oul, r ), {indent: 2} );
    });
}

exportOuByRegions(oul3,regions);
