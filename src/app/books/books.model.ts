export interface Books {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  fechaPublicacion?: Date;
  autor: {
    id: string;
    nombreCompleto: string;
  };
}
