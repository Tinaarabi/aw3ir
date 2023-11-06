window.onload = () => { // https://developer.mozilla.org/fr/docs/Web/API/Window/load_event
    const paramsString = document.location.search; // récupérer des données envoyées par le formulaire
    console.log(paramsString)
    const searchParams = new URLSearchParams(paramsString); // https://developer.mozilla.org/fr/docs/Web/API/URLSearchParams
    console.log("apres avoir ajouter a la fonction URL Searchparams")
    console.log(searchParams)
    // Iterating the search parameters
    for (const param of searchParams) {
      console.log(param);
          // param est une liste ou le premier element param 0 est id et le deuxieme id 1 est value 

  
      const elementId = param[0];
      const elementValue = param[1];
      const element = document.getElementById(elementId);
      console.log(elementId)
      if (element !== null) {
        element.textContent = elementValue;
      }
      
      if (param[0] === "address") {
         element.href = `https://www.google.com/maps/search/?api=1&query=${elementValue}`;
      } else if (param[0] === "email") {
         element.href = `mailto:${elementValue}?subject=Hello!&body=What's up?`;
      }
    }


              // si tu veux selectionner un element et ajouter un text a l interieur supprime ca si tu veux que ca marche avec le code du prof

   //  const element = document.getElementById("mail");
    //  element.textContent = 'ttttttttt';

  };