class View{
    _data

    constructor(){}

    render(data){
        this._data = data;
        const markup = this._generateMarkup();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
        this._data.innerHTML = "";
    }

}

export default View;