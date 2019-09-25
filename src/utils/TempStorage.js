class TempStorage{
    constructor(){
        this.buffer = {
                
        }
    }

    setBuffer(key,value){
        this.buffer[key] = value
    }

    getBuffer(key){
        return this.buffer[key]
    }

}

const TempStore = new TempStorage();
export default TempStore;