Pages link:  https://aengman.github.io/Test-Assignment_Project-Sports-Poll/

Elapsed time
	Roughly 10 hours, slightly more if you include planning and such.


Used tools:
	React, Javascript, CSS.
  
  
Description of what I've done:
	I've created a sports poll website that takes data from a JSON file and seperates that data into arrays of countries, then chooses one of those countries and randomly displays one of the events within that category to the user to vote on.
(notably, as this is a poll, there are no odds or other such data. It is strictly a way to gather opinions. It can of course be adapted for other uses)
The category is saved in localstorage and a new one will show up on every reload.
The events that are listed as "FINISHED" are not part of the poll but instead saved in a different location to be displayed in a "finished votes" list with the results.
When the user checks an option and confirms it, that event is then saved in an 'ongoing votes' list with the choice selected. That event is then excluded from the randomizer function that selects the event to be voted on. The user then gets a new event to vote on from the same category.
When all events in one category has been voted on no more will show up and they can all be checked in the 'ongoing votes' tab.
Country and sport and visualized with a flag and silhouette respectively in both the poll and the lists.


Excluded work:
	Ongoing votes and finished votes are both unfinished due to time constraints, but would be simple to include due to all of the data already being in the right places.
Further clarification was also planned regarding the home/away team both in text and otherwise visually as well as how to operate the application. Ultimately time contraints got in the way of this as well.
A planned feature was having a shortlist preview of sorts displaying the either most recently voted or the closest event in time in a sidebar but was cut due to time constraints.
Cleaner rendering and better sorting can be made, but was outprioritized by other things.
Wanted to dynamically render the images with a single string instead of importing each to the component in question (mainPollItem), I could however not find a solution in a reasonable time frame.
I would've liked to properly comment the work, but due to the short and temporary nature of the work I decided spend that time on writing code.
Some extra design hours would be needed to both improve the general page and iron out some of the issues that are still remaining.


Issues:
	No single thing stands out, most issues were smaller things that only accumulated to a larger time loss over time.
As an example, a sorting function returned "0" (number) as a successful query, but the function was looking for a 'true' check. As a result when a 0 was hit it counted it as 'false' and didn't run properly. 
Fixing such things was the largest overall issue.
