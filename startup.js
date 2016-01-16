/**
 * Created by jaime on 16/01/2016.
 */
if ( Meteor.isServer){
    Meteor.startup( () => {

        if( !Images.findOne() ){
            Images.insert(
                {
                    img_src : "cav.jpg",
                    img_alt : "lannisters always paid their debts, yep"
                }
            );
            Images.insert(
            {
                img_src : "ali.jpg",
                    img_alt : "alita is hot"
            }
            );
            Images.insert(
            {
                img_src : "crim.jpg",
                    img_alt : "crimson king"
            }
            );
            Images.insert(
            {
                img_src : "dwarf.jpg",
                    img_alt : "bleroooooooooooo"
            }
            );
            Images.insert(
            {
                img_src : "goat.jpg",
                    img_alt : "puta cabra"
            }
            );
            Images.insert(
            {
                img_src : "scp.jpg",
                    img_alt : "don't blink"
            }
            );
            Images.insert(
            {
                img_src : "smt.jpg",
                    img_alt : "yellow king"
            }
            );
        } else {
            console.log("startup.js says: " + Images.find().count() );
        }
    });
}