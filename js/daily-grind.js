myDate = new Date();
myDay = myDate.getDay();

switch(myDay){

    case 0:
        today = "Sunday";
    break;

    case 1:
        today = "Monday";
    break;

    case 2:
        today = "Tuesday";
    break;

    default:
        today = "something went wrong";

}


alert(today);