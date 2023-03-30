# TO Do List Project

This project is developed using HTML, CSS and custom JavaScript. All the functionalities are developed using pure JavaScript.
No interaction with database is involved in this project so any data added from UI will not be added temporarily though JS.

Approach to develop this is based on using minimal elements from HTML file, so index.html will only be having input box and button to add todo items and one div (with id ‘tasks’)inside which we will push all the items dynamically through JavaScript. 
Once we add a todo item and hit “Add” button, JavaScript will attach one EventListener to the submit and inside that we will be doing all the logical handling as listed below:
1. Div with class ‘task’ will be added inside ‘tasks’ div, and inside that 'task' two more divs named 'content' and 'actions' will be added through JS.
2. Inside content div we will be appending one input field which will have the task added from the main form.
3. Actions div will be having all the action items - Done, Edit, Delete, Move to Top (star).
4. Clicking on done will add one class 'completed' to the input and thgough css we will change text-decoration.
5. Edit will remove readonly and task will be available to edit, and toggeling of edit/save will happen accordingly.
6. Delete will removeChild node and that way task will be removed.
7. Move to Top (Star) - for this we added star icons and clicking on that will prepend the node to 'tasks' div, and star will be changed to yellow.
