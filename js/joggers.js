var bullshit = [];
//Specify the propaganda phrases to be cleaned from the visited site:
bullshit = [
	"BlackLivesMatter",
	"Black Lives Matter"
	];

for(var i=0; i<bullshit.length;i++){

knee(bullshit[i]);
	
}

function knee(target){
		console.log("Working: "+`"${target}"`);
	$(`div:contains('${target}')`).html("[PROPAGANDA REMOVED LOL. FUCK JOGGERS.]");
}
