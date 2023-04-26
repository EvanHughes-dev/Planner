/*
 * By Evan Hughes, Owen Massucci, and Brandon Bula 
 * Scripts used for HomePage
 * 
 * 
 */

//begin of setup function
//#region Variables
 
first = 0;
var checkBox1 = "1";
var a = 0;
var r = document.querySelector(':root');
var NumberOfEvents = 0;
//#region arrays
MonthsTest = []
YearTest = []
var IdForCalenderBackground = ['Day1Back', 'Day2Back', 'Day3Back', 'Day4Back', 'Day5Back', 'Day6Back', 'Day7Back', 'Day8Back', 'Day9Back', 'Day10Back', 'Day11Back', 'Day12Back', 'Day13Back', 'Day14Back', 'Day15Back', 'Day16Back', 'Day17Back', 'Day18Back', 'Day19Back', 'Day20Back', 'Day21Back', 'Day22Back', 'Day23Back', 'Day24Back', 'Day25Back', 'Day26Back', 'Day27Back', 'Day28Back', 'Day29Back', 'Day30Back', 'Day31Back', 'Day32Back', 'Day33Back', 'Day34Back', 'Day35Back', 'Day36Back', 'Day37Back', 'Day38Back', 'Day39Back', 'Day40Back', 'Day41Back', 'Day42Back', 'Day43Back', 'Day44Back']
var IdForCalender = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7', 'Day8', 'Day9', 'Day10', 'Day11', 'Day12', 'Day13', 'Day14', 'Day15', 'Day16', 'Day17', 'Day18', 'Day19', 'Day20', 'Day21', 'Day22', 'Day23', 'Day24', 'Day25', 'Day26', 'Day27', 'Day28', 'Day29', 'Day30', 'Day31', 'Day32', 'Day33', 'Day34', 'Day35', 'Day36', 'Day37', 'Day38', 'Day39', 'Day40', 'Day41', 'Day42']
var ClassObjects = [];
var DatesForCalender = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//an array for all the cells
var AllMonths = ["January", "Febuary", "March", "April", "May", "June", "July", "Agust", "September", "October", "November", "December"];
var DueArray = ['Due1', 'Due2', 'Due3', 'Due4', 'Due5', 'Due6', 'Due7', 'Due8', 'Due9', 'Due10', 'Due11', 'Due12', 'Due13', 'Due14', 'Due15', 'Due16', 'Due17', 'Due18', 'Due19', 'Due20', 'Due21', 'Due22', 'Due23', 'Due24', 'Due25', 'Due26', 'Due27', 'Due28', 'Due29', 'Due30', 'Due31', 'Due32', 'Due33', 'Due34', 'Due35', 'Due36', 'Due37', 'Due38', 'Due39', 'Due40', 'Due41', 'Due42']
var DateInMonthCheck = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//#endregion
//#endregion

