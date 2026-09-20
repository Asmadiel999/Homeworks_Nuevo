

export interface pageA{
    nombre: string;
}

export class PageNode{
    page: pageA;
    next: PageNode | null = null; 
    prev: PageNode | null = null; 

    constructor(page: pageA){
        this.page = page;
    }
}

export class PageList{
    head: PageNode | null = null; 
    tail: PageNode | null = null; 
    currentPage: PageNode | null = null; 

    append(page: pageA): void{
        const newPage = new PageNode(page); 

        if (!this.head){
            this.head = newPage;
            this.tail = newPage; 
            this.currentPage = newPage;
            return;
        }else{
            if (this.tail){
                this.tail.next = newPage;
                newPage.prev = this.tail;
                this.tail = newPage
            }
        }

    }

    nextPage(): pageA | null{
        if (this.currentPage && this.currentPage.next){
            this.currentPage = this.currentPage.next;
            return this.currentPage.page;
        }

        return null;
    }

    prevPage(): pageA | null{
        if (this.currentPage && this.currentPage.prev){
            this.currentPage = this.currentPage.prev; 
            return this.currentPage.page;
        }

        return null; 
    }
}