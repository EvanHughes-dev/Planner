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
 

}

var DatesForCalender = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//an array for all the cells
var AllMonths = ["January", "Febuary", "March", "April", "May", "June", "July", "Agust", "September", "October", "November", "December"];
function ReturnDays(a) {//starts the whole calender event and assigns the values

    DatesForCalender = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var b = 0
    var c = 0
    var date = new Date();
    var month = date.getMonth() + a;
    while(month >= 12) {
        b = (12 - month)*-1;
        month = b
        c++;
    }
    var year = date.getFullYear() + c;
    Day(date, month, year);
    //asigns all the cells the correct number
    document.getElementById('Day1').innerHTML = DatesForCalender[0];
    if (DatesForCalender[0] > 0) {
        document.getElementById('Day1').style.backgroundColor = "#808080";
    }
    document.getElementById('Day2').innerHTML = DatesForCalender[1];
    document.getElementById('Day3').innerHTML = DatesForCalender[2];
    document.getElementById('Day4').innerHTML = DatesForCalender[3];
    document.getElementById('Day5').innerHTML = DatesForCalender[4];
    document.getElementById('Day6').innerHTML = DatesForCalender[5];
    document.getElementById('Day7').innerHTML = DatesForCalender[6];
    document.getElementById('Day8').innerHTML = DatesForCalender[7];
    document.getElementById('Day9').innerHTML = DatesForCalender[8];
    document.getElementById('Day10').innerHTML = DatesForCalender[9];
    document.getElementById('Day11').innerHTML = DatesForCalender[10];
    document.getElementById('Day12').innerHTML = DatesForCalender[11];
    document.getElementById('Day13').innerHTML = DatesForCalender[12];
    document.getElementById('Day14').innerHTML = DatesForCalender[13];
    document.getElementById('Day15').innerHTML = DatesForCalender[14];
    document.getElementById('Day16').innerHTML = DatesForCalender[15];
    document.getElementById('Day17').innerHTML = DatesForCalender[16];
    document.getElementById('Day18').innerHTML = DatesForCalender[17];
    document.getElementById('Day19').innerHTML = DatesForCalender[18];
    document.getElementById('Day20').innerHTML = DatesForCalender[19];
    document.getElementById('Day21').innerHTML = DatesForCalender[20];
    document.getElementById('Day22').innerHTML = DatesForCalender[21];
    document.getElementById('Day23').innerHTML = DatesForCalender[22];
    document.getElementById('Day24').innerHTML = DatesForCalender[23];
    document.getElementById('Day25').innerHTML = DatesForCalender[24];
    document.getElementById('Day26').innerHTML = DatesForCalender[25];
    document.getElementById('Day27').innerHTML = DatesForCalender[26];
    document.getElementById('Day28').innerHTML = DatesForCalender[27];
    document.getElementById('Day29').innerHTML = DatesForCalender[28];
    document.getElementById('Day30').innerHTML = DatesForCalender[29];
    document.getElementById('Day31').innerHTML = DatesForCalender[30];
    document.getElementById('Day32').innerHTML = DatesForCalender[31];
    document.getElementById('Day33').innerHTML = DatesForCalender[32];
    document.getElementById('Day34').innerHTML = DatesForCalender[33];
    document.getElementById('Day35').innerHTML = DatesForCalender[34];
    document.getElementById('Day36').innerHTML = DatesForCalender[35];
    document.getElementById('Day37').innerHTML = DatesForCalender[36];
    document.getElementById('Day38').innerHTML = DatesForCalender[37];
    document.getElementById('Day39').innerHTML = DatesForCalender[38];
    document.getElementById('Day40').innerHTML = DatesForCalender[39];
    document.getElementById('Day41').innerHTML = DatesForCalender[40];
    document.getElementById('Day42').innerHTML = DatesForCalender[41];
    //assigns the month title
    document.getElementById('Month').innerHTML = AllMonths[month];


    ChangeColorChangeBefore(DatesForCalender[0], 'Day1')
    ChangeColorChangeBefore(DatesForCalender[1], 'Day2')
    ChangeColorChangeBefore(DatesForCalender[2], 'Day3')
    ChangeColorChangeBefore(DatesForCalender[3], 'Day4')
    ChangeColorChangeBefore(DatesForCalender[4], 'Day5')
    ChangeColorChangeBefore(DatesForCalender[5], 'Day6')


    ChangeColor(DatesForCalender[25], 'Day26')
    ChangeColor(DatesForCalender[26], 'Day27')
    ChangeColor(DatesForCalender[27], 'Day28')
    ChangeColor(DatesForCalender[28], 'Day29')
    ChangeColor(DatesForCalender[29], 'Day30')
    ChangeColor(DatesForCalender[30], 'Day31')
    ChangeColor(DatesForCalender[31], 'Day32')
    ChangeColor(DatesForCalender[32], 'Day33')
    ChangeColor(DatesForCalender[33], 'Day34')
    ChangeColor(DatesForCalender[34], 'Day35')
    ChangeColor(DatesForCalender[35], 'Day36')
    ChangeColor(DatesForCalender[36], 'Day37')
    ChangeColor(DatesForCalender[37], 'Day38')
    ChangeColor(DatesForCalender[38], 'Day39')
    ChangeColor(DatesForCalender[39], 'Day40')
    ChangeColor(DatesForCalender[40], 'Day41')
    ChangeColor(DatesForCalender[41], 'Day42')

} //ReturnDays()

