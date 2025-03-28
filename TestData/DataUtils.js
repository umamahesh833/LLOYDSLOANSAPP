const exceljs=require("exceljs")

var TestData = {}






async function getExcelData(UserAcc){


    const WorkBook = new exceljs.Workbook();
    await WorkBook.xlsx.readFile("C:/Users/umama/OneDrive/Desktop/TestCases.xlsx")
    const Worksheet1 =await WorkBook.getWorksheet("Sheet2")

    let Rws = await Worksheet1.actualRowCount
    let clms = await Worksheet1.actualColumnCount

    console.log("rows - "+Rws);
    console.log("Coulmns - "+clms);
    console.log("Data In - "+UserAcc);
    for(let i = 1;i<=Rws;i++){
        let Celldata =await Worksheet1.getCell(i,1)
       console.log(Celldata.value);
        if(Celldata.value===UserAcc){
            console.log("In if - "+UserAcc);
            console.log("In 1 - "+await Worksheet1.getCell(i,2).value);
            console.log("In 2 - "+await Worksheet1.getCell(i,3).value);
            TestData.Fname = await Worksheet1.getCell(i,2).value
            TestData.LName = await Worksheet1.getCell(i,3).value
             TestData[`Company`] = await  Worksheet1.getCell(i,4).value
             TestData[`Address`] = await  Worksheet1.getCell(i,5).value
             TestData[`Country`] = await  Worksheet1.getCell(i,6).value
             TestData[`State`] = await  Worksheet1.getCell(i,7).value
             TestData[`City`] = await  Worksheet1.getCell(i,8).value
             TestData[`Zip`] = await  Worksheet1.getCell(i,9).value
             TestData[`Mobile`] = await  Worksheet1.getCell(i,10).value
            console.log(TestData);
            break
        }
        
    }

    return TestData;
// console.log(TestData);

// console.log(TestData.Uma);


// const updCell = await Worksheet1.getCell(2,3)
// updCell.value = "India"
// const updCell2 = await Worksheet1.getCell(3,3)
// updCell2.value = "Andhra"
// const updCell3 = await Worksheet1.getCell(4,3)
// updCell3.value = "Telangana"
// await WorkBook.xlsx.writeFile("C:/Users/umama/OneDrive/Desktop/new.xlsx")
}

async function UpdateExcelData(UserAcc){


    const WorkBook = new exceljs.Workbook();
    await WorkBook.xlsx.readFile("C:/Users/umama/OneDrive/Desktop/TestCases.xlsx")
    const Worksheet1 =await WorkBook.getWorksheet("Sheet2")

    let Rws = await Worksheet1.actualRowCount
    let clms = await Worksheet1.actualColumnCount

    console.log("rows - "+Rws);
    console.log("Coulmns - "+clms);
    console.log("Data In - "+UserAcc);
    for(let i = 1;i<=Rws;i++){
        let Celldata =await Worksheet1.getCell(i,1)
       console.log(Celldata.value);
        if(Celldata.value===UserAcc){
            console.log("In if - "+UserAcc);
             const updCell = await Worksheet1.getCell(i,11)
             updCell.value = "India"
            break
        }
        
    }

 await WorkBook.xlsx.writeFile("C:/Users/umama/OneDrive/Desktop/TestCases.xlsx")
// console.log(TestData);

// console.log(TestData.Uma);


// const updCell = await Worksheet1.getCell(2,3)
// updCell.value = "India"
// const updCell2 = await Worksheet1.getCell(3,3)
// updCell2.value = "Andhra"
// const updCell3 = await Worksheet1.getCell(4,3)
// updCell3.value = "Telangana"

}

module.exports = {getExcelData, UpdateExcelData}