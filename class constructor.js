class Intern {
    constructor (age) {
        this.age = age;
    }

    dance(){
        return `dancing now as a ${this.age} year old`
    }
    speak(word) {
         return word;
    }
    }
        const Tomiwa = new Intern (25);
        Tomiwa.usechannelWord = function() {
            return "@ channel I am the team lead"
        }
        
        const David = new Intern (30);
        
        
        console.log(David.usechannelWord ())
        console.log(Tomiwa.dance ())

        
        
    
/////////////////
class Intern {
    constructor (age) {
        this.age = age;
    }
    dance(){
        return `dancing now as a ${this.age} year old`
    }
    speak(word) {
        return word;
        }
    }

    class Tomiwa extends Intern{ //adding a child 
        const TomiwaJr = new Tomiwa(25);
        
        TomiwaJr.usechannelWord = function() {
            return `@ channel I am the team lead`
        }
    }
        const David = new Intern(30);
        
        
        console.log(David.usechannelWord ())
        console.log(TomiwaJr.usechannelWord ())
        


        ///////////move the tomiwa jr from inside extends
        class Intern {
            constructor (age) {
                this.age = age;
            }
        
            dance(){
                return `dancing now as a ${this.age} year old`
            }
                speak(word) {
                    return word;
                }
            }
        
            class Tomiwa extends Intern{
                usechannelWord() {
                    return `@ channel I am the team lead`
                }
            }
                const TomiwaJr = new Tomiwa(25); //see here it extend frm tomiwa
                
                const David = new Intern(30);
                
                
                // console.log(David.usechannelWord ())
                console.log(TomiwaJr.usechannelWord ())
                