class Roulette {
	constructor(inTitle, inDescrip, inResults = []) {
		this.isRoulette = true;
		// Used for the recursive echoResult function to ascertain if a result is itself a Roulette, or if we have arrived 'at the bottom' so to speak.
		
		this.title = inTitle; // The title of the roulette. It might be a task, or a list of tasks (or even a list of lists of tasks).
		this.descrip = inDescrip; // A brief description, perhaps with additional instructions.
		
		this.results = inResults;
		// Results should be added using an 'add' function rather than constructor parameters.
		// However, there is also an option for plugging it in via constructor. I think.
	}
	// End of constructor method
	
	addResult(inResult) {
		this.results.push(inResult);
	}
	// End of addResult function, for adding items to the array of possible results.
	// This is done over constructor parameters because it is likely a nested array, 
	// and this is more readable and less confusing to my walnut-sized brain.
	
	getResult() {
		var item = this.results[0];
		console.log("getResult(): var item = " + item);
		
		var dice = 0;
		var output = {
			outTitle: this.title,
			outDescrip: this.descrip,
			outResults: [],
			outEcho: this.echoResult.bind(this)
			};
		
		if(item.isRoulette) {
			console.log("This Roulette has nested Roulettes. Starting recursion...");
			
			dice = Math.floor(Math.random() * this.results.length);
			console.log("Choosing result for " + this.title + ": " + dice + " out of " + this.results.length);
			
			item = this.results[dice];
			output = item.getResult();
		}
		else {
			console.log("End result found: " + this.title);
			for (var i = 0; i < this.results.length; i++) {
				item = this.results[i];
				dice = Math.floor(Math.random() * item.length);
				console.log("Choosing result for " + this.title + ": " + dice + " out of " + item.length + ": " + item[dice]);
				
				output.outResults.push(item[dice]);
			}
		}
		console.log("getResult() returns: " + output.outResults);
		return output;
	}
	// End of getResult, used to choose possible results randomly.
	// Intended to function recursively if the results themselves are also Roulettes, getting a random 'deepest' result.
	
	echoResult() {
		var output = this.getResult();
		console.log("echoResult() received: " + output);
		
		var HTMLtitle = document.createElement("h2");
		HTMLtitle.appendChild(document.createTextNode(output.outTitle));
		
		var HTMLdescrip = document.createElement("p");
		HTMLdescrip.innerHTML = output.outDescrip;
		//HTMLdescrip.appendChild(document.createTextNode(output.outDescrip));
		
		var HTMLlist = document.createElement("ul");
		
		for(var i = 0; i < output.outResults.length; i++) {
			var HTMLitem = document.createElement("li");
			HTMLitem.appendChild(document.createTextNode(output.outResults[i]));
			
			HTMLlist.appendChild(HTMLitem);
		}
		
		var HTMLreroll = document.createElement("button");
		HTMLreroll.id = "btnReroll";
		HTMLreroll.innerHTML = "Reroll " + output.outTitle;
		HTMLreroll.addEventListener("click", output.outEcho);
		
		document.getElementById("btnReroll").replaceWith(HTMLreroll);
		
		
		var HTMLoutput = document.getElementById("output");
		while(HTMLoutput.firstElementChild != null)
			HTMLoutput.removeChild(HTMLoutput.firstElementChild);
		
		HTMLoutput.appendChild(HTMLtitle);
		HTMLoutput.appendChild(HTMLdescrip);
		HTMLoutput.appendChild(HTMLlist);
		
		/*
		var HTMLcopyButton = document.createElement("button");
		HTMLcopyButton.innerHTML = "Copy " + output.outTitle + " to clipboard";
		HTMLcopyButton.id = ("btnCopy");
		var CopyPasteOutput = "# " + output.outTitle + "\n";
		CopyPasteOutput += output.outDescrip + "\n";
		
		for(var i = 0; i < output.outResults.length; i++) {
			CopyPasteOutput += "- " + output.outResults[i] + "\n";
		}
		HTMLcopyButton.addEventListener("click", function() { 
			navigator.clipboard.writeText(btnCopy.value);
			alert("Copied to clipboard!");
		});		
		
		document.getElementById("btnCopy").replaceWith(HTMLcopyButton);
		*/
		
		// Scroll back to top.
		document.body.scrollTop = 0; // For Safari.
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
	// End of echoResult, used to format results in HTML format.

	echoHTML() {
		var output = document.createElement("div");
		// The containing element that will ultimately be passed back by whatever called this function.
		
		var HTMLtitle = document.createElement("button");
		HTMLtitle.appendChild(document.createTextNode(this.title));
		HTMLtitle.title = "View " + this.title;
		// Creates a button that will be clickable to toggle the content.

		var HTMLcontent = document.createElement("span");
		HTMLcontent.classList.toggle("content-off");
		// Used to seperate the content from the button, which might or might not be visible.
		
		HTMLtitle.addEventListener("click", function(){
			HTMLcontent.classList.toggle("content-off");
		});
		
		var HTMLdescrip = document.createElement("p");
		HTMLdescrip.innerHTML = this.descrip;
		//HTMLdescrip.appendChild(document.createTextNode(this.descrip));
		// Creates a description of the roulette, along with suggested clarifying points Seth may ask about.
		
		var HTMLresults = document.createElement("ul");
		// The possible results will go in this ordered list.
		
		this.results.forEach(CreateListItems);
		function CreateListItems(List) {
			// For each List item, do the following:
			var Result = document.createElement("li");
			
			if(List.isRoulette)
				Result.appendChild(List.echoHTML()); // Get a box for the child roulette)
			else {
				var SubResult = document.createElement("ol");
				SubResult.classList.add("ordered-list");
				// Create empty ordered list.
				
				for(var i=0; i<List.length; i++) {
					var ListItem = document.createElement("li");
					
					ListItem.appendChild(document.createTextNode(List[i])); 
					// Write out the list item
					
					SubResult.appendChild(ListItem);
				}
				// For each List item, add to ordered list.
				
				Result.appendChild(SubResult);
				Result.classList.add("greenbox");
			}
			// End of If/Else (recursion check)
			
			HTMLresults.appendChild(Result);
		}
		// End of forEach function for creating list items.
		
		
		var HTMLroll = document.createElement("button");
		HTMLroll.classList.add("roll-button");
		HTMLroll.innerHTML = "Roll";
		HTMLroll.title = "Roll for " + this.title;
		
		/*
		
		var HTMLreroll = document.createElement("button");
		HTMLreroll.id = "btnReroll";
		HTMLreroll.innerHTML = "Reroll " + output.outTitle;
		HTMLreroll.addEventListener("click", output.outEcho);
		*/
		
		HTMLroll.addEventListener("click", this.echoResult.bind(this));
		// This button can be used to roll individual tasks, instead of all of them at once.

		HTMLcontent.appendChild(HTMLdescrip);
		HTMLcontent.appendChild(HTMLresults);
		
		output.appendChild(HTMLtitle);
		output.appendChild(HTMLroll);
		output.appendChild(HTMLcontent);
		
		return output;
	}
	// End of echoHTML, used to get an HTML block describing the task.
	// Like echoResult, functions recursively to create 'sub blocks' within itself.

}
// End of Roulette class
