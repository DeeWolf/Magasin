
/*Easte Eggs Konami code  */

let code = ['k','o','n','a','m','i','c','o','d','e'];
count = 0;

/*Fonction pour désactiver  */
function shutdown(){
    document.addEventListener('keydown', function (event) {
        for (let i = 0; i < 10; i++) {
            if (event.key === code[i] && count === i){
                count++;
                if (count === 10) { 
                    document.querySelector('table').textContent = 'Bien joué ! Tu as trouvé l\'Easter Egg ! ';                   
                }
            }
        }                
    });
}

/* Bonus n°2 : Vider le panier */ 
function forclear(){   
    /*Créer un array avec les élements portant la classe "item_name" & "item_sstotal" */
    var valueList = document.getElementsByClassName("item_name");
    var ssTotalList = document.getElementsByClassName("item_sstotal");
    var output = document.getElementById("sortie");
    /*
    Si la longueur du tableau n'est pas nulle 
    Alors on boucle sur le tableau jusqu'à arriver au dernier élement 
        Pour chaque élèment, on change la valeur à 0
    Sinon 
        message d'erreur dans la console java
    */
    if (valueList.length > 0 ){
        for (var h=0; h < valueList.length ;h++){
            valueList[h].value = "0";
        }
    } else {
        console.log("classe item_name non trouvée");
    }

    if (ssTotalList.length > 0 ){
        for (var h=0; h < valueList.length ;h++){
            ssTotalList[h].textContent = "0$";
        }
    } else {
        console.log("classe item_name non trouvée");
    } 
    
    output.textContent =  0 + " $ ";
    output.setAttribute("style", "color:black");
}


/*Fonction de calcul  */
function calculatePrice(){  
    var totalQuantite = 0 ;
    
    var quantite1 = parseInt(document.getElementById("petiteration").value);
    var quantite2 = parseInt(document.getElementById("grosseration").value);
    var quantite3 = parseInt(document.getElementById("epee").value);
    var quantite4 = parseInt(document.getElementById("bouclier").value);
    var quantite5 = parseInt(document.getElementById("potion").value);
    var quantite6 = parseInt(document.getElementById("sacdetoile").value);
    
    var prix1 = quantite1 * 2; 
    var prix2 = quantite2 * 8; 
    var prix3 = quantite3 * 20;  
    var prix4 = quantite4 * 15;  
    var prix5 = quantite5 * 5; 
    var prix6 = quantite6 * 1;
    var output = document.getElementById("sortie"); 
    
    var totalQuantite = parseInt(prix1 + prix2 + prix3 + prix4 + prix5 + prix6);

    var totalValue = quantite1 + quantite2 + quantite3 + quantite4 + quantite5 + quantite6; 
    

    /*Bonus n°1 : Afficher total en instantané  */
    output.textContent = totalQuantite + " $ ";
    
    /*Bonus n°3 : Affichage des sous-totaux des prix */
    document.getElementById("soustotal1").textContent = prix1 + "$"; 
    document.getElementById("soustotal2").textContent = prix2 + "$";
    document.getElementById("soustotal3").textContent = prix3 + "$";
    document.getElementById("soustotal4").textContent = prix4 + "$";
    document.getElementById("soustotal5").textContent = prix5 + "$";
    document.getElementById("soustotal6").textContent = prix6 + "$";


    /*Bonus n°5 : changement de couleur suivant le résultat  */

    if (totalQuantite > 0 && totalQuantite < 50){
        output.setAttribute("style", "color:green");
    } else if (totalQuantite >= 50 && totalQuantite <= 75){
        output.setAttribute("style", "color:orange");
    } else if (totalQuantite > 75){
        output.setAttribute("style", "color:red");
    } else {
        output.setAttribute("style", "color:black");
    }

    /* Bonus n°4 : convertir petites rations en grandes rations*/ 

    if (quantite1 >= 5){
        document.getElementById("grosseration").value++ ;
        document.getElementById("petiteration").value = 0;
        document.getElementById("soustotal1").textContent = document.getElementById("petiteration").value *2 + "$"; 
        document.getElementById("soustotal2").textContent = document.getElementById("grosseration").value *8 + "$";
        output.textContent = (totalQuantite-2) + " $ ";
        
    }
     /* Bonus n°6 : Limiter le panier à 15 articles */

    
    if (totalValue == 15) {
        document.getElementById("petiteration").setAttribute("max", quantite1);
        document.getElementById("grosseration").setAttribute("max", quantite2);
        document.getElementById("epee").setAttribute("max", quantite3);
        document.getElementById("bouclier").setAttribute("max", quantite4);
        document.getElementById("potion").setAttribute("max", quantite5);
        document.getElementById("sacdetoile").setAttribute("max", quantite6);
    }  else {
        document.getElementById("petiteration").setAttribute("max", 100);
        document.getElementById("grosseration").setAttribute("max", 100);
        document.getElementById("epee").setAttribute("max", 100);
        document.getElementById("bouclier").setAttribute("max", 100);
        document.getElementById("potion").setAttribute("max", 100);
        document.getElementById("sacdetoile").setAttribute("max", 100);  
    }   
}


shutdown();

calculatePrice();





