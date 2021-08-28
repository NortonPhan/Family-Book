
var Family_Name = ["Eric Phan", "Alexie Le", "Chloe Phan",];
var Family_Image = ["https://image.shutterstock.com/image-vector/dad-text-mustache-logo-icon-600w-1500825275.jpg", "https://image.shutterstock.com/shutterstock/photos/583550794/display_1500/stock-vector-mom-letters-with-abstract-heart-ribbon-made-from-brush-stroke-hand-draw-brush-style-icon-design-583550794.jpg", "https://logos.flamingtext.com/Name-Logos/Sister-design-fluffy-name.webp", ];
var Family_Desc = ["Eric Phan is my dad! He is a caring father and can pretty much fix all of our problems. He's good at tech whenever the internet is down and is strong for the heavy lifting. He also works as a pharmacist! When he was young he was a black belt in Martial Arts and because of that, he signed me and my sister up to Taekwondo when we were young. He also encouraged us to spend more time outside and taught both me and my sister how to rise a bike without safety wheels. I think my dad is the best dad on planet Earth!"
, "Alexie Le is my mom. She is always supportive of whatever I do and cares for me and my sister constantly. Shes the one that drives us to the store and other places, she cooks and cleans for us, and she work at a nail salon! She can always clean up  my mistake, like if we drop a plate or spill a drink, she is always there to clean it up. She also takes us to our cousins' house almost every week in the summer for a few days. "
, "Chloe Phan is my sister. Shes a lot of fun to play with and sometimes is quite lazy! Like, sometimes it can be 3 PM and she only then goes down for breakfast. But shes responsible and cares for me when both of my parents were at work. If it wasnt for her, The whole house would have been burnt down just by a microwave." ];

var i = 0;
function update(){
   document.getElementById("labels").innerHTML = Family_Name[i];
   document.getElementById("famimage").src = Family_Image[i];
   document.getElementById("description").innerHTML = Family_Desc[i];

   if (i < Family_Name.length)
   {
       i++;
   }
   else
   {
       i=0;
       document.getElementById("labels").innerHTML = "My Family!";
       document.getElementById("famimage").src ="https://cdn.discordapp.com/attachments/756587319762354296/871871893903376425/unknown.png" ;
       document.getElementById("description").innerHTML = "Click The Button to See the Family!"
   }
}