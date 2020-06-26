class Personnage{
    constructor(pseudo,classe,sante,attaque,niveau){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;

    }
    evoluer(){
        this.niveau = this.niveau + 1;
        console.log(this.pseudo + "passe au niveau " + ' '+ this.niveau);

    }

    verifierSante(){
        if( this.sante == 0 || this.sante < 0){
            this.sante = 0;
            console.log(this.pseudo + ' a perdu !');
        }
    }

    get informations(){
        return (this.pseudo+'('+this.classe+') ' + ' ' + 'a ' +this.sante+' '+'points de vies et est au niveaux '+' '+this.niveau);
    }
}
class magicien extends Personnage{
    constructor(pseudo,classe,sante,attaque,niveau){
        super(pseudo,classe,sante,attaque,niveau)
        this.classe = 'Magicien';
        this.sante = 170;
        this.attaque = 90;
}
attaquer(personnage){
    personnage.sante -= this.attaque;
    console.log(this.pseudo + 'attaque' +personnage.pseudo+'en lancant un sort'+'('+this.attaque+' dégats)');
    this.evoluer();
    personnage.verifierSante();
}
coupSpecial(personnage){
    personnage.sante -= this.attaque * 5;
    console.log(this.pseudo + 'attaque avec son coup spécial puissance des arcanes' +personnage.pseudo+'('+this.attaque*5+' dégats)');
    this.evoluer();
    personnage.verifierSante();
}

}

class guerrier extends Personnage{
    constructor(pseudo,classe,sante,attaque,niveau){
        super(pseudo,classe,sante,attaque,niveau)
        this.classe = 'Guerrier';
        this.sante = 350;
        this.attaque = 50;
}
attaquer(personnage){
    personnage.sante -= this.attaque;
    console.log(this.pseudo + 'attaque' +personnage.pseudo+'avec son épée'+'('+this.attaque+' dégats)');
    this.evoluer();
    personnage.verifierSante();
}
coupSpecial(personnage){
    personnage.sante -= this.attaque * 5;
    console.log(this.pseudo + 'attaque avec son coup spécial haches de guerres' +personnage.pseudo+'('+this.attaque*5+' dégats)');
    this.evoluer();
    personnage.verifierSante();
}

}
var gandalf = new magicien('Houdini');
var thor = new guerrier('Conan');
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);
