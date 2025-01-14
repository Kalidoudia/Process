#!/bin/bash

# Check if at least one branch is provided
if [ $# -eq 0 ]; then
  echo "Vous devez au moins entrer un nom de branche: $0 <nom_branche_un> [nom_branche_deux ...]"
  exit 1
fi

# Initialize index
index=0
index_pas_archive=0
index_archive=0

for nom_branche in "$@"; do
  echo
  echo "----- Traitement de la branche #$((index + 1)) : $nom_branche"
  index=$((index + 1))

  # Vérifier si la branche existe sur le dépôt distant
  if git ls-remote --exit-code --heads origin "$nom_branche" > /dev/null; then
    echo "  La branche '$nom_branche' existe sur le dépôt distant."
  else
    echo "  La branche '$nom_branche' n'existe pas sur le dépôt distant."
    index_pas_archive=$((index_pas_archive + 1))
    continue
  fi

  # Create tag, push it, delete local branch, and delete remote branch
  git switch -c "$nom_branche"
  git switch main
  git tag "archive/$nom_branche" "$nom_branche"
  git push origin "archive/$nom_branche"
  git branch -D "$nom_branche"
  git push origin --delete "$nom_branche"

  index_archive=$((index_archive + 1))

  echo "  !!! La branche locale et la branche distante $nom_branche ont été archivées et effacées !!!"

  # Increment index
  index=$((index + 1))
done

echo
echo "---------------------------RÉSULTAT FINAL---------------------------" 
echo "****----  Nombre de branches traitées      : $index"
echo "****----  Nombre de branches archivées     : $index_archive"
echo "****----  Nombre de branches pas archivées : $index_pas_archive"
echo
echo "Voici les branches distantes disponibles :"
git ls-remote --heads origin
echo