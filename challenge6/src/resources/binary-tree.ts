class Nodo {
    value: any;  
    left: Nodo | null;
    right: Nodo | null;  

    constructor (value: any){
        this.value = value;
        this.left = null;
        this.right = null; 
    }

    isLeaf(){
        if (this.left === null && this.right === null){
            return true; 
        }else{
            return false; 
        }
    }
}

export class BinaryTree{
    root: any;


    constructor(){
        this.root = null; 
    }

    insert(value: any){
        const newNode = new Nodo(value);

        if(!this.root){
            this.root = newNode;
            return;
        }

        let current = this.root; 
        while (true) {
            if (value < current.value){
                if(!current.left){
                    current.left = newNode;
                    return;
                }

                current = current.left; 
            } else{
                if(!current.right){
                    current.right = newNode;
                    return;
                }

                current = current.right;
            }
        }

        
    }

    valueIs(value: any): void{
        let current = this.root;
       
        while(current !== null && current !== undefined){
            if (value === current.value){
                console.log("Sí se encuentra el valor"); 
                return; 
            }

            if (value < current.value){
                current = current.left;
            }else{
                current = current.right;
            }
        } 
        
        console.log("no se encuentra")
    }

    preorder(node: any = this.root){
        if (!node) return; 
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right); 
    }

    inorder(node: any = this.root){
        if (!node) return;
        this.inorder(node.left);
        console.log(node.value); 
        this.inorder(node.right);
    }

    postorder(node: any = this.root){
        if(!node) return; 
        this.postorder(node.left); 
        this.postorder(node.right); 
        console.log(node.value)
    }
}