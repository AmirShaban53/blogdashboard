import { AccountCircle } from "@material-ui/icons";
const AuthorCard = () => {
    return (
        <div className="card shadow-sm rounded-3 py-0 mb-4 bg-dark text-light">
            <div className="card-body py-1">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-2 p-0">
                        <AccountCircle className="fs-1"/>
                        {/* <img className="img-fluid rounded-circle" src="/user.jpg" alt="" /> */}
                    </div>
                    <div className="col-6 text-end">
                        james Ethode
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AuthorCard;