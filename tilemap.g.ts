// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010202020202010101010101010101010102010101010101010101010101010101020104040404040101010101010102010201040101010101010202020202020102010404040404010201010101010101020104010101010103030303030203010201040109010108010101010101030102010401010202010105060101010307010104010101020101010101010103010404040401010201010103030303030101010104010102010101010101010104040401040101020201030303030301010104040404010101010301010103030301040101010101010103010101010101010101010101010103030101010101030303030301010101`, img`
. . . . . . . . 2 2 2 2 2 . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . 2 2 2 2 2 . 
. . . . . . 2 . 2 . 2 . . . . . 
. 2 2 2 2 2 2 . 2 . 2 2 2 2 2 . 
2 . . . . . . . 2 . 2 . . . . . 
2 2 2 2 2 2 2 . 2 . 2 . . . . . 
. . . . . . 2 . 2 . 2 . . 2 2 . 
. . . . . . 2 . . . 2 . . . 2 . 
. . . . . . 2 . 2 2 2 . . . 2 . 
. . 2 2 2 2 2 . . . . 2 . . 2 . 
. . . . . . . 2 2 2 . 2 . . 2 2 
. 2 2 2 2 2 . . . 2 2 2 2 . . . 
. 2 . . . 2 2 2 . 2 . . . . . . 
. 2 . . . . . . . . . . . . . . 
2 2 . . . . . 2 2 2 2 2 . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorDarkDiamond,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile6,myTiles.tile7,tiles.util.arrow3,tiles.util.arrow6,tiles.util.arrow7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
