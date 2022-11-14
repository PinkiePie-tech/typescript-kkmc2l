// Import stylesheets
import { firstNames, names } from './data';
import { Person } from './interface';
import './style.css';

function generateRandomUser(size: number): Person[] {
  var users: Person[] = [];
  for (var i = 0; i < size; i++) {
    users.push({
      name: names[getRandomInt(names.length)],
      firstName: firstNames[getRandomInt(firstNames.length)],
      dateOfBirth: new Date(
        `${getRandomInt(122, 1900)}-${getRandomInt(12)}-${getRandomInt(28)}`
      ),
      size: getRandomInt(90, 120),
      weight: getRandomInt(80, 40),
    });
  }
  return users;
}

function getRandomInt(max, start = 0) {
  return start + Math.floor(Math.random() * max);
}

// Ici on génère le nombre d'utilisateur aléatoire
var users = generateRandomUser(100);

console.log('Liste des utilisateurs', users);

// Le code au dessus permet de générer aléatoirement des gens, avec nom prénom, date de naissance, taille et poids. Nous allons donc travailler avec cette petite liste de nom :D
// Le hasard est une chose magnifique, y aura t'il des homonymies ? des gens avec le même nom ? voir le même prénom ? Et bien tout ça, on va le coder :D

// Première étape: les tris

/*
 **
 ** 1°) Trier la liste par la taille
 **
 */

/*
 **
 ** 2°) Trier la liste par le nom
 **
 */

/*
 **
 ** 3°) Trier la liste par la date de naissance
 **
 */

/*
 **
 ** 4°) Trier la liste par le nom et prénom
 **
 */

// deuxième étape, les filtres

/*
 **
 ** 1°) afficher uniquement les gens ayant une taille supérieur à 1m60
 **
 */

/*
 **
 ** 2°) afficher uniquement les gens ayant une taille supérieur à 1m60 et pesant moins de 80kg
 **
 */

/*
 **
 ** 3°) afficher uniquement les gens nés après le 15 janvier 1984
 **
 */

/*
 **
 ** 4°) afficher uniquement les 20 dernières personnes de la liste
 **
 */

// troisème étape, la transformation de données

/*
 **
 ** 1°) créer une nouvelle liste ne comprenant que le nom et le prénom
 **
 */

/*
**
** 2°) créer une nouvelle liste contenant que les gens de plus d'1m84 et sous le format nom, prenom, age (et non pas date de naissance)
Cela correspondra à l'interface 'shortDescription' écrite dans le fichier interface.ts
**
*/

/*
 **
 ** 3°) créer une nouvelle liste suivant l'interface 'longDescription' permettant de transformer la 'size' en un string de la forme "1m22" pour un number comme "122"
 **
 */

/*
 **
 ** 4°) créer une nouvelle liste suivant l'interface 'completeDescription'
 **
 */
