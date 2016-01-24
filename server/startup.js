/**
 * Created by jaime on 16/01/2016.
 */
if (Meteor.isServer){
    Meteor.startup(()=>{
        if (Images.find().count() == 0){
            for (var i=1;i<23;i++){
                Images.insert(
                    {
                        img_src:"img_"+i+".jpg",
                        img_alt:"image number "+i
                    }
                );
            }// end of for insert images
        }// end of if have no images
    });
}