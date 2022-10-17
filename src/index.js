/**
 * @description	Input advice loader
 * @class InputAdviser
 */
 class InputAdviser{
	input;
	id='el_datalist_'+((Math.random()*9999999999)|0)
	dataList;
	/**
	 * Creates an instance of InputAdviser.
	 * @param {HTMLElement|string} input the input element or a string element selector
	 * @param {function(string):array<string>} loader an advice loader function
	 */
	constructor(input,loader){
		if(typeof input === 'string'){
			input=document.querySelector(input);
		}
		this.input=input;
		this.dataList=document.createElement('datalist');
		this.dataList.id=this.id;
		document.body.appendChild(this.dataList);
		input.setAttribute('list',this.id);

		if(loader){
			let timer;
			this.input.addEventListener('input',e=>{
				if(timer){
					clearTimeout(timer);
				}
				console.log('input');
				timer=setTimeout(async ()=>{
					let list=await loader(input.value);
					if(!list)return;
					this.setList(list,list.descList);
				},500);
			});
		}
	}
	/**
	 *set content of the adviser
	 *
	 * @param {Array<string>} list list of values
	 * @param {Array<string>} descList list of descriptions, the length of this array must be euqal to the list before
	 */
	setList(list,descList){
		this.dataList.innerHTML='';
		if(descList && descList.length!==list.length){
			throw(new Error('length of descList is not equal to list\'s'));
		}
		for(let i=0;i<list.length;i++){
			const v=list[i],
				desc=descList?descList[i]:v;
			if(v==this.input.value)continue;
			let o=document.createElement('option');
			o.innerHTML=desc;
			o.value=v;
			this.dataList.appendChild(o);
		}
	}
	/**
	 *remove this adviser
	 */
	close(){
		if(this.dataList.parentNode){
			this.dataList.parentNode.removeChild(this.dataList);
		}
	}
}

export default InputAdviser;