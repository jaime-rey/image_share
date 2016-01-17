Images = new  Mongo.Collection("images");

if (Meteor.isClient) {

    Template.images.helpers({images:
        Images.find( {}, {sort: {createdOn:-1, rating:-1}})
    });

    Template.images.events({

        'click .js-image': event =>{
            alert(event.target.alt);
            $(event.target).css("width","50px");

        },
        'click .js-del-image': function () {
            let image_id = this._id;
            $("#"+image_id).hide('slow', () =>{
                Images.remove({"_id":image_id});
            });
        },
        'click .js-rate-image': function (event) {
            let rating = $(event.currentTarget).data("userrating");

            var image_id = this.imageId;

            Images.update({_id: image_id},
                          {$set: {rating:rating}});
        },
        'click .js-show-image-form': function(event){
            $("#image_add_form").modal('show');
        }
    });

    Template.image_add_form.events({
        'submit .js-add-image' : function(event){
            var img_src, img_alt;
            img_src = event.target.img_src.value;
            img_alt = event.target.img_alt.value;
            Images.insert({
                img_src:img_src,
                img_alt:img_alt,
                createdOn:new Date()
            });
            $("#image_add_form").modal('hide');
            return false;
        }
    });
}

if (Meteor.isServer) {

}
