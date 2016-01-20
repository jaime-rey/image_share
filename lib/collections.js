/**
 * Created by jaime on 19/01/2016.
 */

Images = new  Mongo.Collection("images");


//setup security on Imagas collection
Images.allow({

    insert: ( userId, doc ) => {
        console.log("testing security on image insert");
        if ( Meteor.user() ){
            console.log( doc );
            if ( userId != doc.createdBy ) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    },

    remove: ( userId, doc ) => {
        if ( Meteor.user() ){
            console.log( doc );
            if ( userId != doc.createdBy ) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

});
