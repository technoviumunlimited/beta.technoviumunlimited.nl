var firebaseConfig = {
	apiKey: "AIzaSyDT3GaLZE7ItE8glSYIaNd-XNkzIm_V9W4",
	authDomain: "technoviumunlimited.firebaseapp.com",
	projectId: "technoviumunlimited",
	storageBucket: "technoviumunlimited.appspot.com",
	messagingSenderId: "887618065616",
	appId: "1:887618065616:web:8546ca383b8c7fb9857ad5"
};

firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();

	
$(document).ready(function(){
	$("#loginref").click(function(){
		$("#login").show()
		$('#sign').hide();
	})
	$("#signupref").click(function(){
		$("#sign").show()
		$('#login').hide();
	})

    $('#loginModalButton').on( "click", function() {
		console.log("loginModal");
		$('#loginModal').modal('show');
		  $(function () {
			$('[data-toggle="tooltip"]').tooltip()
		  })
	  }); 
		



    $('#signup-s').click(function(){
      var email=$('#email-s').val()
      var password=$('#password-s').val()
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
});
    })
    $('#login-l').click(function(){
      var email=$('#email-l').val()
      var password=$('#password-l').val()
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert(errorMessage);
});
    })

firebase.auth().onAuthStateChanged(function(user){
	console.log(user);
	if(user){
		getIdTokenRefreshed();
		$('#sign').hide()
		$('#login').hide()
		$('#logged-in').show();
	} else {
		console.log('not logged in');
	}
})

const getIdTokenRefreshed = async () => {
	try {
	  const user = firebase.auth().currentUser
	  if (user) {
		const token = await user.getIdToken(true)
		console.log(`Token: ${token}`)
		return token
	  } else {
		console.log("No user is logged in")
	  }
	} catch (e) {
	  console.log(`Something went wrong: ${e}`)
	}
  }

$('#logout').click(function(){	
firebase.auth().signOut().then(function() {
    $('#login').show();
    $('#sign').hide();
    $('#logged-in').hide();
}).catch(function(error) {
  // An error happened.
});
})
  })