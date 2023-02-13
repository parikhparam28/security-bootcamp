const data = [
    {
        "title" : "Title Name",
        "description" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates expedita ipsam facere in, porro minus ea, est tempore nisi tenetur deleniti, commodi sed eum optio? Dolores quidem accusamus ut fuga!",
    },
    {
        "title" : "Title Name",
        "description" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates expedita ipsam facere in, porro minus ea, est tempore nisi tenetur deleniti, commodi sed eum optio? Dolores quidem accusamus ut fuga!",
    }
]

 document.getElementById('viewnotesId').innerHTML = data.map(notesdata => {
   return `<div class="notes">
        <div class="top-block">
            <div class="title">
                ${notesdata.title}
            </div>
        </div>
        <div class="bottom-block">
            ${notesdata.description}
        </div>
    </div>`
}).join('')














