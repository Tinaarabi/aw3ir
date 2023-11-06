window.onload = function () { 
     console.log( "DOM ready!" );

     const form = document.querySelector('form')
     
         form.addEventListener('submit', function(event) {
             event.preventDefault(); // Empêche la soumission du formulaire
     
             // Récupération des valeurs des champs
             const input1 = document.getElementById('name').value; 
             const input2 = document.getElementById('mail').value; 
             const input3 = document.getElementById('date').value; 
             const address = document.getElementById('adresse').value;
             
            
             // Vérification de la validation du formulaire
             let isValid = true;
     
             // Vérification de la longueur minimale des champs texte (minlength de 5)
             if (input1.length < 5) {
                 isValid = false;
             }
     
             // Vérification de la syntaxe de l'adresse e-mail
             function validateEmail(input2) {
                 const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                 return re.test(String(input2).toLowerCase());
             }
     
             if (!validateEmail(input2)) {
                 isValid = false;
             }
     
             // Vérification de la date de naissance
             const birthdayDate = new Date(input3);
             const nowTimestamp = Date.now();
     
             if (birthdayDate.getTime() > nowTimestamp) {
                 isValid = false;
             }

             var mapImage = document.getElementById('myImage');
             mapImage.innerHTML = '<img src="https://maps.googleapis.com/maps/api/staticmap?center=' + encodeURIComponent(address) + '&zoom=13&size=600x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg" alt="Google Map">';

                var googleMapsLink = document.createElement('a');
                googleMapsLink.setAttribute('href', 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address));
                googleMapsLink.setAttribute('target', '_blank');
                googleMapsLink.textContent = 'Voir sur Google Maps';
                mapImage.appendChild(googleMapsLink);
        

                //var modalBody = document.getElementById('tinou');
                //modalBody.textContent = '<p>  votre date de naissance est ' + input3 + 'et vous etes née ici </p>';

                //var modalTitle = document.getElementById("minou");
                //modalTitle.textContent = 'Bonjour ' + input1;












     
             // Affichage du modal approprié en fonction de la validation
             if (isValid) {
                
                //var mapImage = document.getElementById('myImage');
               // mapImage.innerHTML = '<img src="https://maps.googleapis.com/maps/api/staticmap?center=' + encodeURIComponent(address) + '&zoom=13&size=600x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg" alt="Google Map">';

                //var googleMapsLink = document.createElement('a');
                //googleMapsLink.setAttribute('href', 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address));
                //googleMapsLink.setAttribute('target', '_blank');
                //googleMapsLink.textContent = 'Voir sur Google Maps';
                //mapImage.appendChild(googleMapsLink);
        

                //var modalBody = document.getElementById('tinou');
                //modalBody.textContent = '<p>  votre date de naissance est ' + input3 + 'et vous etes née ici </p>';

                //var modalTitle = document.getElementById("minou");
               // modalTitle.textContent = 'Bonjour ' + input1;
    

                var validModal = new bootstrap.Modal(document.getElementById('validModal'));
                validModal.show(); }
               
              else {
                var invalidModal = new bootstrap.Modal(document.getElementById('invalidModal'));
                invalidModal.show();
       
             }
         });
    
     
     
         
}