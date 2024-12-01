const Htmltable = document.querySelector(".table")

// Function to create the table list
export const DiagnosticList = (data) => {
   // Clear the existing content of listWrapper
   Htmltable.innerHTML = '';

  const arr = ["name", "description", "status"]
  
  data.forEach(item => {
    // li tag to wrap each table lists
    const listItem = document.createElement("li");
    listItem.setAttribute("id", item.name); 
    listItem.classList.add("table_list")

    // Map through the array and generate 3 span HTML elements each
    arr.forEach((type, index) => {
      // a span that wraps the table item 
      const tableItem = document.createElement("span");
      tableItem.classList.add("table_item")
      tableItem.textContent = item[type]
      
      listItem.appendChild(tableItem)
    })
    
    // joing
    Htmltable.appendChild(listItem)
  });
}