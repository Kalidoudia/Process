# Modèle de base d'un mandat (Remplacer par titre qui résume et date de remise au format 2024/01/01)

## Informations générales 
### Qui ? 
- N'importe qui. Avertir quand prendre en charge
### Où remettre les documents ?
- Pas nécessaire
### Créer, modifier ou analyser ? 
- Créer un diagramme d'action avec PlantUML afin de démontrer et faire valider la logique qu'on veut implémenter.

### Outils ou plateformes à utiliser : 
- VsCode, javascript et plantUML
- [Documentation PlantUML](https://plantuml.com/fr/guide)
- [Expérimenter avec PlantUML](https://www.plantuml.com/plantuml/uml/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000)
- [Utiliser PlantUML dans VSCODE](https://medium.com/@sadaf.cuagain/configuring-and-running-plantuml-with-vs-code-8f2f6e64bb8d)

## Détails techniques : 

#### Point de vue utilisateur 
- En tant que visiteur de la page, je veux que le texte que j'ai entré dans l'input soit valide (pas vide et un minimum de lettres / mots).

#### Point de vue système  
- Utiliser une expression régulière pour valider l'input. S'il n'est pas valide, alors bloquer l'exécution du script avec un message à l'utilisateur.    

### Scénarios 
- Nominaux : 
  - ...  
  ### Tests pour valider (Syntaxe Gherkins : https://cucumber.io/docs/)
  - Étant donné un input valide, lorsqu'on appuie sur click, on exécute la fonction sans problème
    
- Limites : 
   ### Tests pour valider (Syntaxe Gherkins : https://cucumber.io/docs/)
  - Étant donné un input à la limite du nombre de caractères ou du nombre de mots ou du nombre de caractères, lorsqu'on appuie sur click, l'exécution de la fonction est exécutée sans problème.

- Exception : 
   ### Tests pour valider (Syntaxe Gherkins : https://cucumber.io/docs/)
  - Étant donné un input invalide, lorsqu'on appuie sur click, l'exécution de la fonction est interrompue avec un message d'erreur.


### Autres documents à réaliser : 
- Diagramme d'action avec plantuml pour 


### Commentaires additionnels  
- ...