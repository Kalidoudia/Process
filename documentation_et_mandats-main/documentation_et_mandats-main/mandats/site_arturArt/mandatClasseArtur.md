# Modifier la classeClient pour 2024/01/10

## Informations générales 
### Qui ? 
- N'importe qui. Avertir quand prendre en charge
### Où remettre les documents ?
- Créez un dossier avec le nom du mandat dans ce dossier 
### Créer, modifier ou analyser ? 
- Créer un diagramme de classe avec PlantUML.

### Outils ou plateformes à utiliser : 
- VsCode, javascript et plantUML
- [Documentation PlantUML](https://plantuml.com/fr/guide)
- [Expérimenter avec PlantUML](https://www.plantuml.com/plantuml/uml/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000)
- [Utiliser PlantUML dans VSCODE](https://medium.com/@sadaf.cuagain/configuring-and-running-plantuml-with-vs-code-8f2f6e64bb8d)

## Détails techniques : 

#### Point de vue utilisateur 
- En tant que visiteur de la page, je veux conserver les informations du panier d'item à travers les pages pour conserver l'historique de mes choix.

#### Point de vue système  
- ...   

### Scénarios 
- Nominaux :   
  ### Tests pour valider (Syntaxe Gherkins : https://cucumber.io/docs/)
  - Étant donné un input valide, lorsqu'on sauvegarde l'information, c'est sauvegardé dans le localstorage.
    
- Limites : 
   ### Tests pour valider (Syntaxe Gherkins : https://cucumber.io/docs/)
  - Étant donné un input à la limite du nombre de caractères, lorsqu'on sauvegarde l'information, c'est sauvegardé dans le localstorage. 

- Exception : 
   ### Tests pour valider (Syntaxe Gherkins : https://cucumber.io/docs/)
  - Étant donné un input invalide, lorsqu'on tente de sauvegarder l'information, on ne sauvegarde pas l'information dans le localstorage et on affiche un avertissement à l'utilisateur.


### Autres documents à réaliser : 
- Diagramme de classe avec plantuml 


### Commentaires additionnels  
- ...