function Begin() {
    

    if (localStorage.getItem('color') !== null) {
        r.style.setProperty('--backgroundHead', localStorage.getItem('color'));
    }
    else {
        r.style.setProperty('--backgroundHead', "#8DBCBB");
    }
    if (localStorage.getItem('color4') !== null) {
        r.style.setProperty('--backgroundHeader', localStorage.getItem('color4'));
    }
    else {
        r.style.setProperty('--backgroundHeader', "#005B9A");
    }
    ReturnDays(0);
    
    if (JSON.parse(localStorage.getItem("titles")) !== null){ Refreshed();}
    
 
}
function Refreshed() {


    var TempTitles;
    TempTitles= JSON.parse(localStorage.getItem("titles"));

    if (localStorage.getItem("titles") !== null && TempTitles[0] != "") {
        for (i = 1; i <= TempTitles.length; i++) {

            Name = TempTitles[i - 1]
            if (Name != null) {


                var li = document.createElement("li");

                var t = document.createTextNode(Name);
                li.appendChild(t);
                li.setAttribute("id", Name)



                document.getElementById("MyList").appendChild(li);



                li.addEventListener('click', event => {

                    var TempNameAray = JSON.parse(localStorage.getItem("titles"));
                    var tempIndex = TempNameAray.indexOf(event.target.id)
                    if (tempIndex > -1) {

                        TempNameAray.splice(tempIndex, 1);
                        TypedDay = JSON.parse(localStorage.getItem("DaySaved"))
                        TypedMonth = JSON.parse(localStorage.getItem("MonthSaved"))
                        TypedYear = JSON.parse(localStorage.getItem("YearSaved"))
                        TypedDay.splice(tempIndex, 1)
                        TypedMonth.splice(tempIndex, 1)
                        TypedYear.splice(tempIndex, 1)
                    }
                    localStorage.setItem("titles", JSON.stringify(TempNameAray));
                    document.getElementById("MyList").removeChild(event.target);
                    localStorage.removeItem("DaySaved")
                    localStorage.setItem("DaySaved", JSON.stringify(TypedDay));
                    localStorage.removeItem("MonthSaved")
                    localStorage.setItem("MonthSaved", JSON.stringify(TypedMonth));
                    localStorage.removeItem("YearSaved")
                    localStorage.setItem("YearSaved", JSON.stringify(TypedYear));
                    ReturnDays(a);
                });//this removes a item from the to do list





            }


        }
    }
}


//#region Caleneder
function GoRight() {
    a++;
    ReturnDays(a);
 

}//end of GoRight
function GoLeft() {
    a--;
    ReturnDays(a);


}


function ReturnDays(a) {//starts the whole calender event and assigns the values

    AddListenersBox();

    DatesForCalender = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var b = 0
    var c = 0
    var date = new Date();
    var day = date.getDate()
    var month = date.getMonth() + a;
    while (month >= 12) {
        b = (12 - month) * -1;
        month = b
        c++;
    }

    while (month <= -1) {
        b = 12 + month
        month = b
        c--;
    }
    var year = date.getFullYear() + c;
    Day(day, month, year);

    //asigns all the cells the correct number

    for (i = 0; i < DatesForCalender.length; i++) { document.getElementById(IdForCalender[i]).innerHTML = DatesForCalender[i]; }

    //assigns the month title
    document.getElementById('Month').innerHTML = AllMonths[month] + ": " + year;



    for (i = 0; i < DatesForCalender.length; i++) {

        ChangeColorChangeBefore(DatesForCalender[i], MonthsTest[i], IdForCalenderBackground[i], day, month, a, i)
    }
    
   
        
    SetCalenderText(DatesForCalender);


} //ReturnDays()

function SetCalenderText(DatesForCalender) {
    //Sets what is displayed in the calender text area
    for (i = 0; i < DatesForCalender.length; i++) { document.getElementById(DueArray[i]).innerHTML = " " }

    for (i = 0; i < DatesForCalender.length; i++) {

        run = 0
        x = DatesForCalender[i]
        y = MonthsTest[i]
        z = YearTest[i]
        SaveDay = JSON.parse(localStorage.getItem("DaySaved"))
        SaveMonth = JSON.parse(localStorage.getItem("MonthSaved"))
        SaveYear = JSON.parse(localStorage.getItem("YearSaved"))


        //document.writeln(JSON.parse(localStorage.getItem("MonthSaved")));
        //this decides what is shown on the calender 
        for (k = 0; k < SaveYear.length; k++) {

            if (x == SaveDay[k] && y == SaveMonth[k] && z == SaveYear[k]) {
                SetText = JSON.parse(localStorage.getItem("titles"))
                if (y == 12 && SaveYear[k] == 2022) {
                    document.writeln(SaveMonth[k]);
                }
                if (run != 0) { document.getElementById(DueArray[i]).innerHTML = document.getElementById(DueArray[i]).innerHTML + "</br>" + SetText[k]; }
                else { document.getElementById(DueArray[i]).innerHTML = SetText[k]; run++; }

            }

        }



    }
}
function ChangeColorChangeBefore(ValueDay, ValueMonth, Day, Current, month, a, i) {
    var x = localStorage.getItem('color3');
    var y = localStorage.getItem('color2');
    if (y === null) { y = "#74C2E1" }
    if (x === null) { x = "#0191C8" }
   
    if (month != ValueMonth) {
        document.getElementById(Day).style.backgroundColor = "#8C8984";
        DateInMonthCheck[i] = 0
    } else if (ValueDay == Current && month - a == ValueMonth) {

        document.getElementById(Day).style.backgroundColor = x;
        DateInMonthCheck[i] = 2
        
    } 
else{
        document.getElementById(Day).style.backgroundColor = y;
        DateInMonthCheck[i] = 1
    }
}

