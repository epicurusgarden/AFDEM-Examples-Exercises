class GreekPoet {
   constructor(firstName, lastName, dateOfBirth, dateOfDeath, famousPoems) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dateOfBirth = dateOfBirth;
      this.dateOfDeath = dateOfDeath;
      this.famousPoems = famousPoems;

      this.smallBio = function(){
          return `O ${this.firstName} ${this.lastName} γεννήθηκε το ${this.dateOfBirth} και πέθανε το ${this.dateOfDeath}`;
      }
   }
}

const Elytis = new GreekPoet('Οδυσσέας', 'Ελύτης', 1911, 1996, new Map());

Elytis.famousPoems.set([(1, "Άσμα ηρωικό και πένθιμο για τον χαμένο ανθυπολοχαγό της Αλβανίας")], [(2, "Το Άξιον Εστί")]);

console.log(Elytis)