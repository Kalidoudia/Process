# Action selon présence ou absence de certaines données partagées dans la classe client pour 2024/01/14

## Informations générales 
### Qui ? 
- N'importe qui. Avertir quand prendre en charge
### Où remettre les documents ?
- Créez un dossier avec le nom du mandat dans ce dossier 
### Créer, modifier ou analyser ? 
- Créer un diagramme d'action avec PlantUML.

### Outils ou plateformes à utiliser : 
- VsCode, javascript et plantUML
- [Documentation PlantUML](https://plantuml.com/fr/guide)
- [Expérimenter avec PlantUML](https://www.plantuml.com/plantuml/uml/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000)
- [Utiliser PlantUML dans VSCODE](https://medium.com/@sadaf.cuagain/configuring-and-running-plantuml-with-vs-code-8f2f6e64bb8d)

## Détails techniques : 

#### Point de vue utilisateur 
- En tant que visiteur de la page, lorsque je veux générer une image, je veux être redirigé vers la bonne page ou être avertit avant lorsque je n'ai pas toutes les informations (et que je n'ai pas passé à travers toutes les pages requises).

#### Point de vue système  
- ...   

### Scénarios 
- Nominaux :   
  ### Tests pour valider (Syntaxe Gherkins : https://cucumber.io/docs/)
  - Étant donné un utilisateur qui n'a pas..., lorsqu'il tente de générer une image, quatre images sont générées.
    
- Limites : 
   ### Tests pour valider (Syntaxe Gherkins : https://cucumber.io/docs/)
  - Étant donné un utilisateur qui a mais pas..., lorsqu'il tente de générer une image, quatre images sont générées.

- Exception : 
   ### Tests pour valider (Syntaxe Gherkins : https://cucumber.io/docs/)
  - Étant donné un utilisateur qui n'a pas..., lorsqu'il tente de générer une image, il reçoit une alerte et est redirigé ou ?.


### Autres documents à réaliser : 
- Diagramme de classe avec plantuml 


### Commentaires additionnels  
- ...