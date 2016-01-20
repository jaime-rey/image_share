/**
 * Created by jaime on 19/01/2016.
 */
console.log("running on the client");

Session.set("imageLimit", 8);

lastScrollTop = 0;

$( window ).scroll( event =>{


    if($(window).scrollTop()+$(window).height()>$(document).height()-100){
        var scrollTop = $(this).scrollTop();

        if(scrollTop > lastScrollTop){
            Session.set( "imageLimit", Session.get( "imageLimit" ) + 4);
        }
        lastScrollTop =scrollTop;
    }

});

Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});

Template.body.helpers({
    username:()=>{
        if (Meteor.user()){
            return Meteor.user().username;
        }else{
            return "No user logged";
        }
    }
});

Template.images.helpers({
    images:()=> {
        if(Session.get("userFilter")){
            return Images.find({createdBy:Session.get("userFilter")}, {sort: {createdOn: -1, rating: -1}});
        }else {
            return Images.find({}, {sort: {createdOn: -1, rating: -1}, limit: Session.get("imageLimit")});
        }
    },
    filtering_images:() =>{
        if(Session.get("userFilter")){
            return true;
        }else{
            return false;
        }
    },
    getUser: user_id => {
        let user = Meteor.users.findOne({_id: user_id});
        if (user){
            return user.username;
        } else {
            return "anon";
        }
    },
    getFilterUser:()=>{
        if(Session.get("userFilter")){
            let user = Meteor.users.findOne({_id:Session.get("userFilter")});
            return user.username;
        }else{
            return false;
        }
    }
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
    },
    'click .js-set-image-filter':function(event){
        Session.set("userFilter", this.createdBy);
    },
    'click .js-unset-image-filter':() => {
        Session.set("userFilter", undefined);
    }
});

Template.image_add_form.events({
    'submit .js-add-image' : function(event){
        var img_src, img_alt;
        img_src = event.target.img_src.value;
        img_alt = event.target.img_alt.value;
        if(Meteor.user()) {
            Images.insert({
                img_src: img_src,
                img_alt: img_alt,
                createdOn: new Date(),
                createdBy: Meteor.user()._id
            });
        }
        $("#image_add_form").modal('hide');
        return false;
    }
});