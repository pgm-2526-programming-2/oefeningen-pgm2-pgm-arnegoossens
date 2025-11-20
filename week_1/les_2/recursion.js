const menu = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Explore",
        path: '/explore',
        subpages: [
            {
                name: "Awards",
                path: '/awards',
                subpages: [
                    {
                        name: "Nominees",
                        path: '/nominees'
                    },
                    {
                        name: "Sites of the day",
                        path: '/sotd'
                    }
                ]
            },
            {
                name: "Blog",
                path: 'blog'
            }
        ]
    }
]

// Oefening:
// Log al de pagina's en hun path in de console.
// 1. ZONDER RECURSIE

for (const item of menu) {
    console.log(item.name + " " + item.path);

    if (item.subpages){
        for (const innerItem of item.subpages) {
            console.log(innerItem.name + " " + innerItem.path);

            if (innerItem.subpages){
                for (const evenMoreInnerItem of innerItem.subpages) {
                    console.log(evenMoreInnerItem.name + " " + evenMoreInnerItem.path);
                }
            }

        }
    }
    
}

// 2. MET RECURSIE
function createMenu(menuArr) {
    if(menuArr === undefined || menuArr.length === 0){
        return;
    }

    for (const item of menuArr) {
        console.log(item.name + " " + item.path);
        createMenu(item.subpages);
    }
}

createMenu(menu);