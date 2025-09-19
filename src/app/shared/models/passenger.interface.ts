export interface Ipass {
    id : number
    fullName : string
    checkedIn : boolean
   checkInDate : number | null
   children : null | Array<Ichild>
}

export interface Ichild {
    fName : string
    age : number
}