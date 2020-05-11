class example1{
    public strarray:string[];
    public longString:string;
    constructor(){
        this.strarray=["this","is","something","new","to","learn"];
        this.longString= "this sentence has five words. here are five more words.five-word sentences are fine. but several together become monotonous. listen to what is happening.the writing is getting boring. the sound of it drones. it’s like a stuck record. the ear demands some variety. Now listen."
    }
    sortedString():string[]{
        return this.strarray.sort((a,b) => a.length - b.length);
    }
    reverseArray():string[]{
        let temp=this.strarray.sort((a,b) => a.length - b.length);
        return temp.reverse();
    }
    indexOfAInString():void{
        for(let i=0; i< this.longString.length; i++)
        {
            if(this.longString[i] == 'a' || this.longString[i] == 'A' )
            {
                console.log("index of a => "+i);
            }
        }
    }

    uppercase(){
        let  temp=this.longString.charAt(0).toUpperCase()+ this.longString.slice(1);
        for(let i=temp.indexOf('.') +1;i<this.longString.length;i++)
        {
            if(temp[i]!=' ')
            {
                temp=temp.slice(0,i) + temp.charAt(i).toUpperCase()+ temp.slice(i+1);
                i=temp.indexOf('.',i);
            }
        }
        console.log(temp);
        
    }
    NumberOfStatements():number{
        let count = 0;
        for(let i=0; i< this.longString.length; i++)
        {
            if(this.longString[i] == '.' )
            {
               count++;
            }
        }
        return count;
    }
}
let obj= new example1();
console.log("sorted string is => "+ obj.sortedString());
console.log("\nreversed array => "+ obj.reverseArray());
obj.indexOfAInString();
console.log("\nno of statements=> "+ obj.NumberOfStatements()+"\n");
obj.uppercase();

