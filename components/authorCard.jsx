import { AccountCircle } from "@material-ui/icons";
const AuthorCard = () => {
    return (
        <div className=" rounded-3  p-3 mb-4 border border-secondary shadow">
                {authors.map(author=>{
                    return(
                        <div className="row d-flex align-items-center justify-content-between border-bottom mb-3 py-2" 
                        key={author.id}>
                            <div className="col-6">
                                <AccountCircle className="fs-1 me-3 d-none d-sm-inline"/>
                                {author.name}
                            </div>
                            <div className="col-4 text-end">
                                {author.posts} posts
                            </div>
                        </div>

                    )
                })}
        </div>
    )
}
const authors = [
    {
        id: 1,
        name: "lewis Hamilton",
        posts: 0
    },
    {
        id: 2,
        name: "Jenifer Becket",
        posts: 7
    },
    {
        id: 3,
        name: "Mukasa Johnson",
        posts: 17
    },
    {
        id: 4,
        name: "Aedel Miriam",
        posts: 2
    },
    {
        id: 5,
        name: "Melissa Nagayi",
        posts: 7
    },
    {
        id: 6,
        name: "Ali Abdul-wadood",
        posts: 17
    },
    {
        id: 7,
        name: "Alfredo Rico",
        posts: 1
    },
]
export default AuthorCard;