function ChangeColorChangeBefore(Value, Day) {
    if (Value > 15) {
        document.getElementById(Day).style.backgroundColor = "#808080";
    } else {
        document.getElementById(Day).style.backgroundColor = "white";
    }
}

function ChangeColor(Value, Day) {
    if (Value < 20) {
        document.getElementById(Day).style.backgroundColor = "#808080";
    } else {
        document.getElementById(Day).style.backgroundColor = "white";
    }
}

function daysInMonth(month, year) {//how many days are in a given month of a given year
    return new Date(year, month, 0).getDate();
    


}//daysInMonth(month, year)

function Day(date, month, year) {  //function decides what day each cell of the 42 are
    DayOfWeek = new Date(year, month, 1).getDay(); // gets days in current week
    document.getElementById('test').innerHTML =month
    var DayTemp = 1;//assigns a temp day
    var DayTemp2 = 1;



    MonthBefore = new Date(year, month - 1, 0);//finds number of days in last month
    

    for (i = 0; i < DatesForCalender.length;) {
        if (i <= DayOfWeek-1) {// if the number of times run is less then the position of the first day in the calender
            DatesForCalender[i] = MonthBefore.getDate() - (DayOfWeek-i); // asign the first day that would be seen of the last month

        } else if (i >= DayOfWeek && i - DayOfWeek <  daysInMonth(month+1, year)) { // if the number of times run falls in the current month

            DatesForCalender[i] = DayTemp//day temp adds by one 
            DayTemp++;
        } else {
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

var DueDatesCheckedDay = [];
var  DueDatesCheckedMonth = [];
var DueDatesCheckedYear = [];
var NameOfCheck = [0];







function GetDataInput() {//gets the data for the user new event input
    
    
    var Title;
    var DateDueDay = new Date(document.getElementById('Date').value).getDate();
   var  DateDueMonth = new Date(document.getElementById('Date').value).getMonth();
    var DateDueYear = new Date(document.getElementById('Date').value).getFullYear();
    Title = document.getElementById('Title').value;

    
    
    if (localStorage.getItem("DaySaved") === null) {

        




    } else {
        DueDatesCheckedDay = JSON.parse(localStorage.getItem("DaySaved"));
        DueDatesCheckedMonth = JSON.parse(localStorage.getItem("MonthSaved"));
        DueDatesCheckedYear = JSON.parse(localStorage.getItem("YearSaved"));
    }

    DueDatesCheckedDay.push(DateDueDay + 1);//these two are flipped because the form returns them weird
    DueDatesCheckedMonth.push(DateDueMonth + 1);
    DueDatesCheckedYear.push(DateDueYear);
    NameOfCheck.push(Title);

    localStorage.setItem("DaySaved", JSON.stringify(DueDatesCheckedDay));
    localStorage.setItem("MonthSaved", JSON.stringify(DueDatesCheckedMonth));
    localStorage.setItem("YearSaved", JSON.stringify(DueDatesCheckedYear));
    
    
    CreateCheckBox(Title);
    document.getElementById('date').value = "";
    document.getElementById('Title').value = "";
   
  

   
}//GetDataInput()

function FindLocation(){
    var Location = NameOfCheck.indexOf('The')
    
   
    
   
}

function CreateCheckBox(Name){
   

   

   
       
    var TypedTitle = []
    if (JSON.parse(localStorage.getItem("titles")) !== null) { TypedTitle = JSON.parse(localStorage.getItem("titles")); TypedTitle.push(Name); } else {TypedTitle[0] = Name }
        
    
    

    localStorage.removeItem("titles")

    document.writeln(TypedTitle)
        localStorage.setItem("titles", JSON.stringify(TypedTitle));
    
    

    
}



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
                        
                    }
                    localStorage.setItem("titles", JSON.stringify(tempArray));
                    document.getElementById("MyList").removeChild(event.target);
                    
                });
                




            }

           
        }
    }
}


