Images = new  Mongo.Collection("images");

if (Meteor.isClient) {

    Template.images.helpers({images:Images.find()});

    Template.images.events({

        'click .js-image': event =>{
            alert(event.target.alt);
            $(event.target).css("width","50px");

        },
        'click .js-del-image': function () {
            let image_id = this._id;
            console.log("image_share.js says: Bond  " + image_id);
            Images.remove({"_id":image_id});
        }
    });
}

if (Meteor.isServer) {

}
