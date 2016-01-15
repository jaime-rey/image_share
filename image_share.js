if (Meteor.isClient) {

  console.log("I am the Client");

  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {

    console.log("I am the Server");

  Meteor.startup(function () {
    // code to run on server at startup
  });
}
