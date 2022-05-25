"use strict";

window.addEventListener('load', () => {

    const form = document.querySelector('#task-form');
    const input = document.querySelector('#task-input');
    const list_el = document.querySelector('#display');

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        
        const task = input.value;
        input.value = "";

        if(!task)
        {
            alert("please, fill out the task");
            return;
        }

        const el = document.createElement("div");
        el.classList.add("task-action");

        const txt = document.createElement("input");
        txt.type = "text";
        txt.classList.add("task");
        txt.setAttribute("readonly", "true");
        txt.value = task;
        
        const acts = document.createElement("div");
        acts.classList.add("actions");
        
        const edit = document.createElement("button");
        edit.innerText = "EDIT";
        edit.classList.add("edit");

        const dlt = document.createElement("button");
        dlt.innerText = "DELETE";
        dlt.classList.add("delete");
        
        acts.appendChild(edit);
        acts.appendChild(dlt);

        el.appendChild(txt);
        el.appendChild(acts);
        list_el.appendChild(el);

        edit.addEventListener('click', (e) => {
            if(e.target.innerText == "EDIT")
            {
                e.target.innerText = "SAVE";
                txt.removeAttribute("readonly");
                txt.focus();
            }
            else
            {
                txt.setAttribute("readonly","true");
                e.target.innerText = "EDIT";
            }
        });

        dlt.addEventListener('click', (e) => {
            list_el.removeChild(el);
        });
    });
});