function AddListenersBox() {
    document.getElementById(IdForCalenderBackground[0]).addEventListener('click', event => { ZoomIn(0) });
    document.getElementById(IdForCalenderBackground[1]).addEventListener('click', event => { ZoomIn(1) });
    document.getElementById(IdForCalenderBackground[2]).addEventListener('click', event => { ZoomIn(2) });
    document.getElementById(IdForCalenderBackground[3]).addEventListener('click', event => { ZoomIn(3) });
    document.getElementById(IdForCalenderBackground[4]).addEventListener('click', event => { ZoomIn(4) });
    document.getElementById(IdForCalenderBackground[5]).addEventListener('click', event => { ZoomIn(5) });
    document.getElementById(IdForCalenderBackground[6]).addEventListener('click', event => { ZoomIn(6) });
    document.getElementById(IdForCalenderBackground[7]).addEventListener('click', event => { ZoomIn(7) });
    document.getElementById(IdForCalenderBackground[8]).addEventListener('click', event => { ZoomIn(8) });
    document.getElementById(IdForCalenderBackground[9]).addEventListener('click', event => { ZoomIn(9) });
    document.getElementById(IdForCalenderBackground[10]).addEventListener('click', event => { ZoomIn(10) });
    document.getElementById(IdForCalenderBackground[11]).addEventListener('click', event => { ZoomIn(11) });
    document.getElementById(IdForCalenderBackground[12]).addEventListener('click', event => { ZoomIn(12) });
    document.getElementById(IdForCalenderBackground[13]).addEventListener('click', event => { ZoomIn(13) });
    document.getElementById(IdForCalenderBackground[14]).addEventListener('click', event => { ZoomIn(14) });
    document.getElementById(IdForCalenderBackground[15]).addEventListener('click', event => { ZoomIn(15) });
    document.getElementById(IdForCalenderBackground[16]).addEventListener('click', event => { ZoomIn(16) });
    document.getElementById(IdForCalenderBackground[17]).addEventListener('click', event => { ZoomIn(17) });
    document.getElementById(IdForCalenderBackground[18]).addEventListener('click', event => { ZoomIn(18) });
    document.getElementById(IdForCalenderBackground[19]).addEventListener('click', event => { ZoomIn(19) });
    document.getElementById(IdForCalenderBackground[20]).addEventListener('click', event => { ZoomIn(20) });
    document.getElementById(IdForCalenderBackground[21]).addEventListener('click', event => { ZoomIn(21) });
    document.getElementById(IdForCalenderBackground[22]).addEventListener('click', event => { ZoomIn(22) });
    document.getElementById(IdForCalenderBackground[23]).addEventListener('click', event => { ZoomIn(23) });
    document.getElementById(IdForCalenderBackground[24]).addEventListener('click', event => { ZoomIn(24) });
    document.getElementById(IdForCalenderBackground[25]).addEventListener('click', event => { ZoomIn(25) });
    document.getElementById(IdForCalenderBackground[26]).addEventListener('click', event => { ZoomIn(26) });
    document.getElementById(IdForCalenderBackground[27]).addEventListener('click', event => { ZoomIn(27) });
    document.getElementById(IdForCalenderBackground[28]).addEventListener('click', event => { ZoomIn(28) });
    document.getElementById(IdForCalenderBackground[29]).addEventListener('click', event => { ZoomIn(29) });
    document.getElementById(IdForCalenderBackground[30]).addEventListener('click', event => { ZoomIn(30) });
    document.getElementById(IdForCalenderBackground[31]).addEventListener('click', event => { ZoomIn(31) });
    document.getElementById(IdForCalenderBackground[32]).addEventListener('click', event => { ZoomIn(32) });
    document.getElementById(IdForCalenderBackground[33]).addEventListener('click', event => { ZoomIn(33) });
    document.getElementById(IdForCalenderBackground[34]).addEventListener('click', event => { ZoomIn(34) });
    document.getElementById(IdForCalenderBackground[35]).addEventListener('click', event => { ZoomIn(35) });
    document.getElementById(IdForCalenderBackground[36]).addEventListener('click', event => { ZoomIn(36) });
    document.getElementById(IdForCalenderBackground[37]).addEventListener('click', event => { ZoomIn(37) });
    document.getElementById(IdForCalenderBackground[38]).addEventListener('click', event => { ZoomIn(38) });
    document.getElementById(IdForCalenderBackground[39]).addEventListener('click', event => { ZoomIn(39) });
    document.getElementById(IdForCalenderBackground[40]).addEventListener('click', event => { ZoomIn(40) });
    document.getElementById(IdForCalenderBackground[41]).addEventListener('click', event => { ZoomIn(41) });
}


