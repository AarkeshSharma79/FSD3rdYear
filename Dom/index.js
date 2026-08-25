// root element
// const root=document.getElementById('container')
// const btn=document.getElementById('btn')
// console.log(btn+root)

// // dom tree

// const h2=document.createElement('h2')
// h2.innerHTML='Resume Builder';
// const loader=document.createElement('Hi')
// loader.innerHTML="Building...."
// const img=document.createElement('img')
// const Table=document.getElementById("tableContainer");
// let table = document.createElement("table");
// function buildResume(){
//     try{
//         root.appendChild(loader)      
//        setTimeout(()=>{
//             loader.remove()
//             root.appendChild(h2)
//         },2000)
//         img.src='./img.png'
//         img.setAttribute('height',100);
//         img.setAttribute('width',100);
//         root.appendChild(img)
// const headerRow = document.createElement("tr");   
// let headers = ["Name", "Age", "Course"];

// headers.forEach(function(header) {
//     let th = document.createElement("th");
//     th.textContent = header;
//     headerRow.appendChild(th);
// });
// table.appendChild(headerRow);
// let students = [
//     ["Aarkesh", 20, "B.Tech"],
//     ["Rahul", 21, "BCA"],
//     ["Priya", 20, "MCA"]
// ];
// students.forEach(function(student) {

//     let row = document.createElement("tr");

//     student.forEach(function(data) {

//         let td = document.createElement("td");
//         td.textContent = data;

//         row.appendChild(td);
//     });

//     table.appendChild(row);
// });
// Table.appendChild(table);







//     }catch(e){
//         console.log(e)
//         loader.innerHTML='error'
//     }
//     finally{
//         console.log('hello Boss');
//             // root.appendChild(loader)   
            
//     }
//     // alert("heyy...");

// }
// btn.addEventListener('click',buildResume)


// const root = document.getElementById('container');
// const btn = document.getElementById('btn');

// console.log(btn, root);

// // DOM tree

// const h2 = document.createElement('h2');
// h2.innerHTML = 'Resume Builder';

// const loader = document.createElement('div');
// loader.innerHTML = "Building....";

// const img = document.createElement('img');

// // const table = document.createElement("table");

// const Table = document.getElementById("tablecontainer");


// function buildResume() {

//     try {

//         // Show loader
//         root.appendChild(loader);

//         // Create heading after 2 seconds
//         setTimeout(() => {
//             loader.remove();
//             root.appendChild(h2);
//         }, 2000);


//         // Create image
//         img.src = './img.png';
//         img.setAttribute('height', '100');
//         img.setAttribute('width', '100');

//         root.appendChild(img);


//         // =========================
//         // CREATE TABLE
//         // =========================

//         // Create header row
//          const table = document.createElement("table");
//         const headerRow = document.createElement("tr");

//         // Table headers
//         let headers = ["Name", "Age", "Course"];

//         headers.forEach(function(header) {

//             const th = document.createElement("th");

//             th.textContent = header;

//             headerRow.appendChild(th);
//         });

//         // Add header row to table
//         table.appendChild(headerRow);


//         // =========================
//         // TABLE DATA
//         // =========================

//         let students = [
//             ["Aarkesh", 20, "B.Tech"],
//             ["Rahul", 21, "BCA"],
//             ["Priya", 20, "MCA"]
//         ];


//         students.forEach(function(student) {

//             // Create row
//             const row = document.createElement("tr");

//             student.forEach(function(data) {

//                 // Create cell
//                 const  td = document.createElement("td");

//                 td.textContent = data;

//                 row.appendChild(td);
//             });

//             // Add row to table
//             table.appendChild(row);
//         });


//         // Add table to webpage
//         Table.appendChild(table);



//     } catch (e) {

//         console.log(e);

//         loader.innerHTML = 'Error'+e.message;

//     } finally {

//         console.log('hello Boss');

//     }
// }


// btn.addEventListener('click', buildResume);




const root = document.getElementById('container');
const btn = document.getElementById('btn');
const tableContainer = document.getElementById("tablecontainer");

// Elements initialized once
const h2 = document.createElement('h2');
h2.textContent = 'Resume Builder';

const loader = document.createElement('div');
loader.textContent = "Building....";

const img = document.createElement('img');
img.src = './img.png';
img.setAttribute('height', '100');
img.setAttribute('width', '100');

function buildResume() {
    try {
        // Clear old contents to avoid duplicate builds on multiple clicks
        root.innerHTML = '';
        tableContainer.innerHTML = '';

        // Display loader
        root.appendChild(loader);

        // Simulate async operation
        setTimeout(() => {
            // Remove loader and display content after 2 seconds
            loader.remove();
            root.appendChild(h2);
            root.appendChild(img);
            // CREATE TABLE
            const table = document.createElement("table");
            const headerRow = document.createElement("tr");
            const headers = ["Name", "Age", "Course"];

            headers.forEach((header) => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);
            // TABLE DATA
            const students = [
                ["Aarkesh", 20, "B.Tech"],
                ["Rahul", 21, "BCA"],
                ["Priya", 20, "MCA"]
            ];
            students.forEach((student) => {
                const row = document.createElement("tr");

                student.forEach((data) => {
                    const td = document.createElement("td");
                    td.textContent = data;
                    row.appendChild(td);
                });

                table.appendChild(row);
            });

            // Append table to container
            tableContainer.appendChild(table);

        }, 2000);

    } catch (e) {
        console.error(e);
        loader.textContent = 'Error: ' + e.message;
    } finally {
        console.log('hello Boss');
    }
}

btn.addEventListener('click', buildResume);