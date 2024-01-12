export class Product{
    

    constructor(public id:any,public name:any,public desc:any,public price:any,public category:any,public qty:any){
        
    }



    public set pid(id:string){
        this.id = id;
    }
    public get pid(){
        return this.id;
    }

    public set Category(category:string){
        this.Category = category;
    }
    public get Category(){
        return this.category;
    }

    public set Pname(name:string){
        this.name = name;
    }
    public get Pname(){
        return this.name;
    }

    public set Pdesc(desc:string){
        this.desc = desc;
    }
    public get Pdesc(){
        return this.desc;
    }

    public set Pprice(price:number){
        this.price = price;
    }
    public get Pprice(){
        return this.price;
    }

    public set Pqty(qty:number){
        this.qty = qty;
    }
    public get Pqty(){
        return this.qty;
    }
    
}