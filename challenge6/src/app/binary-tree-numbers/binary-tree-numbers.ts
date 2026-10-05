import { Component, OnInit } from '@angular/core';
import { BinaryTree } from '../../resources/binary-tree';

@Component({
  selector: 'app-binary-tree-numbers',
  imports: [],
  templateUrl: './binary-tree-numbers.html',
  styleUrl: './binary-tree-numbers.css',
})
export class BinaryTreeNumbers implements OnInit {
  tree = new BinaryTree()

  ngOnInit(){
    this.tree.insert(25)
    this.tree.insert(15)
    this.tree.insert(22)
    this.tree.insert(10)
    this.tree.insert(12)
    this.tree.insert(11)
    this.tree.insert(18)
    this.tree.insert(50)

    this.tree.inorder() //se imprime en consola el árbol en inorder

    this.tree.postorder() // se imprime en consola el árbol en postorder

    this.tree.preorder() // se imprime en consola el árbol en preorder

    this.tree.valueIs(0) //verifica y arroja un mensaje en consola si el valor se encuentra o no.
  }
}
