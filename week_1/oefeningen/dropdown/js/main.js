const dropdownMenu = {
    label: "Dropdown",
    items: [
        "Item 1",
        "Item 2",
        {
        label: "Submenu 1",
        items: [
            "Subitem 1.1",
            "Subitem 1.2",
            {
            label: "Sub-submenu 1",
            items: ["Sub-subitem 1.1", "Sub-subitem 1.2", "Sub-subitem 1.3"],
            },
        ],
        },
        "Item 3",
        {
        label: "Submenu 2",
        items: ["Subitem 2.1", "Subitem 2.2"],
        },
    ],
};

const $dropdownContainer = document.getElementById("dropdown-container");


function generateDropdownHTML(dropdown){
    if(dropdown === undefined || dropdown.length === 0) {
        return;
    }
    let html = "";

    html += `<h3>${dropdown.label}</h3>
    <ul>`;
    for (const item of dropdown.items) {
        if (typeof item === "string") {
            html += `<li>${item}</li>
            `;
        } else {
            console.log(item);
            html += `<li>${generateDropdownHTML(item)}</li>
            `;
        }
    }
    html += '</ul>';

    console.log(html);
    return html;
}

// dropdownContainer.appendChild(generateDropdownHTML(dropdownMenu));
$dropdownContainer.innerHTML = generateDropdownHTML(dropdownMenu);