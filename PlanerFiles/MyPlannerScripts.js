/*
 * By Evan Hughes, Owen Massucci, and Brandon Bula 
 * Scripts used for HomePage
 * 
 * 
 */


//begin calender functions

var DatesForCalender = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//an array for all the cells
var AllMonths = ["January", "Febuary", "March", "April", "May", "June", "July", "Agust", "September", "October", "November", "December"];
function ReturnDays() {//starts the whole calender event and assigns the values


    var date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    Day(date, month, year);
    //asigns all the cells the correct number
    document.getElementById('Day1').innerHTML = DatesForCalender[0];
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
    document.getElementById('Month').innerHTML = AllMonths[month - 1];

} //ReturnDays()

function daysInMonth(month, year) {//how many days are in a given month of a given year
    return new Date(year, month, 0).getDate();


}//daysInMonth(month, year)

function Day(date, month, year) {  //function decides what day each cell of the 42 are
    DayOfWeek = new Date(year, month, 0).getDay(); // gets days in current month


    var DayTemp = 1;//assigns a temp day
    var DayTemp2 = 1;



    MonthBefore = new Date(year, month - 1, 0);//finds number of days in last month
    

    for (i = 0; i < DatesForCalender.length;) {
        if (i + 1 < 8 - DayOfWeek) {// if the number of times run is less then the position of the first day in the calender
            DatesForCalender[i] = MonthBefore.getDate() - (8 - DayOfWeek) + i + 2; // asign the first day that would be seen of the last month

        } else if (i + 1 >= DayOfWeek && i + 1 < 7 + DayOfWeek + daysInMonth(year, month)) { // if the number of times run falls in the current month

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

function GetDataInput() {//gets the data for the user new event input
    var Yes = document.getElementById('Date').value;
    
    
   
}//GetDataInput()