function daysInMonth(month, year) {//how many days are in a given month of a given year
    return new Date(year, month, 0).getDate();
    


}//daysInMonth(month, year)

function Day(date, month, year) {  //function decides what day each cell of the 42 are
    var DayOfWeek = new Date(year, month, 1).getDay(); // gets days in current week
    
    var DayTemp = 1;//assigns a temp day
    var DayTemp2 = 1;
   // document.getElementById('test').innerHTML = MonthsTest

    
    MonthBefore = new Date(year, month , 0);//finds number of days in last month
    

    for (i = 0; i < DatesForCalender.length;) {
        if (i <= DayOfWeek-1) {// if the number of times run is less then the position of the first day in the calender
            var DateInWeek = 6 - DayOfWeek
           
            DatesForCalender[5-DateInWeek-i] = MonthBefore.getDate() - i; // asign the first day that would be seen of the last month
            
            if (month  >= 0 ) {
                MonthsTest[i] = month - 1
                YearTest[i] = year
             
            } else { MonthsTest[i] = 11; YearTest[i] = year - 1 }
          
        } else if (i >= DayOfWeek && i - DayOfWeek <  daysInMonth(month+1, year)) { // if the number of times run falls in the current month

            DatesForCalender[i] = DayTemp//day temp adds by one 
            DayTemp++;
            MonthsTest[i] = month 
            YearTest[i] = year
        } else {

            if (month <= 10) {
                MonthsTest[i] = month += 1;
                YearTest[i] = year+1

            } else { MonthsTest[i] = 1; YearTest[i]= year+1 }
           
            DatesForCalender[i] = DayTemp2//days after the month ends
            DayTemp2++;
        }

        i++;
    
    }//for i=0

}// Day(date, month, year)

//----------------------------------------------\\

//start of functions for side bar

function openNav() {//opens the sidebar
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}//openNav()

function closeNav() {//closes the sidebar
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}//cliseNav()

//-----------------------------------------------\\



//start of functions for form



var DueDatesCheckedDay = [0];
var DueDatesCheckedMonth = [0];
var DueDatesCheckedYear = [0];

