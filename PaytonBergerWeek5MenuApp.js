// Payton Berger, Front End Week 5 Menu App

/*
I am going to create a menu app for adding bicycle riders and their bikes to different available bicycle rides. 
The two class types are rider and the differnt rides they signed up for. 
The list of rides will be represented as an array.

*/

class  Rider {                      // This class is for the name of each rider and which type of bicycle they ride.
    constructor (name, bicycle) {
        this.name = name;
        this.bicycle = bicycle;
    }
    descibe (){
        return `${this.name} rides this type of ${this.bicycle}.`;
    }
}

class Ride {                    // This class is for the names of each bicycle ride. 
    constructor (name) {
        this.name = name;
        this.riders = [];
    }
    addRider(rider){
        if(rider instanceof Rider) {
            this.Riders.push(rider);
        } else { 
           throw new Error(`You can only add an instance of a rider. Argument is not a rider. ${rider}`);   
        }
    }
    describe (){
        return `${this.name} has ${this.riders.length} riders.`;
    }
}

class Menu {                // This is the menu class, it it how a user is able to cylce through the 
    constructor () {        // different menu options and add inputs. 
        this.rides = [];
        this.selectedRide = null;
    }

    start () {
        let selection = this.showMainMenuOptions();
        
        while (selection != 0) {      // This loop is the main menu loop. The user input will make a selection
            switch (selection) {      // and the code will direct them to that option.
                case '1':
                    this.createRide();
                    break;
                case '2':
                    this.viewRide();
                    break;
                case '3':
                    this.deleteRide();
                    break;
                case '4':
                    this.displayRides();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions(){  // This is the view that is displayed to the user for the main menu.
        return prompt(`
            0) Exit
            1) Create New Ride
            2) View Ride
            3) Delete Ride
            4) View All Rides
        `);
    }

    showRideMenuOptions(rideInfo) {  // This is the view that is displayed to the user for the ride menu.
        return prompt(`
            0) Back
            1) Create a Rider
            2) Delete a Rider
            - - - - - - - - - 
            ${rideInfo}
        `);
    }
    
    createRide() {    // This method allows a user to create a new ride.
        let name = prompt('Enter name for new ride:')
        this.rides.push(new Ride(name));

    }

    displayRides() {    // This method displays the list of all user input rides.
        let rideString = '';
        for (let i = 0; i < this.rides.length; i ++) {
            rideString += i + ') ' + this.rides[i].name + '\n';
        }
        alert(rideString);    
    }

    deleteRide() {    // This method allows the user to delete rides from the ride array.
        let index = prompt('Enter the index of the Ride you wish to delete:');
        if (index > -1 && index < this.rides.length){
            this.rides.splice(index, 1);
        }
    }

    viewRide() {    // This method allows the user to view a specific ride as selected by its array  place (0, 1, 2, etc.)
        let index = prompt('Enter the index of the ride you wish to view:');
        if (index > -1 && index < this.rides.length) {
            this.selectedRide = this.rides[index];
            let description = 'Ride Name: ' + this.selectedRide.name + '\n';

            for (let i = 0; i < this.selectedRide.riders.length; i ++) {
                description += i + ') ' + this.selectedRide.riders[i].name 
                + ' - ' + this.selectedRide.riders[i].bicycle + '\n';
            }

            let selection = this.showRideMenuOptions(description);
            switch (selection) {     // This statement gives the user the ability to view add riders to a sepcific ride.
                case '1':
                    this.createRider();
                    break;
                case '2':
                    this.deleteRider();
            }
            selection = this.showRideMenuOptions();
        }
    }

    createRider() {       // This method allows the user to create a rider within the selected ride.
        let name = prompt('Enter name for new Rider:');
        let bicycle = prompt('Enter bicycle for new Rider:');
        this.selectedRide.rider.push(new Rider(name, bicycle));
    }

    deleteRider() {    // This method allows the user to delete a rider from the selected ride.
        let index = prompt('Enter the index of the Rider you wish to delete:');
        if (index > -1 && index < this.selectedRide.riders.length){
            this.selectedRide.rider.splice(index, 1);
        }
    }
}

let menu = new Menu (); 
menu.start(); // This created the instacne of the menu and starts the running the above menu app.

/* 
Final notes; I have created a pretty good functionality here with all the courses of action. 
The only spot where I can't seem to keep a prompt appearing for the user (besides the 0 == goodbye selcetion)
is when the user enters the new rider and rider's bicycle. The code then leads to a blank screen. I tried looking at
the different main menu options and the ride menu options to see any differences, but I can't find any.
Either way, thanks for you hard work ;)

Payton Berger
*/