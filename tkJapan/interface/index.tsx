export interface INews{
    id:number
  
    attributes:{
        title   :   String, 
        meta    :   String, 
        image   :   string,
        creator :   string
        date    :   string,
        link    : string,
        category : string

    } 
}
export interface IFearture {
    title: string,
    data:string

}