
export class MetodoDePago<TodoMetodosDePago> {
    protected tipo: TodoMetodosDePago;

    constructor(_tipo: TodoMetodosDePago) {
        this.tipo = _tipo;
    }
};