function ZoomIn(Calender) {
    
 var run = 0
    document.getElementById("Block").style.display = 'block';
    document.getElementById("BigCell").style.display = 'block';
    document.getElementById("BigDateBox").innerHTML = DatesForCalender[Calender];
    SetText = JSON.parse(localStorage.getItem("titles"))
    x = DatesForCalender[Calender]
    y = MonthsTest[Calender]
    z = YearTest[Calender]
    SaveDay = JSON.parse(localStorage.getItem("DaySaved"))
    SaveMonth = JSON.parse(localStorage.getItem("MonthSaved"))
    SaveYear = JSON.parse(localStorage.getItem("YearSaved"))
    
   
    
    

    for (k = 0; k < SaveYear.length; k++) {
       // document.writeln(SaveYear.length)
        if (x == SaveDay[k] && y == SaveMonth[k] && z == SaveYear[k]) {
            
            
            if (run != 0) { document.getElementById("BigDueBox").innerHTML = document.getElementById("BigDueBox").innerHTML + "</br>" + SetText[k]; }
            else { document.getElementById("BigDueBox").innerHTML = SetText[k]; run++; }
        }

    }
    if (DateInMonthCheck[Calender] == 1) {
        document.getElementById("BigCell").style.backgroundColor = localStorage.getItem('color2');
    } else if (DateInMonthCheck[Calender] == 2) {
        document.getElementById("BigCell").style.backgroundColor = localStorage.getItem('color3');
    } else {
        document.getElementById("BigCell").style.backgroundColor = "#8C8984";
    }
    

    
    
}
function ZoomOut() {
    document.getElementById("Block").style.display = 'none';
    document.getElementById("BigCell").style.display = 'none';
  
}
//#endregion


//#region Colors
var r = document.querySelector(':root');
//function updateAll(event) {

//    r.style.setProperty('--backgroundHead', event.target.value);
//    localStorage.setItem('color', event.target.value);
//}
//function updateAll2(event) {

   
//    localStorage.setItem('color2', event.target.value);
    
//}
//function updateAll3(event) {

   

//    localStorage.setItem('color3', event.target.value);
    
//}
//function updateAll4(event) {

//    r.style.setProperty('--backgroundHeader', event.target.value);
//    localStorage.setItem('color4', event.target.value);
//}

function SaveColor() {


    colorWell = document.querySelector("#colorWell");
    colorWell2 = document.querySelector("#colorWell2")
    colorWell3 = document.querySelector("#colorWell3")
    colorWell4 = document.querySelector("#colorWell4")

    r.style.setProperty('--backgroundHead', colorWell.value);
    localStorage.setItem('color', colorWell.value);

    localStorage.setItem('color2', colorWell2.value);
    localStorage.setItem('color3', colorWell3.value);
    r.style.setProperty('--backgroundHeader', colorWell4.value);
    localStorage.setItem('color4', colorWell4.value);
}

let colorWell;
let colorWell2;
let colorWell3;
let colorWell4;

function Color() {

    
    const defaultColor = "#8DBCBB";
    const defaultColor2 = "#74C2E1";

    const defaultColor3 = "#0191C8";
    const defaultColor4 = "#005B9A";




    colorWell = document.querySelector("#colorWell");
    colorWell2 = document.querySelector("#colorWell2")
    colorWell3 = document.querySelector("#colorWell3")
    colorWell4 = document.querySelector("#colorWell4")
   
    var x = localStorage.getItem("color");
    var y = localStorage.getItem("color2");
    var z = localStorage.getItem("color3");
    var a = localStorage.getItem("color4");
   
    if (x === null) { colorWell.value = defaultColor; }
    else {
        colorWell.value = x;

    }
    if (y === null) { colorWell2.value = defaultColor2; }
    else {
        colorWell2.value = y;

    }
    if (z === null) { colorWell3.value = defaultColor3; }
    else {
        colorWell3.value = z;

    }

    if (a === null) { colorWell4.value = defaultColor4; }
    else {
        colorWell4.value = a;
    }
        r.style.setProperty('--backgroundHead', colorWell.value);
        localStorage.setItem('color', colorWell.value)
   
        r.style.setProperty('--backgroundHeader', colorWell4.value);
          localStorage.setItem('color4', colorWell4.value)

        localStorage.setItem('color2', colorWell2.value)


        localStorage.setItem('color3', colorWell3.value)

        //colorWell.addEventListener("input", updateAll, false);
        //colorWell2.addEventListener("input", updateAll2, false);
        //colorWell3.addEventListener("input", updateAll3, false);
        //colorWell4.addEventListener("input", updateAll4, false);

    
}

