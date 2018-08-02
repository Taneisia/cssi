function init() {
	let button= document.getElementById("button");
	button.addEventListener('click',generateMsg);
		/*Add Event Listener to button element that calls generateMsg() function*/
}

function generateMsg(){
	let word=[];
const idVal = ['NOUN','NOUNs','VERB','ADJECTIVE','PLACE'];
word[0]=document.getElementById('NOUN').value;
word[1]=document.getElementById('NOUNS').value;
word[2]=document.getElementById('VERB').value;
word[3]=document.getElementById('ADJECTIVE').value;
word[4]=document.getElementById('PLACE').value;
for(let i=0; i<idVal.length; i++)
{
	if (word[i]==''){
		word[i]=idVal[i];
	}
}

	//Create a constant array of the ids of the input textfields.*


	/*Using a for loop, populate the values array with the values of the
	 textfields*/


	let msg = `If anybody is wondering, please know that I am <strong>${word[2]}</strong> at <strong>${word[4]}</strong> without you.
	You might want to consider <strong>${word[3]}</strong> <strong>${word[0]}</strong>... then again, you always preferred
	<strong>${word[1]}</strong>.`;

	//Display the msg string in the paragraph element with id 'msg'
	document.getElementById('msg').innerHTML=msg;
}
