// ! Dominio Capa de datos puros
// ! Entity: Modelo de Datos


export class Tasks {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public description: string,
        public status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED',
        public createdAt: Date
    ) {}

   // ! LOgica en la capa de dominio
   complete() {
        this.status = 'COMPLETED';
    } 
} 