# artur.art_wordpress_elementor

1) CRÉER LA BRANCHE 

  Scénario A : vous ajoutez une nouvelle page qui n'existe pas déjà dans le dépôt. 
  Scénario B : vous modifier une page qui existe déjà (publiée ou non)
    Commencez par créer une branche à partir de la branche main

  Dans les deux cas, vous devez utiliser la commande suivante : git switch -c "nom_de_la_branche" 

  Votre branche doit être nommée comme ceci : 
    
    votrePrénomPremièreLettreNomFamille_nomDeLaPageUneFoisPubliée_raison 

  La dernier paramètre "raison" correspond soit à "création" ou "modification"
    Création : vous rajoutez un dossier pour une page qui n'était pas là ou si vous crééz un fichier js qui n'était pas là, 
    Modification : vous modifiez un fichier js déjà créé. 

  Par exemple, voici un nom de branche valide :
        NicolasB_achat-2_création

2) SEULEMENT SI VOUS AJOUTEZ UNE PAGE QUI N'ÉTAIT PAS DANS LE DÉPÖT

Si vous créez une nouvelle page qui n'était pas déjà là, alors vous devez faire ceci : 
  - Renommer le dossier "nouvelle_page" et lui donner le nom correspondant à la page quand elle sera publiée sur le site. 
  - Renommer le fichier javascript situé à l'intérieur de ce dossier et lui donner le numéro d'id que vous retrouverez quand vous éditez la page avec Elementor. 
  
Par exemple, quand on modifie la page image-generation-3, on obtient l'id de la page dans l'URL : https://artur.art/wp-admin/post.php?post=47170&action=elementor . 

Alors le nom du fichier js sera donc 47170.js.

3) ÉCRIRE LE CODE JAVASCRIPT 

C'est désormais le temps d'écrire le code javascript. 

Trois scénarios possibles : 
- Vous créez la page et la page n'est pas publiée sur le site : vous pouvez alors écrire le code javascript directement dans la page vu qu'elle n'est pas encore publiée. 
- La page est déjà créée mais pas encore publié sur le site : alors vous devez créer une copie de la page et modifier la copie de la page.     
- La page est déjà publiée sur le site : alors vous devez créer une copie de la page et modifier la copie de la page.    

4) FAIRE RÉVISER LE CODE 

Une fois que vos modifications sont fonctionnelles et que vous êtes prêts à faire valider le code, vous devez faire une demande de fusion avec la branche main. Vous ne pouvez pas l'approuver vous-même. Vous devez attendre d'avoir l'autorisation. 

Rappel sur les demandes de fusion : https://discord.com/channels/1097611222981038220/1097639101349515395/1321744760993615883

5) RAPPELS : 
  - Chaque page Wordpress aura un dossier correspondant dans Github. 
  - Il n'y aura qu'un seul bloc javascript par page. Ça doit être le dernier en-bas dans 'Navigateur' dans elementor. En créer plusieurs sans autorisation ou rajouter du code javascript dans d'autres blocs sera puni car cela créer du désordre et nuit au travail collaboratif.  
  - Vous devez faire vos modifications dans une copie de la page (celle qui est publiée ou considérée comme la version de référence). 
  - Vous ne modifiez jamais sans approbation la page principale. 
  - Les pages déjà existantes sans dossier/bloc js elementor doivent l'être éventuellement.

- Nicolas Bergeron.
