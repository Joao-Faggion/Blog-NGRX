//ideia ricardinho das brackets
export interface BlogModel {
    id: number,
    title :string,
    description: string
}

export interface Blogs { 
    blogList: BlogModel[];
    errorMessage: string,
}