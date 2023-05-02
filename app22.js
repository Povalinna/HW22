function createTable(cols,rows){

let tb = document.createElement('table');

for (let nr = 0; nr<rows; nr++) {

    let row = document.createElement('tr')

    for (let nc = 0; nc<cols; nc++) {

        let col = document.createElement((nr==0 || nc==0)? 'th' : 'td')

        col.textContent = (nr + 1)*(nc+1);

        row.append(col);      

    }

    tb.append(row);

}

document.getElementById("tableS").append(tb);
}
createTable(10,10);
