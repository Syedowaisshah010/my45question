"use strict";
// 1st
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
Object.defineProperty(exports, "__esModule", { value: true });
// let person_Name="Eric";
// console.log(`Hello ${person_Name},"would you like to learn some python today?"`);
//2nd
//
//2
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//2
// var personName1="abhrahim lincon";
// var personName2=personName1.toLowerCase();
// var personName3=personName1.toUpperCase();
// console.log(personName2);
// console.log(personName3);
// console.log(personName1.charAt(0).toUpperCase()+personName1.slice(1));
//3rd
////Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// console.log('Albert Eintein once said,"A person who never made a mistake never tried anything new."'
// );
//4th
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famouse_person:string="Albert Eintein";
// let message:string="A person who never made a mistake never tried anything new.";
// console.log(`${famouse_person} Once said,"${message}"`);
// 5th
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// console.log(`"Albert\tEinstein"`);
// console.log(`"Albert\nEinstein"`);
//6th
//
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// let a:number=5;
// let b:number=3;
// let aa:number=16;
// let bb:number=8;
// let aaa:number=2;
// let bbb:number=4;
// let ab:number=16;
// let ba:number=2;
// console.log(a+b);
// console.log(aa-bb);
// console.log(aaa*bbb);
//  console.log(ab/ba);
// 7th
//You should create four lines that look like this:
//console.log(5 + 3)
////Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(5+3);
// console.log(16-8);
// console.log(2*4);
//  console.log(16/2);
//8th
//
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let favourite_Number:number=2023;
// let message:string=` my favourite number  is ${favourite_Number}`;
// console.log(`${favourite_Number},\n${message}`);
//9th
//
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//var anme1:string="my name is muhammad owais shah date is 2/23/2024";
// var message:string="i write my name top and today date";
// console.log(message);
//10//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//
// let array:string[]=["mushahid","imran","aijaz","ibhrahim","shouib"];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3])
// console.log(array[4]);
// // 11th
//// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s 
// let array1:string[]=["mushahid","imran","aijaz","ibhrahim","shouib"];
// let messaga:string="is good personality person.";
// console.log(array1[0]+" "+ messaga);
//  console.log(array1[1]+" "+ messaga);
//  console.log(array1[2]+" "+ messaga);
// console.log(array1[3]+" "+ messaga)
// console.log(array1[4]+" "+ messaga);
// 12th
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let arraycar:string[]=["Honda Moter","Honda Civic","Audi" ,"Coralla"];
// arraycar.map((item)=>(console.log(`i would like to own ${item}.`)
// ));
//13th
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let arar:string[]=["hasaan","mushahid","daniyal",];
// arar.map((item)=>(console.log(`${item},I like to  invite you to dinner`)
// ))
// 14th
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// let ararw:string[]=["hasaan","mushahid","daniyal",];
// ararw.map((item)=>(console.log(`${item},I like to  invite you to dinner`)
//  ))
// let arr:string[]=["hasaam","mujahid","aijaz"];
// arr.map((item)=>(console.log(`${item}, i forget to invite sorry i invite you to diiner tonight.`)
// ));
//console.log(`${ararw},${arr}`);
//15th
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
//  let ararw1:string[]=["hasaan","mushahid","daniyal",];
// let caomot:string="mushahid";
// console.log(caomot+" "+"can not make dinner")
// ararw1.unshift("moni");
// ararw1.splice(0,1,"huzaifa");
// ararw1.push("ali");
// ararw1.map((item)=>(console.log(`dear  ${item} come to diiner`)
// ));
//16th
//
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//
// let ararw1:string[]=["hasaan","mushahid","daniyal",];
//  let caomot:string="mushahid";
// console.log(caomot+" "+"can not make dinner")
//  ararw1.unshift("moni");
//  ararw1.splice(0,1,"huzaifa");
//  ararw1.push("ali");
//  ararw1.map((item)=>(console.log(`dear  ${item} come to diiner`)
//  ));
//  console.log("i invite only two people for dinner");
//  let Array1:string[]=ararw1.slice(0,2);
// let arar1:string[] =ararw1.splice(2);
// console.log(ararw1);
// Array1.map((item)=>(console.log(` sorry i am not invited to you ${item}`)
// ));
// arar1.map((item)=>(console.log(`${item} you still invited`)
// ));
// arar1.splice(0);
// console.log(arar1);
// 17th
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// //
// var new_Guest_List= [ "owais shah' I invite you to dinner at 7pm sharp 'please came'",
// "zeeshan abbasi is invited to dinner at 7pm sharp'please came",
// "sufiyan' I invite you to dinner at 7pm sharp 'please came'",
// "syed hassan' I invite you to dinner at 7pm sharp 'please came'",
// "shahmeer' I invite you to dinner at 7pm sharp 'please came'",
// "daniyal' I invite you to dinner at 7pm sharp 'please came'",
// "Moni' I invite you to dinner at 7pm sharp 'please came'",
// "Monti' I invite you to dinner at 7pm sharp 'please came'",
// "bilal' I invite you to dinner at 7pm sharp 'please came'"];
// console.log("i just invite two people for dinner.");
// new_Guest_List.splice(2);
// console.log(new_Guest_List);
// new_Guest_List.pop("sufiyan' I invite you to dinner at 7pm sharp 'please came'",
// "syed hassan' I invite you to dinner at 7pm sharp 'please came'",
// "shahmeer' I invite you to dinner at 7pm sharp 'please came'",
// "daniyal' I invite you to dinner at 7pm sharp 'please came'",
// "Moni' I invite you to dinner at 7pm sharp 'please came'",
// "Monti' I invite you to dinner at 7pm sharp 'please came'",
// "bilal' I invite you to dinner at 7pm sharp 'please came'");
// console.log("sorry I'm not invited them to dinner");
// console.log( "owais shah' I invite you to dinner at 7pm sharp please came.",
// "zeeshan abbasi is invited to dinner at 7pm sharp please came.");
// new_Guest_List.pop("owais shah' I invite you to dinner at 7pm sharp please came.",
// "zeeshan abbasi is invited to dinner at 7pm sharp please came.");
// console.log(new_Guest_List);
//18
//Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// var favorit_Place=["Arab","america","newyork","england"];
// console.log(favorit_Place);
// for(var k=0; k<=favorit_Place.length; k++){
//     console.log(k);
// }
// for(var e=0; e<=favorit_Place.length; e++){
//     console.log(favorit_Place[e]);
// }
// for(var a=favorit_Place.length; a>0; a--){
//     console.log(a);
// }
// for(var b=favorit_Place.length; b>0; b--){
//     console.log(favorit_Place[b]);
// }
// console.log(favorit_Place);
//  favorit_Place.reverse()
// console.log(favorit_Place);
//   favorit_Place.sort();
//  console.log(favorit_Place);
//19th
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// //
//  let arar:string[]=["hasaan","mushahid","daniyal",];
//  arar.map((item)=>(console.log(`${item},I like to  invite you to dinner`)
// ))
// // 
//  let ararw:string[]=["hasaan","mushahid","daniyal",];
//  ararw.map((item)=>(console.log(`${item},I like to  invite you to dinner`)
//   ))
//  let arr:string[]=["hasaam","mujahid","aijaz"];
//  arr.map((item)=>(console.log(`${item}, i forget to invite sorry i invite you to diiner tonight.`)
//  ));
// console.log(`${ararw},${arr}`);
// //
//   let ararw1:string[]=["hasaan","mushahid","daniyal",];
//  let caomot:string="mushahid";
// console.log(caomot+" "+"can not make dinner")
// ararw1.unshift("moni");
// ararw1.splice(0,1,"huzaifa");
// ararw1.push("ali");
// ararw1.map((item)=>(console.log(`dear  ${item} come to diiner`)
// ));
// //
// let ararw11:string[]=["hasaan","mushahid","daniyal",];
//   let caomot1:string="mushahid";
//  console.log(caomot1+" "+"can not make dinner")
//   ararw11.unshift("moni");
//   ararw11.splice(0,1,"huzaifa");
//   ararw11.push("ali");
//   ararw11.map((item)=>(console.log(`dear  ${item} come to diiner`)
//   ));
//   console.log("i invite only two people for dinner");
//  let Array1:string[]=ararw1.slice(0,2);
// let arar1:string[] =ararw1.splice(2);
// console.log(ararw1);
// Array1.map((item)=>(console.log(` sorry i am not invited to you ${item}`)
// ));
// arar1.map((item)=>(console.log(`${item} you still invited`)
// ));
// arar1.splice(0);
// console.log(arar1);
// // 
// let atr=arar.concat(arr,ararw11);
// console.log(atr.length);
//20th
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//20
// var all_Array=["k2 mountain","mount everist","indus river","punjab river","Pakistan","India","Iran","England",
// "America","urdu","english","franch","chines","Hyderabad","Karachi","Lahore","Mirpurkhas",];
// console.log(all_Array);
//21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let object=[{mountain:"k2"},{mountain:"everist"},{river:"indus"},{river:"punjab"},{country:"pakistan"},{country:"iran"},
// {country:"england"},{country:"america"},{language:"urdu"},{language:"english"},{language:"french"},{language:"chines"},
// {city:"Hyderabad"},{city:"lahore"},{city:"karachi"},{city:"mirpurkhas"}];
//  //22th
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// let programming_language:string[]=["HTML","CSS","JAVA","JAVASCRIPT","Typescript"];
// console.log(programming_language[6]); 
// console.log(programming_language[4]);
// console.log(object);
// //23 true
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let cars="subaru";
// console.log('is cars=="subaru" | predict true.');
// console.log(cars=="subaru");
// let bike=125;
// console.log('is bike ==125 |predict true');
// console.log(bike==125);
// let book="java";
// console.log('is book =="java" |predict true');
// console.log(book=="java");
// let books="script";
// console.log('is books =="script" |predict true');
// console.log(books =="script");
// let book1="java script";
// console.log('is books1 =="java script" |predict true');
// console.log(book1 ==" java script");
// let book2="typescript";
// console.log('is book2=="typescript" |predict true');
// console.log(book2=="typescript");
// // falase
// let cars1="subaru";
// console.log('is cars1=="subaru" | predict true.');
// console.log(cars1 !=="subaru");
// let bik=125;
// console.log('is bik ==125 |predict true');
// console.log(bik !==125);
// let bok="java";
// console.log('is bok =="java" |predict true');
// console.log(bok!=="java");
// let boks="script";
// console.log('is boks =="script" |predict true');
// console.log(boks !=="script");
// let bo1k1="java script";
// console.log('is boks1 =="java script" |predict true');
// console.log(bo1k1 !=="java script");
// let bok4="typescript";
// console.log('is bok4=="typescript" |predict true');
// console.log(bok4 !=="typescript");
//  //24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// let camp=5;
// let camp1=6;
// console.log(camp==camp1);
// console.log(camp<=camp1);
// console.log(camp===camp1);
// console.log(camp>=camp1);
// console.log(camp!==camp1);
// console.log(camp<camp1);
// console.log(camp>camp1);
// let camp2=5;
// let camp3="6";
// console.log(camp2==5);
// console.log(camp3==="6");
// let cam4="owais";
// let cam5=152;
// console.log(cam5==cam5);
// console.log(cam4===cam4);
// let cam6="OWAIS";
// let cam7="owais";
// console.log(cam6==cam7);
// console.log(cam6===cam7);
// let lowe="owais shah";
// let lowe1="OWAIS SHAH";
// if (lowe==lowe1){
//     console.log("false");
// }
// else{
//     console.log("true");
// }
// let lower1="owais shah";
// let lower2="OWAIS SHAH";
// if (lower1==lower2 ||lower1==lower2 ){
//     console.log("TRUE");
// }
// else{
//     console.log("false");
// }
// let fee=50;
// if(fee<=100 || fee<=50){
//     console.log("grade D");
// }
// else if(fee<=70 || fee<=70){
//     console.log("grade B");
// }
// else{
//     console.log("failed");
// }
// let drive=18;
// if(drive>=20 && fee<=40){
//     console.log("qualify the licence");
// }
// else{
//     console.log("not pass ");
// }
// let whetherfind=[11,25,34,40,58];
// let arr1find= whetherfind.indexOf(55);
// console.log(arr1find+ " not found");
// //
// var scor=80;
// if(scor>=50){
//     console.log("pass");
// }
// else{
//     console.log("fail");
// }
// var num1=8;
// if(num1==5||num1 >8 || num1 < 4|| num1<=2){
// console.log(num1);
// }
// else{
//     console.log(false);
// }
// var num2="5";
// if(num2==="5"){
//     console.log("equality");
// }
// else{
//     console.log("inequality");
// }
// var lower="lowercase";
// if(lower==="LOWERCASE"){
//     console.log("equal");
// }
// else{
//     console.log("not equal");
// }
// var tset=80;
// if(tset==75){
//     console.log("garde = 1st");
// }
// else if(tset===70){
//     console.log("garde = 2nd");
// }
// else if(tset>=65){
//     console.log("garde = 3rd");
// }
// else if(tset<=60){
//     console.log("garde = 4th");
// }
// else if(tset!=55){
//     console.log("garde = 5th");
// }
// else if(tset<50){
//     console.log("garde = 6th");
// }
// else if(tset>45){
//     console.log("garde = 7th");
// }
// //25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// var alien_Color="green";
// if(alien_Color==="yellow"||alien_Color==="green"||alien_Color==="red"){
// console.log("whether the alien's color is green");
// if(alien_Color==="green"){
//     console.log("earned 5 points");
// }
// }
// //26 
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// let alien1_Color="green";
// if(alien_Color==="yellow"||alien_Color==="green"||alien_Color==="red"){
// console.log("wheather color is green");
// if(alien1_Color==="green"){
//     console.log("earned 5 points for shooting the align");
// }
// }
// let alien2_Color="yelleo";
// if(alien_Color==="yellow"||alien_Color==="green"||alien_Color==="red"){
// console.log("alien's color is not green");
// if(alien2_Color==="green"){
// console.log("alighn green color");
// }
// else{
//     console.log("player earned 10 points");
// }
// }
// if(10<20){
//     console.log("if block run");
// }
// else{
//     console.log("else block run");
// }
// //27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// let alighn1_Color="green";
// if(alighn1_Color=="green"){
//     console.log("player earnd 5 point");
// }
// let alighn2_Color="yellow";
// if(alighn2_Color=="yellow"){
//     console.log("player earnd 10 point");
// }
// let alighn3_Color="red";
// if(alighn3_Color=="red"){
//     console.log("player earnd 15 point");
// }
// let color_align="green";
// if(color_align=="green"){
//     console.log("green");
// }
// else if(color_align<="yellow"){
//     console.log("yellow");
// }
// else if(color_align<="red"){
//     console.log("red");
// }
// else{
//     console.log("not color");
// }
// //28
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// let age_person=1;
// if(age_person<2){ 
//     console.log("person is baby"); 
// } 
// else{
//     console.log("not baby");
// }
// let age5_person=2;
// if(age5_person=2 || age5_person<4){
//     console.log("person is a toddler");
// }
// let age1_person=8;
// if(age1_person=4 || age1_person<13){ 
//     console.log("person is a kid"); 
// } 
// else{
//     console.log("not baby");
// }
// let age2_person=13; 
// if(age2_person=13 || age2_person<20){ 
//     console.log("person is a teenager "); 
// } 
// else{
//     console.log("not baby");
// }
// let age3_person=20;
// if(age3_person=20 || age3_person<65){ 
//     console.log("person is a adult "); 
// } 
// else{
//     console.log("not baby");
// }
// let age4_person=65;
// if(age4_person=65 || age4_person<65){ 
//     console.log("person is a elder"); 
// } 
// else{
//     console.log("not baby");
// }
// //29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
//
// let favorite_fruits=["mango","blackberry","pinapple","banana","orange",]
// let input="mango";
//  let found=false;
//  for( let fr=0; fr<=favorite_fruits.length; fr++){
//     if(favorite_fruits[fr]===input){
//         console.log("found ");
//         found=true;
//         break;
//     }
//  }
//  if(found==false){
//     console.log("not found");
//  }
//  let favorite1_fruits=["summer==mango","summer==blackberry","automn==pinapple"];
//  for(let lo=0; lo<=favorite1_fruits.length; lo++)
// {
//     if(favorite1_fruits[lo]=="summer==mango"){
//         console.log("yes i really like mango ");
//     }
//     if(favorite1_fruits[lo]=="automn==pinapple"){
//         console.log("yes i really like pinapple ");
//     }
//     if(favorite1_fruits[lo]=="summer==blackberry"){
//         console.log("yes i really like blackberry ");
//     }
// }
// //30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// let employ:string[]=["Admin","owais shah","hassan","daniyal","faizan","shehroz"];
// for(let i=0;i<employ.length;i++){
//     if(employ[i]==="Admin") {
//         console.log("hello admin, would you like to see a status report?");
//     }
//     else{
//         console.log(`hello ${employ[i]}`);
//     }
// }
// let employ_User1:string[]=["eric","fatima","ali","haseeb","admin"]
//         for(let user of employ_User1){
//             if(user=="Admin"){
//                 console.log("hello admin, would you like to see a status report?");
//             }
//             else{
//                 console.log(`hello ${user},thank you for loggin again`);
//             }
//         }
// //31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let employ_User:string[]=["Admin","owais shah","hassan","daniyal","faizan","shehroz"];
// if(employ_User.length===0)
// {
//     console.log("we need to find some user!");
// }
//  employ_User=[]
// if(employ_User.length===0){
//     console.log("we need to find some users!");
// }
// //32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//  let currunt_user:string[]=["Admin","daniyal","hasssan","sherooz","faizan"]
//  let new_user:string[]=["daniyal","hassan","shouib","asad","ali raza",]
//  let currunt_usrer_lower:string[]=currunt_user.map(user=>user.toLowerCase())
//  for(let new_user1 of new_user){
//     if(currunt_usrer_lower.includes (new_user1.toLowerCase())){
//         console.log(`sorry ${new_user1},that name is taken`);
//     }else{
//         console.log(`yes ${new_user1},is still in avaliable list`);
//     }
//  }
//33
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let numbers1:number[]=[1,2,3,4,5,6,7,8,9];
// for(let number of numbers1){
//     if(number===1){
//         console.log(`${number} st`);
//     }else if(number===2){
//         console.log(`${number} nd`);
//     }else if(number===3){
//         console.log(`${number} rd`);
//     }else(number===4){
//         console.log(`${number} th`);
//     }
// }
// //34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// let pizzas=["spicy pizza","miyoneese pizza","no mayoniz pizza"];
// for(let foavorite=0; foavorite<pizzas.length; foavorite++){
// let a="I like "
//     console.log(a+pizzas[foavorite]);
// }
// let piz='I like this pizza because this type of pizza have "spiceness pizza","such as I really love pizza.';
// let piz1='I like this pizza because this type of pizza have "miyoneese pizza","such as I really love pizza.';
// let piz2='I like this pizza because this type of pizza have "no mayoneeze pizza","such as I really love pizza.';
// console.log(piz);
// console.log(piz1);
// console.log(piz2);
// console.log('my favorite $(piza).');
// //35th
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let animal:string[]=["cat","lion","dog"]
// for(let animals of animal){
//     console.log(animals);
// }
// console.log("\n");
// for(let animals of animal ){
//     console.log(`A ${animals},has a tail`);
// }
// console.log("\n all of these great pets but i love dog more");
//36th
//
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function makeshirt(size:string,text:string):void {
//     console.log(`you order a ${size} shirt that says ${text}`);
// }
// makeshirt('large','"i love python"')
// makeshirt('medium','"i need a big shirt"')
// //37TH
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function makeshirt(size:string="larg",text:string="i love typescript") {
//     console.log(`you order a ${size} shirt that says ${text}`);
// }
// makeshirt()
// makeshirt("medium")
// //different messag
// makeshirt('small','i need a big shirt to wear ')
//38th
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function decribe_city(city:string,country:string='pakisan'):void {
//     console.log(`${city} is in ${country}`);
// }
// decribe_city('hyderabad')
// decribe_city('france','europe')
// decribe_city('lahore',' punjab')
//39th
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
//
// function make_album(artist:string,title:string): {artist:string,title:string}{
//     let dictionary={
//         artist:artist.charAt(0).toUpperCase()+artist.slice(1),
//         title:title.charAt(0).toUpperCase()+title.slice(1)
//     }
//     return dictionary;
// }
// let album=make_album("ali","light")
// console.log(album);
//  album=make_album("bilal","red wave")
// console.log(album);
// album=make_album("humza","seenbreez")
// console.log(album);
//40th
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// function show_magician(magician:string[]): void {
//     for(let magicians of magician){
//         console.log(magicians.charAt(0).toUpperCase()+magicians.slice(1));
//     }
// }
// const magicians:string[]=["ali","humza","mushaid"];
// show_magician(magicians)
//41th
//
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//
// function make_great(magicians:string[]):void {
//     for( let i=0;i<magicians.length; i++){
//         magicians[i] = magicians[i]  + " the  great "
//     }
// };
// const magicians2:string[]=["usman","haseeb","wajahat"];
// make_great(magicians2);
// show_magician(magicians2);
//42th
//
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//
// function show_magician(magician:string[]): void {
//     for(let magicians of magician){
//         console.log(magicians.charAt(0).toUpperCase()+magicians.slice(1));
//     }
// }
// function make_great2(magician:string[]): string[]{
//     const greatmagicain:string[]=[];
//     for( let i=0;i<magician.length;i++){
//         greatmagicain.push(magician[1]+ ' the great');
//     }
//     return greatmagicain;
// }
// const magicain3:string[]=["raza","wajahat","haseeb"];
// const great_magician2:string[]=make_great2(magicain3);
// show_magician(magicain3)
// show_magician(great_magician2)
//44th
// //
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// //
// function sandwich(...item:string[]):void {
//     console.log("sandwich order:");
//     for(let i=0;i<item.length;i++){
// console.log(`-${item[i]}`);
//     }   
// }
// console.log("enjoy your sandwich owais shah");
//     sandwich('capsicum','tomato','chechen')
//     sandwich('beef','cheese')
//     sandwich('garlic chicken','mayo souce')
//45th
// //
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// type car={
//     manufacture:'string'
//     model:'string'
//     [key:string]:any;
// }
// function createcar(manufacture:string,model:string,optional:Record<string,any>):car {
//     return{
//         manufacture,
//         model;
//         ...optional
//     }
// }
// const mycar:car=createcar('toyota','corola',{color:'silver',year :'2024'})
// console.log(mycar);
