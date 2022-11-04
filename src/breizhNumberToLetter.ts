// JavaScript Document
/****************************************************************************

________________________________________________________________________	*
	About 		:	Convertit jusqu'à  999 999 999 999 999 (billion)		*
					avec respect des accords								*
_________________________________________________________________________	*			
	Auteur  	:	GALA OUSSE Brice, Engineer programmer of management		*
	Mail    	:	bricegala@yahoo.fr, bricegala@gmail.com 										*
	Tél	    	:	+237 99 37 95 83/ +237 79 99 82 80										*
	Copyright 	:	avril  2007												*
_________________________________________________________________________	*

*/

function Unite(nombre: number): string {
  var unite = "";
  switch (nombre) {
    case 0:
      unite = "mann";
      break;
    case 1:
      unite = "unan";
      break;
    case 2:
      unite = "daou";
      break;
    case 3:
      unite = "tri";
      break;
    case 4:
      unite = "pevar";
      break;
    case 5:
      unite = "pemp";
      break;
    case 6:
      unite = "c'hwec'h";
      break;
    case 7:
      unite = "seizh";
      break;
    case 8:
      unite = "eizh";
      break;
    case 9:
      unite = "nav";
      break;
  } //fin switch
  return unite;
} //-----------------------------------------------------------------------

function Dizaine(nombre: number): string {
  var dizaine = "";
  switch (nombre) {
    case 10:
      dizaine = "dek";
      break;
    case 11:
      dizaine = "unnek";
      break;
    case 12:
      dizaine = "daouzek";
      break;
    case 13:
      dizaine = "trizek";
      break;
    case 14:
      dizaine = "pevarzek";
      break;
    case 15:
      dizaine = "pemzek";
      break;
    case 16:
      dizaine = "c'hwezek";
      break;
    case 17:
      dizaine = "seitek";
      break;
    case 18:
      dizaine = "triwec'h";
      break;
    case 19:
      dizaine = "naontek";
      break;
    case 20:
      dizaine = "ugent";
      break;
    case 30:
      dizaine = "tregont";
      break;
    case 40:
      dizaine = "daou-ugent";
      break;
    case 50:
      dizaine = "hanter-kant";
      break;
    case 60:
      dizaine = "tri-ugent";
      break;
    case 70:
      dizaine = "dek ha tri-ugent";
      break;
    case 80:
      dizaine = "pevar-ugent";
      break;
    case 90:
      dizaine = "dek ha pevar-ugent";
      break;
  } //fin switch
  return dizaine;
} //-----------------------------------------------------------------------

