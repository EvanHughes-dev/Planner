/*
 * By Evan Hughes, Owen Massucci, and Brandon Bula 
 * Scripts used for HomePage
 * 
 * 
 */

//begin of setup functions
first = 0;
var checkBox1 = "1";
var a = 0;

function Begin() {
    
    

    ReturnDays(0);
    
    if (JSON.parse(localStorage.getItem("titles")) !== null){ Refreshed(); }
    
 
}
//setInterval(Refreshed, 100);
//begin calender functions


function GoRight() {
    a++;
    ReturnDays(a);
 

}//end of GoRight
function GoLeft() {
    a--;
    ReturnDays(a);


}
//document.getById("Due1").innerHTML = "x" + br + "y" + br + z 
MonthsTest = []
YearTest = []
var IdForCalenderBackground = ['Day1Back', 'Day2Back', 'Day3Back', 'Day4Back', 'Day5Back', 'Day6Back', 'Day7Back', 'Day8Back', 'Day9Back', 'Day10Back', 'Day11Back', 'Day12Back', 'Day13Back', 'Day14Back', 'Day15Back', 'Day16Back', 'Day17Back', 'Day18Back', 'Day19Back', 'Day20Back', 'Day21Back', 'Day22Back', 'Day23Back', 'Day24Back', 'Day25Back', 'Day26Back', 'Day27Back', 'Day28Back', 'Day29Back', 'Day30Back', 'Day31Back', 'Day32Back', 'Day33Back',  'Day34Back', 'Day35Back', 'Day36Back', 'Day37Back', 'Day38Back', 'Day39Back', 'Day40Back', 'Day41Back', 'Day42Back', 'Day43Back', 'Day44Back' ]
var IdForCalender = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7', 'Day8', 'Day9', 'Day10', 'Day11', 'Day12', 'Day13', 'Day14', 'Day15', 'Day16', 'Day17', 'Day18', 'Day19', 'Day20', 'Day21', 'Day22', 'Day23', 'Day24', 'Day25', 'Day26', 'Day27', 'Day28', 'Day29', 'Day30', 'Day31', 'Day32', 'Day33', 'Day34', 'Day35', 'Day36', 'Day37', 'Day38', 'Day39', 'Day40', 'Day41', 'Day42']
var IDForClanderText = []
var DatesForCalender = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//an array for all the cells
var AllMonths = ["January", "Febuary", "March", "April", "May", "June", "July", "Agust", "September", "October", "November", "December"];
var DueArray = ['Due1', 'Due2', 'Due3', 'Due4', 'Due5', 'Due6', 'Due7', 'Due8', 'Due9', 'Due10', 'Due11', 'Due12', 'Due13', 'Due14', 'Due15', 'Due16', 'Due17', 'Due18', 'Due19', 'Due20', 'Due21', 'Due22', 'Due23', 'Due24', 'Due25', 'Due26', 'Due27', 'Due28', 'Due29', 'Due30', 'Due31', 'Due32', 'Due33', 'Due34', 'Due35', 'Due36', 'Due37', 'Due38', 'Due39', 'Due40', 'Due41', 'Due42']

function ReturnDays(a) {//starts the whole calender event and assigns the values
    
    DatesForCalender = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var b = 0
    var c = 0
    var date = new Date();
    var day = date.getDate()
    var month = date.getMonth() + a;
    while(month >= 12) {
        b = (12 - month)*-1;
        month = b
        c++;
    }

    while (month <= -1){
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
      
        ChangeColorChangeBefore(DatesForCalender[i], MonthsTest[i] ,IdForCalenderBackground[i], day, month,  a)
    }
    for (i = 0; i < DatesForCalender.length; i++) { document.getElementById(DueArray[i]).innerHTML = " "}
    
    for (i = 0; i < DatesForCalender.length; i++){
       
        run =0 
        x = DatesForCalender[i]
        y=MonthsTest[i]
        z=YearTest[i]
        SaveDay = JSON.parse(localStorage.getItem("DaySaved"))
        SaveMonth = JSON.parse(localStorage.getItem("MonthSaved"))
        SaveYear = JSON.parse(localStorage.getItem("YearSaved"))
        
     
        //document.writeln(JSON.parse(localStorage.getItem("MonthSaved")));
        
        for (k = 0; k < SaveYear.length;k++) {
            
            if (x == SaveDay[k] && y == SaveMonth[k] && z == SaveYear[k]) {
                SetText = JSON.parse(localStorage.getItem("titles"))
                
                if (run != 0) {document.getElementById(DueArray[i]).innerHTML =  document.getElementById(DueArray[i]).innerHTML +"</br>" + SetText[k]; }
                else { document.getElementById(DueArray[i]).innerHTML = SetText[k]; run++;}
            }
             
        }
       
        
    }

} //ReturnDays()

