// Acts as a module to create a date and day.

module.exports.getDate = getDate;


// This was method 1 to get the day
    // var currentDay = today.getDay();
    // var day=""
    // if(currentDay=== 0){
    //     day="Sunday"
    //     //res.sendFile(__dirname+"/weekend.html")
    // } 
    // else if(currentDay=== 1){
    //     day="Monday"
    //     //res.sendFile(__dirname+"/weekday.html")
    // }
    // else if(currentDay=== 2){
    //     day="Tuesday"
    //     //res.sendFile(__dirname+"/weekday.html")
    // }  
    // else if(currentDay=== 3){
    //     day="Wednesday"
    //     //res.sendFile(__dirname+"/weekday.html")
    // } 
    // else if(currentDay=== 4){
    //     day="Thursday"
    //     //res.sendFile(__dirname+"/weekday.html")
    // } 
    // else if(currentDay=== 5){
    //     day="Friday"
    //     //res.sendFile(__dirname+"/weekday.html")
    // } 
    // else{
    //     day="Saturday"
    //     //res.sendFile(__dirname+"/weekday.html")
    // } 

    // Method 2 to use javascript function rather than if-else or switch

    //Refer to stack overflow article for this

    function getDate(){
        var today = new Date();
        var options = {
            weekday:"long",
            day: "numeric",
            month:"long"
        };
        var day = today.toLocaleDateString("en-US",options);

        return day;
    }