//#endregion




//#region Save Data from Input



function GetDataInput() {//gets the data for the user new event input
    var currentDate = $("#datepicker").datepicker("getDate");

    
    var Title;
    var temp;
    var DateDueDay =currentDate.getDate();
    var DateDueMonth = currentDate.getMonth();
    var DateDueYear = currentDate.getFullYear();
    var select = document.getElementById('TagBox');
    var tag = select.options[select.selectedIndex].text;
  
 
    if (DateDueMonth == 12) {
        temp = 1;

    } else { temp = DateDueMonth }


    Title = document.getElementById('Title').value;

    
    CreateCheckBox(Title);
    StoreDate(DateDueDay, DateDueMonth, DateDueYear);
    SaveTag(tag);


    document.getElementById('datepicker').value = "";
    document.getElementById('Title').value = "";




}//GetDataInput()

function CreateCheckBox(Name) {






    var TypedTitle = []
    if (JSON.parse(localStorage.getItem("titles")) !== null) { TypedTitle = JSON.parse(localStorage.getItem("titles")); TypedTitle.push(Name); } else { TypedTitle[0] = Name }




    localStorage.removeItem("titles")


    localStorage.setItem("titles", JSON.stringify(TypedTitle));




}

function StoreDate(Day, Month, Year) {
    var TypedDay = []
    var TypedMonth = []
    var TypedYear = []
    // document.writeln("Ran2")
    if (JSON.parse(localStorage.getItem("DaySaved")) !== null) { TypedDay = JSON.parse(localStorage.getItem("DaySaved")); TypedDay.push(Day); } else { TypedDay[0] = Day }
    if (JSON.parse(localStorage.getItem("MonthSaved")) !== null) { TypedMonth = JSON.parse(localStorage.getItem("MonthSaved")); TypedMonth.push(Month); } else { TypedMonth[0] = Month }
    if (JSON.parse(localStorage.getItem("YearSaved")) !== null) { TypedYear = JSON.parse(localStorage.getItem("YearSaved")); TypedYear.push(Year); } else { TypedYear[0] = Year }
    //document.writeln("Ran3")


    localStorage.removeItem("DaySaved")
    localStorage.setItem("DaySaved", JSON.stringify(TypedDay));
    localStorage.removeItem("MonthSaved")
    localStorage.setItem("MonthSaved", JSON.stringify(TypedMonth));
    localStorage.removeItem("YearSaved")
    localStorage.setItem("YearSaved", JSON.stringify(TypedYear));
    //document.writeln(TypedYear + " " + TypedMonth + " " + TypedDay)
    Begin();


}

function SaveTag(Tag) {
    var TagArray = []
    if (JSON.parse(localStorage.getItem("Tag")) !== null) {
        TagArray = JSON.parse(localStorage.getItem("Tag"));
        TagArray.push(Tag);
    } else { TagArray[0] = Tag }

    localStorage.removeItem("Tag");
    localStorage.setItem("Tag", JSON.stringify(TagArray));
   
}
//#endregion

function CheckTag(Tag) {
    var Temp;
  
    var TempTag;
    Temp = JSON.parse(localStorage.getItem("titles"));
    TempTag = JSON.parse(localStorage.getItem("Tag"));
    if (Temp === null || TempTag === null) {
        
        return;
    }
    
    for (i = 0; i <= Temp.length; i++) {
       
        if (TempTag[i] != Tag) {
            document.getElementById(Temp[i]).style.display = "none";

        } else { document.getElementById(Temp[i]).style.display = "block"; }
        if (Tag == "All") { document.getElementById(Temp[i]).style.display = "block"; }
    }
}
