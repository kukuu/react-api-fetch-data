/*
 * The topics list reducer will always return an array of lists no matter what
 * You need to return something, so if there are no lists then we return an empty array
 * */



export default function () {
    return [
        {
            id: 1,
            first: "Alan Smith",
            stageName:"",
            description: "Dancer",
            thumbnail: "",
            Address1:"",
            Address2:"",
            Email:"",
            Telephone:"",
            languages:""
           
        },
        {
            id: 2,
            first: "Paul Jenkins",
            stageName:"",
            description: "Actor",
            thumbnail: "",
            Address1:"",
            Address2:"",
            Email:"",
            Telephone:"",
            languages:""

        },
        {
            id: 3,
            first: "Joe Blogs",
            description: "Artist",
            thumbnail: "",
            Address1:"",
            Address2:"",
            Email:"",
            Telephone:"",
            languages:""
        }
        
    ]
}


