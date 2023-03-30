window.addEventListener('load', () => {

	const form = document.querySelector("#todo-form");
	const input = document.querySelector("#todo-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		//adding content div
		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');
		task_el.appendChild(task_content_el);

		//adding input to show todo tasks
		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		//adding actions div
		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		//adding done button/icon
		const task_done_el = document.createElement('button');
		task_done_el.classList.add('done');
		task_done_el.innerText = '\u2714';
		
		//adding edit button/icon
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = '\u270E';

		//adding delete button/icon
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = '\u00D7';

		//adding star button/icon
		const task_up_el = document.createElement('button');
		task_up_el.classList.add('moveUp');
		task_up_el.innerText = '\u2605';

		//Appending all the buttons/icons in the ui
		task_actions_el.appendChild(task_done_el);
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_up_el);

		task_el.appendChild(task_actions_el);
		list_el.appendChild(task_el);

		input.value = '';

		//adding class 'completed' on click on done icon
		task_done_el.addEventListener('click', (e) => {
			task_done_el.innerText = "\u2714";
			task_input_el.classList.add('completed');
		});

		//changing edit/save based on innerText and removing readonly if its in edit
		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "\u270E") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "\u270E";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		//removechild on click on delete
		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});

		//move node to top on click on star
		task_up_el.addEventListener('click', (e) => {
			task_up_el.innerText = "\u2b50";
			list_el.prepend(task_el);
		});

	});
});