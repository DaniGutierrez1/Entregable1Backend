class productManager{
    constructor(){
        this.productos=[];
        
    }

    addProduct(title,description,price,thumbnail,code,stock){
        let newID;
        let newCode;
        if (!this.productos.length){
            newID=1;
            newCode=1;
        }else{
            newID = this.productos[this.productos.length-1].id+1
            newCode = this.productos[this.productos.length-1].code+1
        }

        const nuevoProducto={
            id:newID,
            title,
            description,
            price,
            thumbnail,
            code:newCode,
            stock,
            
        };
        this.productos.push(nuevoProducto);
        console.log('Nuevo producto', nuevoProducto);

     /*    const codeCheck = this.productos.id;
        const codeExist = codeCheck.some((elm)=>elm ===this.productos.code);
        if(codeExist){
            console.log("Este codigo ya fue usado")
        }else{
            this.productos.id.push(code);
        } */
        
    }

    getProducts(){
        return this.productos
    }
    getProductById(idProducto){
        const idExist = this.productos.some((producto)=>{return producto.id === idProducto})
        if(!idExist){
            console.log('Not found')
        }else{
            const localizacionProducto = this.productos.filter((producto)=>{return producto.id === idProducto})
            console.log("El producto con ese ID es", localizacionProducto);
             
        }
    }
}

const AdminManager = new productManager()
console.log("productos en tienda", AdminManager)

const productosTienda = AdminManager.getProducts()
console.log('Los productos son', productosTienda);

AdminManager.addProduct("control","inalambrico por dongle","$50000","htpp","","2")
AdminManager.addProduct("monitor","IPS","$30000","htpp","","4")

AdminManager.getProductById(2);