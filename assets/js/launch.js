//window.location.href = 'tu://';
//setTimeout("window.location = 'http://hastrk.com/serve?action=click&publisher_id=1&site_id=2';", 1000);
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

firebase.auth().onAuthStateChanged(function(user){
	console.log(user);
	if(user){
		console.log("logged in");
		getIdTokenRefreshed();
	} else {
		console.log('not logged in');
	}
})

const getIdTokenRefreshed = async () => {
	try {
	  const user = firebase.auth().currentUser
	  if (user) {
		const token = await user.getIdToken(true)
		game_id = "not_yet_implemented"; //TODO
		console.log(`Token: ${token}`)
		window.location.href = "technoviumunlimitedstart:/gameid=" + game_id + " /token=" + token;
		return token
	  } else {
		console.log("No user is logged in")
	  }
	} catch (e) {
	  console.log(`Something went wrong: ${e}`)
	}
  }


	
	///setTimeout("window.location = 'http://hastrk.com/serve?action=click&publisher_id=1&site_id=2';", 1000);

