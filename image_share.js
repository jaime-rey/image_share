if (Meteor.isClient) {
    let img_data = [
        {
            img_src : "cav.jpg",
            img_alt : "lannisters always paid their debts"
        },
        {
            img_src : "ali.jpg",
            img_alt : "alita is hot"
        },
        {
            img_src : "crim.jpg",
            img_alt : "crimson king"
        },
        {
            img_src : "dwarf.jpg",
            img_alt : "bleroooooooooooo"
        },
        {
            img_src : "goat.jpg",
            img_alt : "puta cabra"
        },
        {
            img_src : "scp.jpg",
            img_alt : "don't blink"
        },
        {
            img_src : "smt.jpg",
            img_alt : "yellow king"
        },
]
    Template.images.helpers({images:img_data});

    Template.images.events({

        'click .js-image': event =>{
            alert(event.target.alt);
            $(event.target).css("width","50px");

        }
    });
}

if (Meteor.isServer) {

}

console.log("where am I running");
