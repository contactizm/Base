// Sherpaa front end engineer code test.

Thanks for completing this exercise!  The test is designed so that you should be able to
finish the primary tasks in about 1.5 hours, and then there are some extra tasks you may do if you wish. The supplementary tasks
will allow you to illustrate how you might add polish and elegance to a UI.

You may use any framework or library as you see fit.

Feel free to call or email me if you have any questions 864.680.7122 -- joey@sherpaa.com

Please work in the files I've provided for you (index.html, main.js, pseudoDb.js) and when you're finished, send the modified files
back to me as a .zip or other compressed file type.

Thanks again, have fun!!



// Overview:

- I have created a javascript constructor called DB in the file pseudoDb.js that is going to act like a database. It has 2 methods
attached to its prototype: getData and postData.

- getData 
	-- returns a json string as it would get returned from a database call

- postData 
	-- takes a parameter called "options" which should be a key/value pair for the parameter you are attempting to post
	for a given model.
	
	-- returns an object with 2 keys "options" and "response". "options" will return the same options you posted,
	while "response" will return the string "OK" or "Error", chosen randomly, and is simply designed to simulate the possibility of
	successfully or unsuccessfully attempting to post to the database.


// Primary tasks:

1) Give the database a name and a version.

2) You may use any MVC-like framework you wish, or not use a framework, to present the "clients" from the database in a list, displaying
each of the properties of each model: "first name", "last name", "email", "age" and "vip" status.

3) Add filters to the list so that you can organize and sort the collection of models by: first name, last name, age and vip status.

4) Allow a user to edit the first name of a client in the list and use postData to "post" the change to our pseudo database. Based on the
response - "OK" or "Error" - either propagate that change to the interface, or handle the error gracefully for the user.


// Supplementary tasks:

1) Visually identify the VIP=true clients using some color scheme for those clients.

2) Add a visual style for when each client row is being "hovered" over by the user's input device

3) Show the length of the collection of clients at the top or bottom of the list (eg. 1 - 8 of 8)