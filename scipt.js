$(document).ready(function(){
   // $("#redirection").click();
   var buy=0;
   var dansPanier=[];
   $(".ajouter").click(function(){

      let articles=$(this).siblings(".articles").text();
      let prix=$(this).siblings(".supPrix").text();

      let comparer=dansPanier.find(item=>item.article===$(this).siblings(".articles").text());

      if(comparer){
        let carticle = $(this).siblings(".articles").text();
        let car=dansPanier.find(item=>item.article===$(this).siblings(".articles").text()).nombre;
        car+=1;
        dansPanier.find(item=>item.article===$(this).siblings(".articles").text()).nombre=car;
        
      }
      else{
        let newTab={"article":articles,"prix":prix,"nombre":1};
        dansPanier.push(newTab);
        
        console.log(dansPanier);
      }
      function anim(){
        //eto farany
      }
      buy+=1;
      $(".countP").text(buy);
   });
   //modal manomboka eto
   // script.js

// Récupère les éléments de la modale et des boutons
let modal = document.getElementById("modal");
let openModalBtn = document.getElementById("openModal");
let closeModalBtn = document.getElementById("closeModal");
//regex
function convertirEnInt(montant){
    return parseInt(montant.replace(/\D+/g, ""), 10);
}
//finregex

// Lorsque l'utilisateur clique sur le bouton "Ouvrir la modale"
openModalBtn.onclick = function() {
  //hide form if no article selected
if(buy==0){
  $("#formPayer").hide();
  }
  else{
    $("#formPayer").show();
  }
  
    modal.style.display = "block";
    $("#modalText").text("");
    $("#total").text("Facture:");
    var totalFacture=0;

    var counter=[];
    var nba=0;
    for(i=0;i<dansPanier.length;i++){
        
        let calc=convertirEnInt(dansPanier[i].prix);
        calc*=dansPanier[i].nombre;
        $("#modalText").append("<i id='"+dansPanier[i].article+"'>"+dansPanier[i].nombre+" "+dansPanier[i].article+":"+dansPanier[i].prix+" = "+calc+"Ar</i></br>");
        totalFacture+=calc;
        //debut fontin separateur de millier
        function separateurMil(havadika){
        var totalString=""+havadika;
        var temp="";
        var triple=0;
        var len=totalString.length;
        len-=1;
        for(len;len>=0;len--){
          triple++;
          if(triple==3){
            temp+=totalString[len];
            temp+=" ";
            triple=0;
          }
          else{
          temp+=totalString[len];
          }
        }
        var retur="";
        for(lenr=temp.length-1;lenr>=0;lenr--){
          retur+=temp[lenr];
        }
        return retur;
        }
        var fmg=totalFacture*5;
        var fmgSepar=separateurMil(fmg);
        var az=separateurMil(totalFacture);
        //fin fonction separateur de millier
        $("#total").text("Facture: "+az+"Ar = "+fmgSepar+"Fmg");
       // $("#total").text("Facture: "+temp+"Ar");
       
  }
  }

// Lorsque l'utilisateur clique sur le bouton de fermeture (X)
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Lorsque l'utilisateur clique en dehors de la modale, la fermer
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//farany modal
var modalText=$("#modalText").text();

console.log(modalText);

$("#afect").click(function(){
  $("#openModal").click();
});

});