function ChangeColorChangeBefore(ValueDay, ValueMonth, Day, Current, month, a) {

   
    if (month != ValueMonth) {
        document.getElementById(Day).style.backgroundColor = "#8C8984";
    } else if (ValueDay == Current && month-a == ValueMonth) {
        document.getElementById(Day).style.backgroundColor = "#0191C8";
        //document.writeln(month, ValueMonth)
    } 
else{
        document.getElementById(Day).style.backgroundColor = "#74C2E1";
    }
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

            if (month <= 11) {
                MonthsTest[i] = month + 1
                YearTest[i] = year

            } else { MonthsTest[i] = 0; YearTest[i]= year+1 }
           
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






function GetDataInput() {//gets the data for the user new event input
   
    
    var Title;
    var DateDueDay = new Date(document.getElementById('Date').value).getDate()+1;
   var  DateDueMonth = new Date(document.getElementById('Date').value).getMonth();
    var DateDueYear = new Date(document.getElementById('Date').value).getFullYear();
    Title = document.getElementById('Title').value;
  // document.writeln(DateDueDay, DateDueMonth, DateDueYear)
    CreateCheckBox(Title);
    StoreDate(DateDueDay , DateDueMonth, DateDueYear);
   
    
   
    document.getElementById('Date').value = "";
    document.getElementById('Title').value = "";
   
    

   
}//GetDataInput()



function CreateCheckBox(Name){
   

   

   
       
    var TypedTitle = []
    if (JSON.parse(localStorage.getItem("titles")) !== null) { TypedTitle = JSON.parse(localStorage.getItem("titles")); TypedTitle.push(Name); } else {TypedTitle[0] = Name }
    
    
    

    localStorage.removeItem("titles")

   
        localStorage.setItem("titles", JSON.stringify(TypedTitle));
   
    

    
}

//------------------------------------------\\

//start functions for save date


function StoreDate(Day, Month, Year) {
    var TypedDay = []
    var TypedMonth = []
    var TypedYear = []
   // document.writeln("Ran2")
    if (JSON.parse(localStorage.getItem("DaySaved")) !== null) { TypedDay = JSON.parse(localStorage.getItem("DaySaved")); TypedDay.push(Day); } else {TypedDay[0]=Day }
    if (JSON.parse(localStorage.getItem("MonthSaved")) !== null) { TypedMonth = JSON.parse(localStorage.getItem("MonthSaved")); TypedMonth.push(Month); } else {TypedMonth[0]=Month }
    if (JSON.parse(localStorage.getItem("YearSaved")) !== null) { TypedYear = JSON.parse(localStorage.getItem("YearSaved")); TypedYear.push(Year); } else {TypedYear[0]=Year }
    //document.writeln("Ran3")
    

    localStorage.removeItem("DaySaved")
    localStorage.setItem("DaySaved", JSON.stringify(TypedDay));
    localStorage.removeItem("MonthSaved")
    localStorage.setItem("MonthSaved", JSON.stringify(TypedMonth));
    localStorage.removeItem("YearSaved")
    localStorage.setItem("YearSaved", JSON.stringify(TypedYear));
    
    Begin();
   
}

//-------------------------------------------\\

//begin support functions

//for future fix, check boxes can not be displayed at once

function Refreshed() {

    /*
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("test").innerHTML = "You have clicked the button " +
        localStorage.clickcount + " time(s).";

*/

    //document.writeln("Ran5")

    var Temp;
    Temp = JSON.parse(localStorage.getItem("titles"));

    if (localStorage.getItem("titles") !== null && Temp[0] != "") {
        for (i = 1; i <= Temp.length; i++) {

            Name = Temp[i - 1]
            if (Name != null) {
                
                
                var li = document.createElement("li");
                
                var t = document.createTextNode(Name);
                li.appendChild(t);
                li.setAttribute("id", Name)
               
               
               
             

                



                document.getElementById("MyList").appendChild(li);
               
                
                
                li.addEventListener('click', event => {

                    var tempArray = JSON.parse(localStorage.getItem("titles"));
                    var tempIndex = tempArray.indexOf(event.target.id)
                    if (tempIndex > -1) {
                      
                        tempArray.splice(tempIndex, 1);
                        TypedDay = JSON.parse(localStorage.getItem("DaySaved"))
                        TypedMonth = JSON.parse(localStorage.getItem("MonthSaved"))
                        TypedYear = JSON.parse(localStorage.getItem("YearSaved"))
                        TypedDay.splice(tempIndex, 1)
                        TypedMonth.splice(tempIndex, 1)
                        TypedYear.splice(tempIndex, 1)
                    }
                    localStorage.setItem("titles", JSON.stringify(tempArray));
                    document.getElementById("MyList").removeChild(event.target);
                    localStorage.removeItem("DaySaved")
                    localStorage.setItem("DaySaved", JSON.stringify(TypedDay));
                    localStorage.removeItem("MonthSaved")
                    localStorage.setItem("MonthSaved", JSON.stringify(TypedMonth));
                    localStorage.removeItem("YearSaved")
                    localStorage.setItem("YearSaved", JSON.stringify(TypedYear));
                });//this removes a item from the to do list
                




            }

           
        }
    }
}
