1) Added / Modified code files are src/index.js and all files in src/PageDesign folder

2) The main organization of the code:
- index.js calls the DisplayPage class
- based on what the user clicks, the DisplayPage returns the correct render of that page

3) Some of satisfied requirements:
- Page header uses App-Bar
- Schedule Repairs, Current Inventory, Customers all have necessary information presented
- Schedule Repairs has an additional button to open a modal. We can close the modal.
However, we cannot handle submitted form for now.
- The table in Current Inventory could be sorted thanks to DataGrid from materials-ui
- There are some tooltips for headers and buttons