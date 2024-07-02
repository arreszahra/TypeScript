interface Vehicule {
    make:string;
    model: string;
    year: number;
    start():void ;
        

}


class Car implements Vehicule{
    make:string;
    model:string;
    year:number;
  
    constructor(make:string,model:string,year:number){
    this.make=make,
    this.model=model,
    this.year=year
  }
  start():void{
    console.log(`Car Engine ${this.model} started`);
   }
}
let Car1= new Car ("anything", "mercedes" , 2024);
 Car1.start();