export interface IColaborador {
    id?: number | string
    nome: string
    cargo: string
    imagem: string
    favoritar?: boolean
    time: string
}