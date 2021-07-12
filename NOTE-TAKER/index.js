function getNoteId() {
    let noteObject = getExistingNotes() //store the note from the local storage in noteObject
    if(!noteObject){
        return 1
    } 
    const keysArray = Object.keys(noteObject)// gets the key-number of the noteobject & store it in a key-array
    const numberKeys = keysArray.map((key)=>Number(key)) //it will now map/convert the noteobject-key to number-key
    // console.log(numberKeys)
    return Math.max(...numberKeys) * 1
}

function getExistingNotes(){
    let notes = localStorage.getItem('notes')
    if(!notes){
        return null
    }
    return JSON.parse(notes)
} 