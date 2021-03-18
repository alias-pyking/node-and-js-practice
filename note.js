
class Note{
    constructor(key, title, body){
        this._key = key;
        this._title = title;
        this._body = body;
    }

    get title(){
        return this._title;
    }

    get key(){
        return this._key;
    }

    get body(){
        return this._body;
    }

    set key(newKey){
        return this._key = newKey;
    }

    set title(newTitle){
        return this._title = newTitle;
    }

    set body(newBody){
        return this._body = newBody;
    }
}

class LoveNote extends Note{

    constructor(key, title, body, heart){
        super(key, title, body);
        this._heart = heart;
    }

    get heart(){
        return this._heart;
    }
    
    set heart(newHeart){
        return this._heart = newHeart;
    }


}

const aNote = new Note("sk", "Shubham", "Shubham Kumar");

console.log(aNote.body);
aNote.body = "new Body";
console.log(aNote.body);