export default function breizhNumberToLetter(nombre: number): string {
  var n, quotient, reste, nb;
  var numberToLetter = "";

  nb = parseFloat(nombre.toString().replace(/ /gi, ""));
  if (Math.ceil(nb) !== nb) return "Nombre avec virgule non géré.";

  n = nb.toString().length;
  switch (n) {
    case 1:
      numberToLetter = Unite(nb);
      break;
    case 2:
      if (nb > 19) {
        quotient = Math.floor(nb / 10);
        reste = nb % 10;
        if (nb < 71 || (nb > 79 && nb < 91)) {
          if (nb > 20 && nb < 30) {
            numberToLetter = Unite(reste) + " warn-" + Dizaine(quotient * 10);
          } else {
            if (reste === 0) numberToLetter = Dizaine(quotient * 10);
            if (reste >= 1)
              numberToLetter = Unite(reste) + " ha " + Dizaine(quotient * 10);
          }
        } else
          numberToLetter =
            Dizaine(10 + reste) + " ha " + Dizaine((quotient - 1) * 10);
      } else numberToLetter = Dizaine(nb);
      break;
    case 3:
      quotient = Math.floor(nb / 100);
      reste = nb % 100;
      if (quotient === 1 && reste === 0) numberToLetter = "kant";
      if (quotient === 1 && reste !== 0)
        numberToLetter = "kant " + breizhNumberToLetter(reste);
      if (quotient > 1 && reste === 0) {
        if ((quotient >= 2 && quotient <= 4) || quotient === 9) {
          numberToLetter = Unite(quotient) + " c'hant";
        } else numberToLetter = Unite(quotient) + " kant";
      }
      if (quotient > 1 && reste !== 0)
        if ((quotient >= 2 && quotient <= 4) || quotient === 9) {
          numberToLetter =
            Unite(quotient) + " c'hant " + breizhNumberToLetter(reste);
        } else
          numberToLetter =
            Unite(quotient) + " kant " + breizhNumberToLetter(reste);
      break;
    case 4:
      quotient = Math.floor(nb / 1000);
      reste = nb - quotient * 1000;
      if (quotient === 1 && reste === 0) numberToLetter = "mil";
      if (quotient === 1 && reste !== 0)
        numberToLetter = "mil " + breizhNumberToLetter(reste);
      if (quotient > 1 && reste === 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter = breizhNumberToLetter(quotient) + " vil";
        } else numberToLetter = breizhNumberToLetter(quotient) + " mil";
      }
      if (quotient > 1 && reste !== 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " vil " +
            breizhNumberToLetter(reste);
        } else
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " mil " +
            breizhNumberToLetter(reste);
      }

      break;
    case 5:
      quotient = Math.floor(nb / 1000);
      reste = nb - quotient * 1000;
      if (quotient === 1 && reste === 0) numberToLetter = "mil";
      if (quotient === 1 && reste !== 0)
        numberToLetter = "mil " + breizhNumberToLetter(reste);
      if (quotient > 1 && reste === 0)
        numberToLetter = breizhNumberToLetter(quotient) + " mil";
      if (quotient > 1 && reste !== 0)
        numberToLetter =
          breizhNumberToLetter(quotient) +
          " mil " +
          breizhNumberToLetter(reste);
      break;
    case 6:
      quotient = Math.floor(nb / 1000);
      reste = nb - quotient * 1000;
      if (quotient === 1 && reste === 0) numberToLetter = "mil";
      if (quotient === 1 && reste !== 0)
        numberToLetter = "mil " + breizhNumberToLetter(reste);
      if (quotient > 1 && reste === 0)
        numberToLetter = breizhNumberToLetter(quotient) + " mil";
      if (quotient > 1 && reste !== 0)
        numberToLetter =
          breizhNumberToLetter(quotient) +
          " mil " +
          breizhNumberToLetter(reste);
      break;
    case 7:
      quotient = Math.floor(nb / 1000000);
      reste = nb % 1000000;
      if (quotient === 1 && reste === 0) numberToLetter = "ur milion";
      if (quotient === 1 && reste !== 0)
        numberToLetter = "ur milion " + breizhNumberToLetter(reste);
      if (quotient > 1 && reste === 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter = breizhNumberToLetter(quotient) + " vilion";
        } else numberToLetter = breizhNumberToLetter(quotient) + " milion";
      }

      if (quotient > 1 && reste !== 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " vilion " +
            breizhNumberToLetter(reste);
        } else
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " milion " +
            breizhNumberToLetter(reste);
      }

      break;
    case 8:
      quotient = Math.floor(nb / 1000000);
      reste = nb % 1000000;
      if (quotient === 1 && reste === 0) numberToLetter = "ur milion";
      if (quotient === 1 && reste !== 0)
        numberToLetter = "ur milion " + breizhNumberToLetter(reste);
      if (quotient > 1 && reste === 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter = breizhNumberToLetter(quotient) + " vilion";
        } else numberToLetter = breizhNumberToLetter(quotient) + " milion";
      }

      if (quotient > 1 && reste !== 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " vilion " +
            breizhNumberToLetter(reste);
        } else
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " milion " +
            breizhNumberToLetter(reste);
      }

      break;
    case 9:
      quotient = Math.floor(nb / 1000000);
      reste = nb % 1000000;
      if (quotient === 1 && reste === 0) numberToLetter = "ur milion";
      if (quotient === 1 && reste !== 0)
        numberToLetter = "ur milion " + breizhNumberToLetter(reste);
      if (quotient > 1 && reste === 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter = breizhNumberToLetter(quotient) + " vilion";
        } else numberToLetter = breizhNumberToLetter(quotient) + " milion";
      }
      numberToLetter = breizhNumberToLetter(quotient) + " milion";
      if (quotient > 1 && reste !== 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " vilion " +
            breizhNumberToLetter(reste);
        } else
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " milion " +
            breizhNumberToLetter(reste);
      }

      break;
    case 10:
      quotient = Math.floor(nb / 1000000000);
      reste = nb - quotient * 1000000000;
      if (quotient === 1 && reste === 0) numberToLetter = "ur miliard";
      if (quotient === 1 && reste !== 0)
        numberToLetter = "ur miliard " + breizhNumberToLetter(reste);
      if (quotient > 1 && reste === 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter = breizhNumberToLetter(quotient) + " viliard";
        } else numberToLetter = breizhNumberToLetter(quotient) + " miliard";
      }

      if (quotient > 1 && reste !== 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " viliard " +
            breizhNumberToLetter(reste);
        } else
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " miliard " +
            breizhNumberToLetter(reste);
      }

      break;
    case 11:
      quotient = Math.floor(nb / 1000000000);
      reste = nb - quotient * 1000000000;
      if (quotient === 1 && reste === 0) numberToLetter = "ur miliard";
      if (quotient === 1 && reste !== 0)
        numberToLetter = "ur miliard " + breizhNumberToLetter(reste);
      if (quotient > 1 && reste === 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter = breizhNumberToLetter(quotient) + " viliard";
        } else numberToLetter = breizhNumberToLetter(quotient) + " miliard";
      }

      if (quotient > 1 && reste !== 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " viliard " +
            breizhNumberToLetter(reste);
        } else
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " miliard " +
            breizhNumberToLetter(reste);
      }

      break;
    case 12:
      quotient = Math.floor(nb / 1000000000);
      reste = nb - quotient * 1000000000;
      if (quotient === 1 && reste === 0) numberToLetter = "ur miliard";
      if (quotient === 1 && reste !== 0)
        numberToLetter = "ur miliard " + breizhNumberToLetter(reste);
      if (quotient > 1 && reste === 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter = breizhNumberToLetter(quotient) + " viliard";
        } else numberToLetter = breizhNumberToLetter(quotient) + " miliard";
      }

      if (quotient > 1 && reste !== 0) {
        if (quotient === 2 || quotient === 9) {
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " viliard " +
            breizhNumberToLetter(reste);
        } else
          numberToLetter =
            breizhNumberToLetter(quotient) +
            " miliard " +
            breizhNumberToLetter(reste);
      }
      break;
  }

  return numberToLetter;
}

// const nb = Math.floor(Math.random() * 999999999999);
// const nbToLetter = breizhNumberToLetter(nb);
// const resultat = nb;

// console.log("*------------------------------------*");
// console.log(" ");
// console.log(nb, "numberToLetter ==>", nbToLetter);
// console.log(" ");
// console.log("*------------------------------------*");
// console.log("*---------->", nbToLetter, " resultat attendu ==>", resultat);
