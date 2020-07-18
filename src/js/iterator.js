class MyIterator{
	constructor(data){
		this.i = 0;
		this.elements = data;
	}
	
	next(){
		return this.elements[this.i++];
	}
	
	hasNext(){
		return this.i < this.elements.length;
	}
}